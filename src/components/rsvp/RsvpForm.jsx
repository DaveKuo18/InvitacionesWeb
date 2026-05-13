import { useMemo, useState } from "react";
import { Send } from "lucide-react";
import { submitRsvp } from "../../lib/rsvpStorage.js";

export function RsvpForm({ config, theme }) {
  const form = config.rsvp?.form;
  const fields = useMemo(() => form?.fields || [], [form?.fields]);
  const initialValues = useMemo(() => Object.fromEntries(fields.map((field) => [field.name, ""])), [fields]);
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  if (!form?.enabled) return null;

  const updateValue = (name, value) => setValues((current) => ({ ...current, [name]: value }));

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setError("");
    try {
      await submitRsvp(config, values);
      setStatus("success");
      setValues(initialValues);
    } catch (err) {
      setStatus("error");
      setError(err.message || "No pudimos enviar la confirmación.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-8 rounded-[2rem] bg-white/95 p-5 text-left shadow-xl sm:p-7" style={{ color: theme.text }}>
      <h3 className="font-serif text-3xl" style={{ color: theme.primaryDark }}>{form.title || "Confirma tu asistencia"}</h3>
      {form.description && <p className="mt-2 leading-7" style={{ color: theme.muted }}>{form.description}</p>}
      <div className="mt-6 grid gap-4">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2 text-sm font-semibold" style={{ color: theme.text }}>
            {field.label}{field.required ? " *" : ""}
            {field.type === "textarea" ? (
              <textarea
                value={values[field.name] || ""}
                onChange={(event) => updateValue(field.name, event.target.value)}
                required={field.required}
                rows={4}
                className="rounded-2xl border px-4 py-3 font-normal outline-none transition focus:ring-2"
                style={{ borderColor: theme.soft, "--tw-ring-color": theme.primary }}
              />
            ) : field.type === "select" ? (
              <select
                value={values[field.name] || ""}
                onChange={(event) => updateValue(field.name, event.target.value)}
                required={field.required}
                className="rounded-2xl border bg-white px-4 py-3 font-normal outline-none transition focus:ring-2"
                style={{ borderColor: theme.soft, "--tw-ring-color": theme.primary }}
              >
                <option value="">Seleccionar</option>
                {(field.options || []).map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            ) : (
              <input
                type={field.type || "text"}
                value={values[field.name] || ""}
                onChange={(event) => updateValue(field.name, event.target.value)}
                required={field.required}
                min={field.type === "number" ? "0" : undefined}
                className="rounded-2xl border px-4 py-3 font-normal outline-none transition focus:ring-2"
                style={{ borderColor: theme.soft, "--tw-ring-color": theme.primary }}
              />
            )}
          </label>
        ))}
      </div>
      {status === "success" && <p className="mt-5 rounded-2xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">Confirmación enviada. Muchas gracias.</p>}
      {status === "error" && <p className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">{error}</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] shadow-lg transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
        style={{ background: theme.primaryDark, color: "white" }}
      >
        <Send size={18} /> {status === "loading" ? "Enviando..." : form.submitLabel || "Enviar confirmación"}
      </button>
    </form>
  );
}
