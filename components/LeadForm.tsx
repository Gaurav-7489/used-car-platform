"use client";
import { FormEvent, useState } from "react";

export default function LeadForm({ carTitle }: { carTitle: string }) {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    // MVP placeholder: replace with /api/leads + Supabase/CRM later.
  }
  if (sent) return <div style={{padding:"15px",background:"#ecfdf5",borderRadius:10}}><strong>Lead captured.</strong><p style={{marginBottom:0}}>A salesperson would receive this enquiry in the real system.</p></div>;
  return <form onSubmit={submit}>
    <input className="input" name="name" required placeholder="Your name" />
    <input className="input" name="phone" required placeholder="Phone number" inputMode="tel" />
    <input className="input" name="budget" placeholder="Budget (optional)" />
    <textarea className="input" name="message" placeholder={`I'm interested in the ${carTitle}`} rows={4} />
    <button className="btn primary" type="submit">Request Callback</button>
    <a className="btn secondary" href={`https://wa.me/?text=Hi%20VandLabs%20Motors,%20I%27m%20interested%20in%20the%20${encodeURIComponent(carTitle)}`}>WhatsApp (placeholder)</a>
  </form>;
}
