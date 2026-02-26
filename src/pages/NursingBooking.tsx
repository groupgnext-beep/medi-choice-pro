import { useState } from "react";
import BookingLayout from "@/components/BookingLayout";
import BookingSummaryPanel from "@/components/BookingSummaryPanel";
import { ReactNode } from "react";

export default function NursingBooking() {
  const [form, setForm] = useState({
    condition: "", shiftType: "", days: "7", nurseGender: "", startDate: "", address: "", notes: "",
  });
  const update = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }));

  const conditions = ["Post-Surgery Care", "Elder Care", "ICU Step-Down", "Wound Care", "Palliative Care", "Newborn Care", "Other"];
  const shifts: Record<string, number> = { "8 Hours": 800, "12 Hours": 1200, "24 Hours": 2000 };
  const daily = shifts[form.shiftType] || 0;
  const estimated = daily ? `₹${daily * parseInt(form.days || "7")} (₹${daily}/day)` : undefined;

  return (
    <BookingLayout title="Home Nursing Care" subtitle="Trained nurses for home care" icon="👩‍⚕️">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 card-surface p-6 space-y-5">
          <h2 className="font-display font-bold text-lg text-foreground">Care Details</h2>

          <FG label="Patient Condition">
            <div className="flex flex-wrap gap-2">
              {conditions.map((c) => (
                <Tog key={c} active={form.condition === c} onClick={() => update("condition", c)}>{c}</Tog>
              ))}
            </div>
          </FG>

          <FG label="Shift Type">
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(shifts).map(([label, price]) => (
                <button key={label} onClick={() => update("shiftType", label)}
                  className={`p-4 rounded-xl border-2 text-center transition-all ${form.shiftType === label ? "border-primary bg-primary-light" : "border-border hover:border-primary/30"}`}>
                  <p className="font-semibold text-sm text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground mt-1">₹{price}/day</p>
                </button>
              ))}
            </div>
          </FG>

          <div className="grid md:grid-cols-2 gap-4">
            <FG label="Number of Days"><input type="number" className="form-input" min="1" value={form.days} onChange={(e) => update("days", e.target.value)} /></FG>
            <FG label="Nurse Gender Preference">
              <div className="flex gap-3">
                {["Male", "Female", "No Preference"].map((v) => (
                  <Tog key={v} active={form.nurseGender === v} onClick={() => update("nurseGender", v)}>{v}</Tog>
                ))}
              </div>
            </FG>
          </div>

          <FG label="Start Date"><input type="date" className="form-input" value={form.startDate} onChange={(e) => update("startDate", e.target.value)} /></FG>
          <FG label="Address"><input className="form-input" placeholder="Patient's full address" value={form.address} onChange={(e) => update("address", e.target.value)} /></FG>
          <FG label="Additional Notes"><textarea className="form-input min-h-[80px] resize-none" placeholder="Medical history, special requirements..." value={form.notes} onChange={(e) => update("notes", e.target.value)} /></FG>
        </div>

        <BookingSummaryPanel
          items={[
            { label: "Condition", value: form.condition },
            { label: "Shift", value: form.shiftType },
            { label: "Days", value: form.days },
            { label: "Nurse", value: form.nurseGender },
            { label: "Start", value: form.startDate },
            { label: "Address", value: form.address },
          ]}
          serviceType="Nursing Care"
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
  return <button onClick={onClick} className={`px-4 py-2.5 rounded-xl text-sm font-medium border-2 transition-all ${active ? "border-primary bg-primary-light text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}>{children}</button>;
}
