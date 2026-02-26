import { useState } from "react";
import BookingLayout from "@/components/BookingLayout";
import BookingSummaryPanel from "@/components/BookingSummaryPanel";
import { ReactNode } from "react";

export default function EquipmentBooking() {
  const [form, setForm] = useState({
    equipment: "", duration: "7", address: "", floor: "", hasLift: "", installation: "", notes: "",
  });
  const update = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }));

  const equipmentTypes = ["Wheelchair", "Hospital Bed", "Oxygen Concentrator", "BiPAP/CPAP", "Patient Monitor", "Suction Machine", "Walker/Rollator", "Air Mattress"];

  const prices: Record<string, number> = { Wheelchair: 200, "Hospital Bed": 500, "Oxygen Concentrator": 700, "BiPAP/CPAP": 800, "Patient Monitor": 600, "Suction Machine": 400, "Walker/Rollator": 150, "Air Mattress": 250 };
  const daily = prices[form.equipment] || 0;
  const estimated = daily ? `₹${daily * parseInt(form.duration || "7")}/- (₹${daily}/day)` : undefined;

  return (
    <BookingLayout title="Medical Equipment Rental" subtitle="Rent medical equipment with doorstep delivery" icon="🏥">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 card-surface p-6 space-y-5">
          <h2 className="font-display font-bold text-lg text-foreground">Equipment Details</h2>

          <FG label="Equipment Type">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {equipmentTypes.map((e) => (
                <button key={e} onClick={() => update("equipment", e)}
                  className={`p-3 rounded-xl border-2 text-center text-sm font-medium transition-all ${form.equipment === e ? "border-primary bg-primary-light text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}
                >{e}</button>
              ))}
            </div>
          </FG>

          <FG label="Rental Duration (days)">
            <input type="number" className="form-input" min="1" max="365" value={form.duration} onChange={(e) => update("duration", e.target.value)} />
          </FG>

          <FG label="Delivery Address"><input className="form-input" placeholder="Full delivery address" value={form.address} onChange={(e) => update("address", e.target.value)} /></FG>

          <div className="grid md:grid-cols-2 gap-4">
            <FG label="Floor Number"><input className="form-input" placeholder="e.g. 3" value={form.floor} onChange={(e) => update("floor", e.target.value)} /></FG>
            <FG label="Lift Available?">
              <div className="flex gap-3">
                {["Yes", "No"].map((v) => (
                  <Tog key={v} active={form.hasLift === v} onClick={() => update("hasLift", v)}>{v}</Tog>
                ))}
              </div>
            </FG>
          </div>

          <FG label="Installation Required?">
            <div className="flex gap-3">
              {["Yes", "No"].map((v) => (
                <Tog key={v} active={form.installation === v} onClick={() => update("installation", v)}>{v}</Tog>
              ))}
            </div>
          </FG>

          {estimated && (
            <div className="p-4 rounded-xl bg-accent-light border border-accent/20">
              <p className="text-sm text-foreground"><span className="font-semibold">Refundable Deposit:</span> ₹{daily * 5} (5x daily rate)</p>
            </div>
          )}
        </div>

        <BookingSummaryPanel
          items={[
            { label: "Equipment", value: form.equipment },
            { label: "Duration", value: form.duration ? `${form.duration} days` : "" },
            { label: "Address", value: form.address },
            { label: "Floor", value: form.floor },
            { label: "Lift", value: form.hasLift },
            { label: "Installation", value: form.installation },
          ]}
          serviceType="Equipment Rental"
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
