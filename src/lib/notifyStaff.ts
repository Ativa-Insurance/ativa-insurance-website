export async function notifyStaffNewLead(data: {
  name:    string;
  phone:   string;
  email:   string;
  product: string;
  mode:    string;
}): Promise<void> {
  try {
    await fetch("/api/notify-lead", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(data),
    });
  } catch (err) {
    console.error("[Ativa] Staff notification failed:", err);
  }
}
