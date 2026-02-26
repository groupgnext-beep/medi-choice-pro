import { useState } from "react";
import BookingLayout from "@/components/BookingLayout";
import BookingSummaryPanel from "@/components/BookingSummaryPanel";
import { ReactNode } from "react";

export default function PhysiotherapyBooking() {
  const [form, setForm] = useState({
    condition: "", sessions: "1", sessionType: "", therapistGender: "", date: "", time: "", address: "", notes: "",
  });
  const update = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }));

  const conditions = ["Back Pain", "Knee Pain", "Shoulder Pain", "Neck Pain", "Post-Surgery Rehab", "Sports Injury", "Stroke Rehab", "Other"];

  const estimated = form.sessionType === "package" ? `₹${parseInt(form.sessions || "1") * 600} - ₹${parseInt(form.sessions || "1") * 900}` : form.sessions ? "₹800 - ₹1,200" : undefined;

  return (
    <BookingLayout title="Physiotherapy at Home" subtitle="Book certified physiotherapists at your doorstep" icon="💆">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 card-surface p-6 space-y-5">
          <h2 className="font-display font-bold text-lg text-foreground">Booking Details</h2>

          <FG label="Condition">
            <div className="flex flex-wrap gap-2">
              {conditions.map((c) => (
                <Tog key={c} active={form.condition === c} onClick={() => update("condition", c)}>{c}</Tog>
              ))}
            </div>
          </FG>

          <div className="grid md:grid-cols-2 gap-4">
            <FG label="Number of Sessions">
              <input type="number" className="form-input" min="1" max="30" value={form.sessions} onChange={(e) => update("sessions", e.target.value)} />
            </FG>
            <FG label="Session Type">
              <div className="flex gap-3">
                {["single", "package"].map((v) => (
                  <Tog key={v} active={form.sessionType === v} onClick={() => update("sessionType", v)}>{v === "single" ? "Single Session" : "Package"}</Tog>
                ))}
              </div>
            </FG>
          </div>

          <FG label="Preferred Therapist Gender">
            <div className="flex gap-3">
              {["Male", "Female", "No Preference"].map((v) => (
                <Tog key={v} active={form.therapistGender === v} onClick={() => update("therapistGender", v)}>{v}</Tog>
              ))}
            </div>
          </FG>

          <div className="grid md:grid-cols-2 gap-4">
            <FG label="Preferred Date"><input type="date" className="form-input" value={form.date} onChange={(e) => update("date", e.target.value)} /></FG>
            <FG label="Preferred Time"><input type="time" className="form-input" value={form.time} onChange={(e) => update("time", e.target.value)} /></FG>
          </div>

          <FG label="Address"><input className="form-input" placeholder="Full address for home visit" value={form.address} onChange={(e) => update("address", e.target.value)} /></FG>
          <FG label="Special Notes"><textarea className="form-input min-h-[80px] resize-none" placeholder="Any medical history or special requirements" value={form.notes} onChange={(e) => update("notes", e.target.value)} /></FG>
        </div>

        <BookingSummaryPanel
          items={[
            { label: "Condition", value: form.condition },
            { label: "Sessions", value: form.sessions },
            { label: "Type", value: form.sessionType },
            { label: "Therapist", value: form.therapistGender },
            { label: "Date", value: form.date },
            { label: "Address", value: form.address },
          ]}
          serviceType="Physiotherapy"
          estimatedPrice={estimated}
          currentStep={1}
          totalSteps={1}
        />
      </div>
    </BookingLayout>
  );
}

function FG({ label, children }: { label: string; children: ReactNode }) {
  return <div><label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>{children}</div>;
}

function Tog({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button onClick={onClick} className={`px-4 py-2.5 rounded-xl text-sm font-medium border-2 transition-all ${active ? "border-primary bg-primary-light text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}>
      {children}
    </button>
  );
}
