import { useState, ReactNode } from "react";
import BookingLayout from "@/components/BookingLayout";
import StepIndicator from "@/components/StepIndicator";
import BookingSummaryPanel from "@/components/BookingSummaryPanel";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const steps = ["Trip Details", "Case & Vehicle", "Support & Handling", "Contact"];

export default function AmbulanceBooking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({
    tripType: "", direction: "", pickup: "", drop: "", date: "", time: "",
    caseType: "", vehicle: "", passengers: "1", freezer: false,
    paramedic: false, doctor: false, waitingHours: "", floor: "", hasLift: false, mobility: "",
    name: "", phone: "", email: "", notes: "",
  });

  const update = (key: string, value: any) => setForm((p) => ({ ...p, [key]: value }));

  const summaryItems = [
    { label: "Trip Type", value: form.tripType },
    { label: "Direction", value: form.direction },
    { label: "Pickup", value: form.pickup },
    { label: "Drop", value: form.drop },
    { label: "Date", value: form.date },
    { label: "Case Type", value: form.caseType },
    { label: "Vehicle", value: form.vehicle },
    { label: "Paramedic", value: form.paramedic ? "Yes" : "" },
    { label: "Doctor", value: form.doctor ? "Yes" : "" },
    { label: "Name", value: form.name },
    { label: "Phone", value: form.phone },
  ];

  const estimatedPrice = form.vehicle ? (form.vehicle === "ECO" ? "₹2,500 - ₹4,000" : form.vehicle === "Bolero" ? "₹4,000 - ₹7,000" : "₹6,000 - ₹12,000") : undefined;

  return (
    <BookingLayout title="Ambulance Booking" subtitle="Compare ambulance providers and book instantly" icon="🚑">
      <StepIndicator steps={steps} currentStep={currentStep} onStepClick={setCurrentStep} />

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 card-surface p-6">
          {currentStep === 1 && (
            <div className="space-y-5">
              <h2 className="font-display font-bold text-lg text-foreground">Trip Details</h2>

              <FieldGroup label="Trip Type">
                <div className="flex gap-3">
                  {["Local", "Outstation"].map((v) => (
                    <ToggleOption key={v} active={form.tripType === v} onClick={() => update("tripType", v)}>{v}</ToggleOption>
                  ))}
                </div>
              </FieldGroup>

              <FieldGroup label="Direction">
                <div className="flex gap-3">
                  {["One Way", "Round Trip"].map((v) => (
                    <ToggleOption key={v} active={form.direction === v} onClick={() => update("direction", v)}>{v}</ToggleOption>
                  ))}
                </div>
              </FieldGroup>

              <div className="grid md:grid-cols-2 gap-4">
                <FieldGroup label="Pickup Location">
                  <input className="form-input" placeholder="Enter pickup address" value={form.pickup} onChange={(e) => update("pickup", e.target.value)} />
                </FieldGroup>
                <FieldGroup label="Drop Location">
                  <input className="form-input" placeholder="Enter drop address" value={form.drop} onChange={(e) => update("drop", e.target.value)} />
                </FieldGroup>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <FieldGroup label="Date">
                  <input type="date" className="form-input" value={form.date} onChange={(e) => update("date", e.target.value)} />
                </FieldGroup>
                <FieldGroup label="Time">
                  <input type="time" className="form-input" value={form.time} onChange={(e) => update("time", e.target.value)} />
                </FieldGroup>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-5">
              <h2 className="font-display font-bold text-lg text-foreground">Case & Vehicle</h2>

              <FieldGroup label="Case Type">
                <div className="flex gap-3 flex-wrap">
                  {["Basic", "ICU", "Dead Body"].map((v) => (
                    <ToggleOption key={v} active={form.caseType === v} onClick={() => update("caseType", v)}>{v}</ToggleOption>
                  ))}
                </div>
              </FieldGroup>

              <FieldGroup label="Vehicle Type">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "ECO", label: "ECO Van", price: "From ₹2,500" },
                    { id: "Bolero", label: "Bolero", price: "From ₹4,000" },
                    { id: "Tempo", label: "Tempo Traveller", price: "From ₹6,000" },
                  ].map((v) => (
                    <button key={v.id}
                      onClick={() => update("vehicle", v.id)}
                      className={`p-4 rounded-xl border-2 text-center transition-all ${
                        form.vehicle === v.id
                          ? "border-primary bg-primary-light"
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      <p className="font-semibold text-sm text-foreground">{v.label}</p>
                      <p className="text-xs text-muted-foreground mt-1">{v.price}</p>
                    </button>
                  ))}
                </div>
              </FieldGroup>

              <FieldGroup label="Passenger Count">
                <input type="number" className="form-input" min="1" max="10" value={form.passengers} onChange={(e) => update("passengers", e.target.value)} />
              </FieldGroup>

              {form.caseType === "Dead Body" && (
                <label className="flex items-center gap-3 p-3 rounded-xl bg-muted cursor-pointer">
                  <input type="checkbox" checked={form.freezer} onChange={(e) => update("freezer", e.target.checked)} className="w-4 h-4 rounded border-border text-primary" />
                  <span className="text-sm text-foreground">Freezer Box Required</span>
                </label>
              )}
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-5">
              <h2 className="font-display font-bold text-lg text-foreground">Support & Handling</h2>

              <div className="space-y-3">
                {[
                  { key: "paramedic", label: "Paramedic Required" },
                  { key: "doctor", label: "Doctor Required" },
                ].map((item) => (
                  <label key={item.key} className="flex items-center gap-3 p-3 rounded-xl bg-muted cursor-pointer">
                    <input type="checkbox" checked={(form as any)[item.key]} onChange={(e) => update(item.key, e.target.checked)} className="w-4 h-4 rounded border-border text-primary" />
                    <span className="text-sm text-foreground">{item.label}</span>
                  </label>
                ))}
              </div>

              <FieldGroup label="Waiting at Hospital (hours)">
                <input type="number" className="form-input" min="0" placeholder="0" value={form.waitingHours} onChange={(e) => update("waitingHours", e.target.value)} />
              </FieldGroup>

              <div className="grid md:grid-cols-2 gap-4">
                <FieldGroup label="Floor Number">
                  <input className="form-input" placeholder="e.g. 3" value={form.floor} onChange={(e) => update("floor", e.target.value)} />
                </FieldGroup>
                <FieldGroup label="Lift Available?">
                  <div className="flex gap-3">
                    {[true, false].map((v) => (
                      <ToggleOption key={String(v)} active={form.hasLift === v} onClick={() => update("hasLift", v)}>
                        {v ? "Yes" : "No"}
                      </ToggleOption>
                    ))}
                  </div>
                </FieldGroup>
              </div>

              <FieldGroup label="Patient Mobility">
                <div className="flex gap-3 flex-wrap">
                  {["Walking", "Wheelchair", "Stretcher", "Bedridden"].map((v) => (
                    <ToggleOption key={v} active={form.mobility === v} onClick={() => update("mobility", v)}>{v}</ToggleOption>
                  ))}
                </div>
              </FieldGroup>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-5">
              <h2 className="font-display font-bold text-lg text-foreground">Contact Details</h2>

              <FieldGroup label="Full Name">
                <input className="form-input" placeholder="Enter your full name" value={form.name} onChange={(e) => update("name", e.target.value)} />
              </FieldGroup>

              <div className="grid md:grid-cols-2 gap-4">
                <FieldGroup label="Phone Number">
                  <input className="form-input" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                </FieldGroup>
                <FieldGroup label="Email (optional)">
                  <input className="form-input" placeholder="your@email.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
                </FieldGroup>
              </div>

              <FieldGroup label="Additional Notes">
                <textarea className="form-input min-h-[100px] resize-none" placeholder="Any special requirements..." value={form.notes} onChange={(e) => update("notes", e.target.value)} />
              </FieldGroup>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            <Button variant="outline" disabled={currentStep === 1} onClick={() => setCurrentStep((s) => s - 1)} className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Back
            </Button>
            <Button onClick={() => setCurrentStep((s) => Math.min(s + 1, 4))} disabled={currentStep === 4} className="gap-2">
              Next <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <BookingSummaryPanel
            items={summaryItems}
            serviceType="Ambulance"
            estimatedPrice={estimatedPrice}
            currentStep={currentStep}
            totalSteps={4}
          />
        </div>
      </div>
    </BookingLayout>
  );
}

function FieldGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
      {children}
    </div>
  );
}

function ToggleOption({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2.5 rounded-xl text-sm font-medium border-2 transition-all ${
        active ? "border-primary bg-primary-light text-primary" : "border-border text-muted-foreground hover:border-primary/30"
      }`}
    >
      {children}
    </button>
  );
}
