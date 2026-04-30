"use client";

import { FormEvent, useState } from "react";
import { primaryButton } from "./site-data";

type FormState = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: "homepage",
        }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setEmail("");
      setFormState("success");
      setMessage(data.message || "You're on the list.");
    } catch (error) {
      setFormState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form
      className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
        className="min-h-12 rounded-sm border border-[#6e1b12] bg-black/45 px-4 text-[#fff5d6] outline-none transition placeholder:text-[#8d7b62] focus:border-[#f3c96a] focus:ring-2 focus:ring-[#f3c96a]/35"
        required
      />
      <button
        type="submit"
        className={primaryButton}
        disabled={formState === "loading"}
      >
        {formState === "loading" ? "Joining..." : "Join the List"}
      </button>
      {message ? (
        <p
          className={`text-sm leading-6 sm:col-span-2 ${
            formState === "success" ? "text-[#f3c96a]" : "text-[#f0a08e]"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
