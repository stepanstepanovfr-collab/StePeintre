"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const initialState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  workType: "",
  surface: "",
  message: ""
};

export function QuoteForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const requiredMissing = !form.name || !form.phone || !form.email || !form.city || !form.workType;

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (status === "error") setStatus("idle");
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(requiredMissing ? "error" : "success");
  }

  return (
    <form
      onSubmit={submit}
      className="grid gap-4 rounded-lg border border-ink/10 bg-white/85 p-5 shadow-card backdrop-blur md:grid-cols-2 md:p-8"
      aria-describedby="quote-status"
      noValidate
    >
      <Field
        label="Nom"
        value={form.name}
        required
        showError={status === "error"}
        onChange={(value) => updateField("name", value)}
      />
      <Field
        label="Téléphone"
        value={form.phone}
        type="tel"
        required
        showError={status === "error"}
        onChange={(value) => updateField("phone", value)}
      />
      <Field
        label="Email"
        value={form.email}
        type="email"
        required
        showError={status === "error"}
        onChange={(value) => updateField("email", value)}
      />
      <Field
        label="Ville"
        value={form.city}
        required
        showError={status === "error"}
        onChange={(value) => updateField("city", value)}
      />
      <label className="grid gap-2 text-sm font-black text-ink">
        Type de travaux
        <select
          className="min-h-12 rounded-lg border border-ink/15 bg-white px-4 text-base outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
          value={form.workType}
          required
          aria-invalid={status === "error" && !form.workType ? "true" : undefined}
          onChange={(event) => updateField("workType", event.target.value)}
        >
          <option value="">Sélectionner</option>
          <option>Peinture murs</option>
          <option>Peinture plafonds</option>
          <option>Rénovation complète</option>
          <option>Finitions premium</option>
        </select>
      </label>
      <Field label="Surface estimée" value={form.surface} onChange={(value) => updateField("surface", value)} />
      <label className="grid gap-2 text-sm font-black text-ink md:col-span-2">
        Message
        <textarea
          className="min-h-32 rounded-lg border border-ink/15 bg-white px-4 py-3 text-base outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
          value={form.message}
          placeholder="Décrivez les pièces, l'état des murs et vos délais."
          onChange={(event) => updateField("message", event.target.value)}
        />
      </label>
      <button
        className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-gold px-6 font-black text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-gold-soft md:col-span-2"
        type="submit"
      >
        Envoyer ma demande <Send className="size-4" aria-hidden="true" />
      </button>
      <p
        id="quote-status"
        className={`min-h-6 rounded-lg text-sm font-bold md:col-span-2 ${
          status === "error"
            ? "border border-red-200 bg-red-50 p-3 text-red-800"
            : status === "success"
              ? "border border-emerald-200 bg-emerald-50 p-3 text-emerald-900"
              : "text-sm text-smoke"
        }`}
        aria-live="polite"
      >
        {status === "error" && "Complétez les champs obligatoires pour préparer votre demande."}
        {status === "success" && "Demande prête. Branchez ici votre email, votre CRM ou un service de formulaire."}
      </p>
    </form>
  );
}

type FieldProps = {
  label: string;
  value: string;
  type?: string;
  required?: boolean;
  showError?: boolean;
  onChange: (value: string) => void;
};

function Field({ label, value, type = "text", required = false, showError = false, onChange }: FieldProps) {
  const invalid = showError && required && !value;

  return (
    <label className="grid gap-2 text-sm font-black text-ink">
      {label}
      <input
        className="min-h-12 rounded-lg border border-ink/15 bg-white px-4 text-base outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
        value={value}
        type={type}
        required={required}
        aria-invalid={invalid || undefined}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
