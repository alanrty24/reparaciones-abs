import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type RequestFormFieldProps = {
  label: string;
  placeholder: string;
  registration: UseFormRegisterReturn;
  error?: string;
  type?: "text" | "email" | "tel";
  multiline?: boolean;
  rows?: number;
};

export default function RequestFormField({
  label,
  placeholder,
  registration,
  error,
  type = "text",
  multiline = false,
  rows = 4,
}: RequestFormFieldProps) {
  const baseClassName =
    "w-full border border-white/10 bg-black/35 px-4 py-3 text-sm text-main outline-none transition focus:border-red-500 placeholder:text-zinc-500";

  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-500">
        {label}
      </span>

      {multiline ? (
        <textarea
          {...registration}
          rows={rows}
          placeholder={placeholder}
          className={`${baseClassName} resize-none`}
          aria-invalid={Boolean(error)}
        />
      ) : (
        <input
          {...registration}
          type={type}
          placeholder={placeholder}
          className={baseClassName}
          aria-invalid={Boolean(error)}
        />
      )}

      {error ? <p className="mt-1 text-xs text-red-400">{error}</p> : null}
    </label>
  );
}
