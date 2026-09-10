"use client";

import { useState, type CSSProperties, type FormEvent } from "react";

const INTERESTS = [
  "Entry-level / B2B sales",
  "Management track",
  "Internship",
  "Just learning more",
] as const;

type FormStatus = "idle" | "submitting" | "success" | "error";

const fieldLabel: CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
  color: "#1740A0",
};

const fieldStack: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 6,
};

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const [resumeName, setResumeName] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const resume = data.get("resume");

    if (!(resume instanceof File) || resume.size === 0) {
      setStatus("error");
      setError("Please attach your resume (PDF, DOC, or DOCX).");
      return;
    }

    data.set("smsOptIn", data.get("smsOptIn") === "on" ? "true" : "false");

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: data,
      });
      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setError(payload.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
      setResumeName("");
    } catch {
      setStatus("error");
      setError(
        "We could not reach the server. Check your connection and try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid rgba(39,96,216,0.15)",
          borderRadius: 16,
          padding: 36,
          boxShadow: "0 2px 12px rgba(23,64,160,0.06)",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#2760D8",
          }}
        >
          Application received
        </div>
        <h2 style={{ margin: 0, fontSize: 28, color: "#0B1F3D" }}>
          You&apos;re in. We&apos;ll be in touch.
        </h2>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#3A5075" }}>
          Your application was sent to our Tampa recruiting team. A real person
          reviews every resume and will reach out within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(39,96,216,0.15)",
        borderRadius: 16,
        padding: 36,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        boxShadow: "0 2px 12px rgba(23,64,160,0.06)",
      }}
    >
      <div className="grid-2">
        <div style={fieldStack}>
          <label htmlFor="firstName" style={fieldLabel}>
            First name *
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            required
            autoComplete="given-name"
            className="field-input"
          />
        </div>
        <div style={fieldStack}>
          <label htmlFor="lastName" style={fieldLabel}>
            Last name *
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            required
            autoComplete="family-name"
            className="field-input"
          />
        </div>
        <div style={fieldStack}>
          <label htmlFor="email" style={fieldLabel}>
            Email *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            autoComplete="email"
            className="field-input"
          />
        </div>
        <div style={fieldStack}>
          <label htmlFor="phone" style={fieldLabel}>
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="(813) 555-0100"
            className="field-input"
          />
        </div>
      </div>

      <div style={fieldStack}>
        <label htmlFor="interest" style={fieldLabel}>
          I&apos;m interested in
        </label>
        <select id="interest" name="interest" className="field-input">
          {INTERESTS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div style={fieldStack}>
        <label htmlFor="resume" style={fieldLabel}>
          Resume *
        </label>
        <label className="file-drop">
          <input
            id="resume"
            type="file"
            name="resume"
            required
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(event) => {
              setResumeName(event.target.files?.[0]?.name ?? "");
            }}
          />
          <span className="file-drop__title">
            {resumeName || "Upload your resume here"}
          </span>
          <span className="file-drop__hint">PDF, DOC, or DOCX · Max 10MB</span>
        </label>
      </div>

      <div style={fieldStack}>
        <label htmlFor="message" style={fieldLabel}>
          Why are you interested? (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="field-input"
          style={{ resize: "vertical" }}
        />
      </div>

      <label className="field-check">
        <input type="checkbox" name="smsOptIn" required />
        <span>
          I agree and opt in. By providing your phone number, you consent to
          receive text messages from Cornerstone Revenue Partners, Inc for job
          opportunities, interview scheduling, and application updates. Message
          frequency may vary. Message and data rates may apply. Reply HELP for
          help or STOP to unsubscribe. See the{" "}
          <a
            href="https://atsmako.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            privacy policy
          </a>
          .
        </span>
      </label>

      {status === "error" && error ? (
        <div className="form-status form-status--error" role="alert">
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        className="btn-primary"
        disabled={status === "submitting"}
        style={{
          border: "none",
          borderRadius: 8,
          padding: "16px 24px",
          fontSize: 16,
          fontWeight: 800,
          cursor: status === "submitting" ? "wait" : "pointer",
          opacity: status === "submitting" ? 0.75 : 1,
        }}
      >
        {status === "submitting" ? "Submitting…" : "Submit application →"}
      </button>
      <div style={{ fontSize: 13, color: "#7288AB", lineHeight: 1.5 }}>
        By submitting you agree to be contacted about career opportunities at
        Cornerstone Revenue Partners. Applications are sent to our recruiting team in{" "}
        <a
          href="https://cornerstone-revenue-partners-inc.atsmako.com/apply"
          target="_blank"
          rel="noreferrer"
        >
          ATS Mako
        </a>
        .
      </div>
    </form>
  );
}
