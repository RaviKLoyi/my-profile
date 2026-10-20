import { useEffect, useState } from "react";
import { home } from "../content";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-border bg-card px-4 py-3 font-mono text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-primary/60 focus:shadow-[0_0_0_2px_hsl(var(--primary)/0.1)]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status !== "success" && status !== "error") return;
    const timer = setTimeout(() => {
      setStatus("idle");
      setError(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setError("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setError(null);
    // Wire this to your form backend (e.g. Formspree, Netlify Forms, or an API route)
    await new Promise((resolve) => setTimeout(resolve, 800));
    form.reset();
    setStatus("success");
  };

  return (
    <form className="flex flex-col gap-4 text-left" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="contact-name" className="sr-only">
          Your name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder={home.contact.namePlaceholder}
          className={inputClass}
          disabled={status === "submitting"}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="sr-only">
          Your email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={home.contact.emailPlaceholder}
          className={inputClass}
          disabled={status === "submitting"}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="sr-only">
          Your message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder={home.contact.messagePlaceholder}
          className={`${inputClass} resize-none`}
          disabled={status === "submitting"}
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-200 hover:translate-y-[-1px] hover:shadow-[0_0_32px_hsl(var(--primary)/0.6)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : home.contact.submitLabel}
      </button>
      <p role="status" aria-live="polite" className="min-h-5 text-center text-sm">
        {status === "success" && (
          <span className="text-primary">{home.contact.successMessage}</span>
        )}
        {status === "error" && <span className="text-accent">{error}</span>}
      </p>
    </form>
  );
}
