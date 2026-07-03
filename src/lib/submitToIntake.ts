export async function submitToIntake(payload: {
  name:            string;
  phone:           string;
  email:           string;
  address?:        string;
  city?:           string;
  insuranceType:   string;
  additionalNotes: string;
}): Promise<boolean> {
  try {
    const res = await fetch("/api/submit-quote", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload),
    });
    return res.ok;
  } catch (err) {
    console.error("[Ativa] Intake forwarding failed:", err);
    return false;
  }
}
