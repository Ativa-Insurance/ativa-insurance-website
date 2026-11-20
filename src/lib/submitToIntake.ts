export async function submitToIntake(payload: {
  name:            string;
  phone:           string;
  email:           string;
  address?:        string;
  city?:           string;
  insuranceType:   string;
  additionalNotes: string;
  mode?:           string;
}): Promise<boolean> {
  const r = await submitQuote(payload);
  return r.success;
}

export interface QuoteSubmission {
  name:            string;
  phone:           string;
  email:           string;
  address?:        string;
  city?:           string;
  insuranceType:   string;
  additionalNotes: string;
  mode?:           string;
  // AMS hand-off: when set, the server asks the intake API to open an application
  startApplication?: boolean;
  line?:           string;
  lang?:           string;
  zip?:            string;
  businessName?:   string;
  businessType?:   string;
  vehiclesCount?:  string;
  utmMedium?:      string;
}

/** Sends the pop-up to our server route. applyUrl is set when the AMS created an application link. */
export async function submitQuote(payload: QuoteSubmission): Promise<{ success: boolean; applyUrl?: string }> {
  try {
    const res = await fetch("/api/submit-quote", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload),
    });
    const data = await res.json();
    return { success: data.success === true, applyUrl: typeof data.applyUrl === "string" ? data.applyUrl : undefined };
  } catch (err) {
    console.error("[Ativa] Intake forwarding failed:", err);
    return { success: false };
  }
}
