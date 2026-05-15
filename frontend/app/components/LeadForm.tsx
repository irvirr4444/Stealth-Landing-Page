"use client";

import { useState, useEffect } from "react";
import SuccessState from "./SuccessState";

function formatUSPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function getDigitsOnly(formatted: string): string {
  return formatted.replace(/\D/g, "");
}

export default function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [utmSource, setUtmSource] = useState("");
  const [utmMedium, setUtmMedium] = useState("");
  const [utmCampaign, setUtmCampaign] = useState("");
  const [qrSource, setQrSource] = useState("general");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pathSource = window.location.pathname.replace("/", "");

    setUtmSource(params.get("utm_source") || "");
    setUtmMedium(params.get("utm_medium") || "");
    setUtmCampaign(params.get("utm_campaign") || "");
    setQrSource(/^QR=[1-5]$/.test(pathSource) ? pathSource : "general");
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatUSPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const digits = getDigitsOnly(phone);
    if (digits.length !== 10) {
      setError("Please enter a valid 10-digit US phone number");
      return;
    }

    setSubmitting(true);

    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(10);
    }

    const fullPhone = `+1${digits}`;

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone: fullPhone,
          email,
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
          qr_source: qrSource,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return <SuccessState />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-cream/60 mb-2">Be the first to know</p>

      <input
        type="text"
        id="name"
        name="name"
        placeholder="Full name"
        autoComplete="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-4 bg-navy/50 border border-cream/20 rounded-lg text-cream placeholder:text-cream/40 text-lg focus:outline-none focus:border-gold/50 transition-colors"
      />

      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-cream/70 pointer-events-none">
          <span className="text-base">🇺🇸</span>
          <span className="text-lg">+1</span>
        </div>
        <input
          type="tel"
          inputMode="numeric"
          id="phone"
          name="phone"
          placeholder="(555) 123-4567"
          autoComplete="tel-national"
          required
          value={phone}
          onChange={handlePhoneChange}
          className="w-full pl-20 pr-4 py-4 bg-navy/50 border border-cream/20 rounded-lg text-cream placeholder:text-cream/40 text-lg focus:outline-none focus:border-gold/50 transition-colors"
        />
      </div>

      <input
        type="email"
        id="email"
        name="email"
        placeholder="Work email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-4 bg-navy/50 border border-cream/20 rounded-lg text-cream placeholder:text-cream/40 text-lg focus:outline-none focus:border-gold/50 transition-colors"
      />

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 px-8 bg-gold text-navy font-semibold text-lg rounded-lg hover:bg-gold/90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Submitting..." : "Get early access"}
      </button>
    </form>
  );
}
