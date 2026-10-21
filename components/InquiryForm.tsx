"use client";

import { useState } from "react";
import { CONTACT, INTERESTS } from "@/lib/data";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "ok" } | { kind: "error" };

export function InquiryForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const val = (k: string) => String(f.get(k) ?? "").trim();

    const payload = {
      first_name: val("firstName"),
      last_name: val("lastName"),
      email: val("email"),
      phone: val("phone"),
      organization: val("organization") || "—",
      interest: val("interest"),
      message: val("message") || "—",
    };

    setStatus({ kind: "sending" });
    try {
      const res = await fetch(CONTACT.inquiryEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.error || "Something went wrong.");
      setStatus({ kind: "ok" });
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus({ kind: "error" });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__grid">
        <label>
          First Name *
          <input name="firstName" required autoComplete="given-name" />
        </label>
        <label>
          Last Name *
          <input name="lastName" required autoComplete="family-name" />
        </label>
        <label>
          Email Address *
          <input type="email" name="email" required autoComplete="email" />
        </label>
        <label>
          Phone Number *
          <input type="tel" name="phone" required autoComplete="tel" />
        </label>
        <label>
          Organization / Company
          <input name="organization" autoComplete="organization" />
        </label>
        <label>
          I&apos;m Interested In *
          <select name="interest" required defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            {INTERESTS.map((i) => (
              <option key={i.value} value={i.value}>
                {i.label}
              </option>
            ))}
          </select>
        </label>
        <label className="form__full">
          Message
          <textarea name="message" rows={4} placeholder="Tell us more about your needs or questions..." />
        </label>
      </div>

      {status.kind === "ok" && (
        <p className="form__msg form__msg--ok" role="status">
          Your inquiry has been sent! We&apos;ll get back to you soon.
        </p>
      )}
      {status.kind === "error" && (
        <p className="form__msg form__msg--err" role="alert">
          Failed to send your inquiry. Please try again.
        </p>
      )}

      <button type="submit" className="btn btn--lime btn--block" disabled={status.kind === "sending"}>
        {status.kind === "sending" ? "Sending…" : "Submit Inquiry"}
      </button>
    </form>
  );
}
