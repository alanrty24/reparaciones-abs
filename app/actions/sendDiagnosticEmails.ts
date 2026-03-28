"use server";

import nodemailer from "nodemailer";

export type DiagnosticRequestPayload = {
  fullName: string;
  phone: string;
  email: string;
  vehicleModel: string;
  failureDescription?: string;
};

export type DiagnosticRequestResult = {
  ok: boolean;
  message: string;
};

function parseMailerError(error: unknown): string {
  const message = error instanceof Error ? error.message : String(error);

  if (/invalid login|username and password not accepted/i.test(message)) {
    return "No se pudo autenticar Gmail. Verifica EMAIL_USER y EMAIL_PASS (App Password).";
  }

  if (/enotfound|getaddrinfo/i.test(message)) {
    return "No se pudo conectar al servidor SMTP. Verifica tu conexion a internet.";
  }

  if (/self signed certificate|certificate/i.test(message)) {
    return "Error de certificado SSL al conectar con SMTP.";
  }

  return "No se pudo enviar la solicitud. Intenta nuevamente en unos minutos.";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function validatePayload(payload: DiagnosticRequestPayload): string | null {
  if (!payload.fullName.trim()) return "El nombre es obligatorio.";
  if (!payload.phone.trim()) return "El telefono es obligatorio.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return "El correo electronico no es valido.";
  }
  if (!payload.vehicleModel.trim())
    return "El modelo del vehiculo es obligatorio.";
  return null;
}

export async function sendDiagnosticEmails(
  payload: DiagnosticRequestPayload,
): Promise<DiagnosticRequestResult> {
  const validationError = validatePayload(payload);

  if (validationError) {
    return {
      ok: false,
      message: validationError,
    };
  }

  const emailUser = process.env.EMAIL_USER?.trim();
  const emailPass = process.env.EMAIL_PASS?.trim().replace(/[\s-]/g, "");

  if (!emailUser || !emailPass) {
    return {
      ok: false,
      message: "No se pudo enviar la solicitud por configuracion de correo.",
    };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass,
    },
    tls: {
      // Esta línea permite certificados que no estén firmados por una entidad oficial
      rejectUnauthorized: false,
    },
  });

  const fullName = escapeHtml(payload.fullName.trim());
  const phone = escapeHtml(payload.phone.trim());
  const email = escapeHtml(payload.email.trim());
  const vehicleModel = escapeHtml(payload.vehicleModel.trim());
  const failureDescription = escapeHtml(
    payload.failureDescription?.trim() || "No especificada",
  );

  const adminHtml = `
    <div style="font-family: Arial, Helvetica, sans-serif; background: #0d0d0f; color: #f4f4f5; padding: 28px; border-radius: 14px; border: 1px solid #27272a; max-width: 640px; margin: 0 auto;">
      <p style="letter-spacing: 0.2em; color: #f43f5e; font-size: 11px; margin: 0 0 16px;">NUEVA SOLICITUD WEB</p>
      <h2 style="margin: 0 0 18px; font-size: 28px; color: #ffffff;">Diagnostico solicitado</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 10px 0; color:#a1a1aa; width: 200px;">Nombre</td><td style="padding: 10px 0; color:#fff;">${fullName}</td></tr>
        <tr><td style="padding: 10px 0; color:#a1a1aa;">Telefono</td><td style="padding: 10px 0; color:#fff;">${phone}</td></tr>
        <tr><td style="padding: 10px 0; color:#a1a1aa;">Correo</td><td style="padding: 10px 0; color:#fff;">${email}</td></tr>
        <tr><td style="padding: 10px 0; color:#a1a1aa;">Modulo / Vehiculo</td><td style="padding: 10px 0; color:#fff;">${vehicleModel}</td></tr>
        <tr><td style="padding: 10px 0; color:#a1a1aa; vertical-align: top;">Falla reportada</td><td style="padding: 10px 0; color:#fff;">${failureDescription}</td></tr>
      </table>
      <p style="margin: 24px 0 0; color: #71717a; font-size: 12px;">Reparaciones ABS · Sistema de captacion web</p>
    </div>
  `;

  const customerHtml = `
    <div style="font-family: Arial, Helvetica, sans-serif; background: linear-gradient(135deg,#0b0b0c 0%,#1a1114 60%,#220b11 100%); color: #f4f4f5; padding: 30px; border-radius: 14px; border: 1px solid #3f1a25; max-width: 640px; margin: 0 auto;">
      <p style="letter-spacing: 0.2em; color: #f43f5e; font-size: 11px; margin: 0 0 14px;">REPARACIONES ABS</p>
      <h1 style="margin: 0; font-size: 32px; line-height: 1.05; color: #fff;">Solicitud recibida</h1>
      <h2 style="margin: 4px 0 18px; font-size: 32px; line-height: 1.05; color: #f43f5e;">Diagnostico en proceso</h2>
      <p style="margin: 0 0 14px; color:#d4d4d8; font-size: 15px;">Hola <strong>${fullName}</strong>, gracias por confiar en nuestro laboratorio tecnico.</p>
      <p style="margin: 0 0 20px; color:#d4d4d8; font-size: 15px;">Nuestro equipo se comunicara contigo en el transcurso de <strong>2 horas</strong> para coordinar el diagnostico de tu modulo ABS.</p>
      <div style="background:#0f0f12; border:1px solid #27272a; border-left:4px solid #e11d48; border-radius:10px; padding:14px 16px; margin-bottom: 18px;">
        <p style="margin:0 0 6px; color:#a1a1aa; font-size:12px; letter-spacing:0.12em;">RESUMEN DE SOLICITUD</p>
        <p style="margin:0; color:#fff; font-size:14px;"><strong>Vehiculo / Modulo:</strong> ${vehicleModel}</p>
      </div>
      <p style="margin: 0; color:#71717a; font-size: 12px;">Este mensaje fue generado automaticamente. Si no realizaste esta solicitud, ignora este correo.</p>
    </div>
  `;

  try {
    await transporter.verify();

    const emailToAdmin = transporter.sendMail({
      from: `"Reparaciones ABS Web" <${emailUser}>`,
      to: emailUser,
      replyTo: payload.email,
      subject: `Nueva solicitud de diagnostico - ${payload.fullName}`,
      html: adminHtml,
    });

    const emailToCustomer = transporter.sendMail({
      from: `"Reparaciones ABS" <${emailUser}>`,
      to: payload.email,
      subject: "Recibimos tu solicitud - Te contactamos en menos de 2 horas",
      html: customerHtml,
    });

    console.log(
      `Solicitud de diagnostico recibida: ${fullName} - ${email} - ${vehicleModel}`,
    );

    await Promise.all([emailToAdmin, emailToCustomer]);

    return {
      ok: true,
      message:
        "Solicitud enviada correctamente. Te contactaremos en menos de 2 horas.",
    };
  } catch (error) {
    console.error("Error enviando correo de diagnostico:", error);
    return {
      ok: false,
      message: parseMailerError(error),
    };
  }
}
