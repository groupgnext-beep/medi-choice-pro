import { useState } from "react";
import BookingLayout from "@/components/BookingLayout";
import BookingSummaryPanel from "@/components/BookingSummaryPanel";
import { Upload } from "lucide-react";
import { ReactNode } from "react";

const testTypes = [
  { id: "ct", label: "CT Scan", price: "₹2,500 - ₹8,000" },
  { id: "mri", label: "MRI", price: "₹3,500 - ₹12,000" },
  { id: "xray", label: "X-Ray", price: "₹300 - ₹1,500" },
];

const bodyParts = ["Head/Brain", "Chest", "Abdomen", "Spine", "Knee", "Shoulder", "Hip", "Full Body"];

const labs = [
  { name: "Apollo Diagnostics", rating: 4.5, price: "₹3,500", accredited: true },
  { name: "SRL Diagnostics", rating: 4.3, price: "₹3,200", accredited: true },
  { name: "Thyrocare", rating: 4.1, price: "₹2,800", accredited: true },
  { name: "Metropolis", rating: 4.4, price: "₹3,800", accredited: true },
  { name: "City Scan Center", rating: 4.0, price: "₹2,500", accredited: false },
];

export default function RadiologyBooking() {
  const [form, setForm] = useState({
    testType: "", bodyPart: "", city: "", lab: "", slot: "", prescription: null as File | null,
  });
  const update = (key: string, value: any) => setForm((p) => ({ ...p, [key]: value }));

  const selectedTest = testTypes.find((t) => t.id === form.testType);

  return (
    <BookingLayout title="Radiology & Diagnostics" subtitle="Book CT, MRI, X-Ray at best prices" icon="🔬">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 card-surface p-6 space-y-5">
          <h2 className="font-display font-bold text-lg text-foreground">Test Details</h2>

          <FG label="Select Test">
            <div className="grid grid-cols-3 gap-3">
              {testTypes.map((t) => (
                <button key={t.id} onClick={() => update("testType", t.id)}
                  className={`p-4 rounded-xl border-2 text-center transition-all ${form.testType === t.id ? "border-primary bg-primary-light" : "border-border hover:border-primary/30"}`}>
                  <p className="font-semibold text-sm text-foreground">{t.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t.price}</p>
                </button>
              ))}
            </div>
          </FG>

          <FG label="Body Part">
            <div className="flex flex-wrap gap-2">
              {bodyParts.map((b) => (
                <Tog key={b} active={form.bodyPart === b} onClick={() => update("bodyPart", b)}>{b}</Tog>
              ))}
            </div>
          </FG>

          <FG label="Select City">
            <select className="form-input" value={form.city} onChange={(e) => update("city", e.target.value)}>
              <option value="">Choose city</option>
              {["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune"].map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </FG>

          {form.city && (
            <FG label="Choose Lab">
              <div className="space-y-2">
                {labs.map((lab) => (
                  <button key={lab.name} onClick={() => update("lab", lab.name)}
                    className={`w-full p-4 rounded-xl border-2 flex items-center justify-between transition-all ${form.lab === lab.name ? "border-primary bg-primary-light" : "border-border hover:border-primary/30"}`}>
                    <div className="text-left">
                      <p className="font-semibold text-sm text-foreground">{lab.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground">⭐ {lab.rating}</span>
                        {lab.accredited && <span className="text-xs px-2 py-0.5 rounded-full bg-accent-light text-accent font-medium">NABL</span>}
                      </div>
                    </div>
                    <span className="font-display font-bold text-foreground">{lab.price}</span>
                  </button>
                ))}
              </div>
            </FG>
          )}

          <FG label="Preferred Slot">
            <div className="flex flex-wrap gap-2">
              {["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"].map((s) => (
                <Tog key={s} active={form.slot === s} onClick={() => update("slot", s)}>{s}</Tog>
              ))}
            </div>
          </FG>

          <FG label="Upload Prescription (optional)">
            <label className="flex flex-col items-center gap-2 p-6 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary/30 transition-colors">
              <Upload className="w-6 h-6 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {form.prescription ? form.prescription.name : "Click to upload prescription"}
              </span>
              <input type="file" className="hidden" accept="image/*,.pdf" onChange={(e) => update("prescription", e.target.files?.[0] || null)} />
            </label>
          </FG>
        </div>

        <BookingSummaryPanel
          items={[
            { label: "Test", value: selectedTest?.label || "" },
            { label: "Body Part", value: form.bodyPart },
            { label: "City", value: form.city },
            { label: "Lab", value: form.lab },
            { label: "Slot", value: form.slot },
          ]}
          serviceType="Radiology"
          estimatedPrice={form.lab ? labs.find((l) => l.name === form.lab)?.price : selectedTest?.price}
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
