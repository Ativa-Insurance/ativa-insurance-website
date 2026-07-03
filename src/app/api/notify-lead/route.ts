import { NextRequest, NextResponse } from "next/server";

const OPENPHONE_BASE = "https://api.openphone.com/v1";
const STAFF_PHONE    = "+15619468261";

async function getFromNumber(apiKey: string): Promise<string | null> {
  try {
    const res = await fetch(`${OPENPHONE_BASE}/phone-numbers`, {
      headers: { Authorization: apiKey },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const first = data?.data?.[0];
    if (!first) return null;
    return (first.number as string | undefined) ?? null;
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name = "", phone = "", email = "", product = "", mode = "" } = body as {
      name:    string;
      phone:   string;
      email:   string;
      product: string;
      mode:    string;
    };

    const apiKey = process.env.OPENPHONE_API_KEY;
    if (!apiKey) {
      console.warn("[Ativa] OPENPHONE_API_KEY not set — staff SMS skipped");
      return NextResponse.json({ ok: true });
    }

    const fromNumber = await getFromNumber(apiKey);
    if (!fromNumber) {
      console.error("[Ativa] notify-lead: could not retrieve sender number");
      return NextResponse.json({ ok: true });
    }

    const content = [
      `🔔 NEW LEAD - ${product}`,
      `Name: ${name || "(not provided)"}`,
      `Phone: ${phone || "(not provided)"}`,
      `Email: ${email || "(not provided)"}`,
      `Mode: ${mode}`,
      `Check email for full details.`,
    ].join("\n");

    const res = await fetch(`${OPENPHONE_BASE}/messages`, {
      method:  "POST",
      headers: {
        Authorization:  apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        from: fromNumber,
        to:   [STAFF_PHONE],
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[Ativa] notify-lead OpenPhone error:", res.status, text);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Ativa] notify-lead route error:", err);
    return NextResponse.json({ ok: true });
  }
}
