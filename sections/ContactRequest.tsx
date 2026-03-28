"use client";

import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { LuLock } from "react-icons/lu";
import DiagnosticFeatureItem from "@/components/DiagnosticFeatureItem";
import RequestFormField from "@/components/RequestFormField";
import {
  diagnosticFeatures,
  diagnosticSectionData,
} from "@/lib/data";
import {
  sendDiagnosticEmails,
  type DiagnosticRequestPayload,
} from "@/app/actions/sendDiagnosticEmails";
import { spaceGrotesk } from "@/app/fonts";

type DiagnosticFormValues = {
  fullName: string;
  phone: string;
  email: string;
  vehicleModel: string;
  failureDescription: string;
};

export default function ContactRequest() {
  const [serverMessage, setServerMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DiagnosticFormValues>({
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      vehicleModel: "",
      failureDescription: "",
    },
  });

  const onSubmit = handleSubmit((values) => {
    setServerMessage("");

    const payload: DiagnosticRequestPayload = {
      fullName: values.fullName,
      phone: values.phone,
      email: values.email,
      vehicleModel: values.vehicleModel,
      failureDescription: values.failureDescription,
    };

    startTransition(async () => {
      const result = await sendDiagnosticEmails(payload);
      setIsSuccess(result.ok);
      setServerMessage(result.message);

      if (result.ok) {
        reset();
      }
    });
  });

  return (
    <section
      id={diagnosticSectionData.id}
      className="bg-[radial-gradient(circle_at_18%_35%,rgba(225,29,72,0.15),transparent_40%),linear-gradient(90deg,#090909_0%,#0c0c0f_50%,#131318_100%)] py-20"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:px-8">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.35em] text-primary">
            {diagnosticSectionData.eyebrow}
          </p>

          <h2
            className={`mt-4 text-5xl font-bold leading-[0.92] text-main sm:text-6xl ${spaceGrotesk.className}`}
          >
            {diagnosticSectionData.titleLine1}
            <br />
            <span className="text-primary">{diagnosticSectionData.titleLine2}</span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-zinc-300">
            {diagnosticSectionData.description}
          </p>

          <ul className="mt-10 space-y-4">
            {diagnosticFeatures.map((feature) => (
              <DiagnosticFeatureItem key={feature.id} feature={feature} />
            ))}
          </ul>
        </div>

        <div className="border border-white/10 bg-white/5 p-6 sm:p-8">
          <form className="space-y-5" onSubmit={onSubmit} noValidate>
            <div className="grid gap-4 md:grid-cols-2">
              <RequestFormField
                label="Nombre completo"
                placeholder="Juan Perez"
                registration={register("fullName", {
                  required: "Ingresa tu nombre completo",
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener al menos 3 caracteres",
                  },
                })}
                error={errors.fullName?.message}
              />

              <RequestFormField
                label="Telefono de contacto"
                placeholder="+58 412 0000000"
                type="tel"
                registration={register("phone", {
                  required: "Ingresa un telefono de contacto",
                  pattern: {
                    value: /^[+]?[(]?[0-9\s\-()]{7,20}$/,
                    message: "Ingresa un numero telefonico valido",
                  },
                })}
                error={errors.phone?.message}
              />
            </div>

            <RequestFormField
              label="Correo electronico"
              placeholder="usuario@correo.com"
              type="email"
              registration={register("email", {
                required: "Ingresa un correo electronico",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Ingresa un correo electronico valido",
                },
              })}
              error={errors.email?.message}
            />

            <RequestFormField
              label="Modelo del modulo / vehiculo"
              placeholder="TOYOTA 4RUNNER / BOSCH 5.3"
              registration={register("vehicleModel", {
                required: "Indica el modulo o modelo de vehiculo",
              })}
              error={errors.vehicleModel?.message}
            />

            <RequestFormField
              label="Describa la falla (opcional)"
              placeholder="Luz ABS encendida / pedal duro..."
              multiline
              rows={4}
              registration={register("failureDescription")}
              error={errors.failureDescription?.message}
            />

            {serverMessage ? (
              <p
                className={`text-sm ${
                  isSuccess ? "text-emerald-300" : "text-red-300"
                }`}
              >
                {serverMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-primary px-6 py-4 text-xs font-extrabold uppercase tracking-[0.25em] text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isPending ? "ENVIANDO..." : diagnosticSectionData.submitLabel}
            </button>

            <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
              <LuLock className="h-3.5 w-3.5" aria-hidden="true" />
              {diagnosticSectionData.secureLabel}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
