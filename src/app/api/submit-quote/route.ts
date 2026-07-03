import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const INTAKE_URL = "https://ativa-internal-production.up.railway.app/api/intake/quote-submission";
const resend     = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  console.log("ENV CHECK:", {
    resend:    !!process.env.RESEND_API_KEY,
    intake:    !!process.env.INTAKE_API_KEY,
    openphone: !!process.env.OPENPHONE_API_KEY,
  });

  try {
    const body = await req.json();
    const {
      name,
      phone,
      email,
      address,
      city,
      insuranceType,
      additionalNotes,
      mode,
    } = body;

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    }) + " ET";

    const [emailToAgent, emailToProspect, intakeResult, smsResult] =
      await Promise.allSettled([

      // 1. EMAIL TO ATIVA
      (async () => {
        const { data, error } = await resend.emails.send({
          from: "noreply@ativainsurance.com",
          to:   ["info@ativainsurance.com"],
          subject: `New Quote Request — ${insuranceType} — ${name}`,
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
              <div style="background:#0F2A44;padding:20px;text-align:center;">
                <h1 style="color:#F5A623;margin:0;">New Quote Request</h1>
                <p style="color:white;margin:8px 0 0;">${timestamp}</p>
              </div>
              <div style="padding:24px;background:#F7FAFC;">
                <table style="width:100%;border-collapse:collapse;">
                  <tr style="background:white;">
                    <td style="padding:12px;font-weight:bold;border:1px solid #E2E8F0;width:40%;">Product</td>
                    <td style="padding:12px;border:1px solid #E2E8F0;">${insuranceType}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px;font-weight:bold;border:1px solid #E2E8F0;background:#F7FAFC;">Line</td>
                    <td style="padding:12px;border:1px solid #E2E8F0;background:#F7FAFC;">${mode || "Personal"}</td>
                  </tr>
                  <tr style="background:white;">
                    <td style="padding:12px;font-weight:bold;border:1px solid #E2E8F0;">Name</td>
                    <td style="padding:12px;border:1px solid #E2E8F0;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px;font-weight:bold;border:1px solid #E2E8F0;background:#F7FAFC;">Phone</td>
                    <td style="padding:12px;border:1px solid #E2E8F0;background:#F7FAFC;">
                      <a href="tel:${phone}">${phone}</a>
                    </td>
                  </tr>
                  <tr style="background:white;">
                    <td style="padding:12px;font-weight:bold;border:1px solid #E2E8F0;">Email</td>
                    <td style="padding:12px;border:1px solid #E2E8F0;">
                      <a href="mailto:${email}">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:12px;font-weight:bold;border:1px solid #E2E8F0;background:#F7FAFC;">Address</td>
                    <td style="padding:12px;border:1px solid #E2E8F0;background:#F7FAFC;">${address || "Not provided"}</td>
                  </tr>
                </table>
                <div style="margin-top:20px;padding:16px;background:white;border:1px solid #E2E8F0;border-radius:8px;">
                  <h3 style="color:#0F2A44;margin:0 0 12px;">Full Submission Details</h3>
                  <pre style="white-space:pre-wrap;font-family:Arial;font-size:14px;color:#334155;">${additionalNotes}</pre>
                </div>
                <div style="margin-top:20px;text-align:center;">
                  <a href="tel:${phone}" style="background:#0F2A44;color:white;padding:12px 24px;text-decoration:none;border-radius:8px;margin-right:10px;">Call ${name}</a>
                  <a href="sms:${phone}" style="background:#F5A623;color:#0B1F33;padding:12px 24px;text-decoration:none;border-radius:8px;">Text ${name}</a>
                </div>
              </div>
            </div>
          `,
        });
        if (error) throw new Error(error.message);
        return data;
      })(),

      // 2. CONFIRMATION EMAIL TO PROSPECT
      (async () => {
        if (!email) return null;
        const { data, error } = await resend.emails.send({
          from: "noreply@ativainsurance.com",
          to:   [email],
          subject: "We received your quote request — Ativa Insurance",
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
              <div style="background:#0F2A44;padding:20px;text-align:center;">
                <h1 style="color:#F5A623;margin:0;">Ativa Insurance</h1>
              </div>
              <div style="padding:24px;">
                <h2 style="color:#0F2A44;">Hi ${name?.split(" ")[0] || "there"},</h2>
                <p style="color:#334155;line-height:1.7;">
                  We received your request for <strong>${insuranceType}</strong> insurance.
                </p>
                <p style="color:#334155;line-height:1.7;">
                  A licensed agent will contact you within minutes during business hours.
                </p>
                <div style="background:#F7FAFC;padding:16px;border-radius:8px;margin:20px 0;">
                  <p style="margin:0;color:#64748B;font-size:14px;">Can't wait? Reach us directly:</p>
                  <p style="margin:8px 0 0;">
                    <a href="tel:5619468261" style="color:#0F2A44;">561-946-8261</a>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="sms:5619468261" style="color:#0F2A44;">Text us</a>
                  </p>
                </div>
                <p style="color:#334155;line-height:1.7;">— Ana Letícia &amp; the Ativa Insurance Team</p>
              </div>
            </div>
          `,
        });
        if (error) throw new Error(error.message);
        return data;
      })(),

      // 3. FORWARD TO INTERNAL INTAKE SYSTEM
      (async () => {
        const apiKey = process.env.INTAKE_API_KEY;
        if (!apiKey) throw new Error("INTAKE_API_KEY not configured");
        const res = await fetch(INTAKE_URL, {
          method:  "POST",
          headers: { "Content-Type": "application/json", "X-Intake-Key": apiKey },
          body: JSON.stringify({
            name:      name      ?? "",
            phone:     phone     ?? "",
            email:     email     ?? "",
            address:   address   ?? "",
            city:      city      ?? "",
            source:    "website",
            product:   insuranceType   ?? "",
            notes:     additionalNotes ?? "",
            timestamp: new Date().toISOString(),
          }),
        });
        if (!res.ok) throw new Error(`Intake API ${res.status}`);
        return res.json();
      })(),

      // 4. SMS ALERT TO AGENT
      (async () => {
        const opKey = process.env.OPENPHONE_API_KEY;
        if (!opKey) throw new Error("OPENPHONE_API_KEY not configured");
        const numRes = await fetch("https://api.openphone.com/v1/phone-numbers", {
          headers: { Authorization: opKey },
        });
        const numData = await numRes.json();
        const fromNumber = numData?.data?.[0]?.number;
        if (!fromNumber) throw new Error("Could not get OpenPhone number");
        const smsRes = await fetch("https://api.openphone.com/v1/messages", {
          method:  "POST",
          headers: { Authorization: opKey, "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `🔔 NEW QUOTE REQUEST\nProduct: ${insuranceType}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMode: ${mode || "Personal"}\nTime: ${timestamp}`,
            from: fromNumber,
            to:   ["+15619468261"],
          }),
        });
        if (!smsRes.ok) throw new Error(`SMS failed ${smsRes.status}`);
        return smsRes.json();
      })(),
    ]);

    console.log("Agent email:",    emailToAgent.status,    emailToAgent.status    === "rejected" ? emailToAgent.reason    : "✓");
    console.log("Prospect email:", emailToProspect.status, emailToProspect.status === "rejected" ? emailToProspect.reason : "✓");
    console.log("Intake API:",     intakeResult.status,    intakeResult.status    === "rejected" ? intakeResult.reason    : "✓");
    console.log("SMS alert:",      smsResult.status,       smsResult.status       === "rejected" ? smsResult.reason       : "✓");

    const agentNotified =
      emailToAgent.status  === "fulfilled" ||
      intakeResult.status  === "fulfilled" ||
      smsResult.status     === "fulfilled";

    return NextResponse.json({
      success: true,
      agentNotified,
      details: {
        agentEmail:    emailToAgent.status,
        prospectEmail: emailToProspect.status,
        intake:        intakeResult.status,
        sms:           smsResult.status,
      },
    });

  } catch (err) {
    console.error("[Ativa] submit-quote critical error:", err);
    return NextResponse.json({
      success: false,
      error:   err instanceof Error ? err.message : "Unknown error",
    }, { status: 500 });
  }
}
