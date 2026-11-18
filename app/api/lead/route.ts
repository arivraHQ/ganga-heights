import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, project, preferredDate, honeypot } = body;

    // 1. Bot deflection: honeypot verification
    if (honeypot && honeypot.trim() !== "") {
      console.warn("[ANTI-SPAM] Honeypot triggered. Silently dropping payload.");
      return NextResponse.json({ success: true, message: "Inquiry received." }, { status: 200 });
    }

    // 2. Strict validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please enter your full legal name." }, { status: 400 });
    }

    const cleanPhone = phone ? phone.replace(/[^0-9]/g, "") : "";
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit Indian telephone number." },
        { status: 400 }
      );
    }

    if (!project || typeof project !== "string") {
      return NextResponse.json({ error: "Please select an Arohan development." }, { status: 400 });
    }

    if (!preferredDate) {
      return NextResponse.json({ error: "Please provide a preferred consultation date." }, { status: 400 });
    }

    const leadPayload = {
      name: name.trim(),
      phone: cleanPhone,
      project: project.trim(),
      preferredDate,
      source: "Ganga Heights Web Portal",
      timestamp: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") || "unknown",
    };

    // 3. Forward to n8n webhook if configured
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (webhookUrl && webhookUrl.trim() !== "") {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadPayload),
        });

        if (!webhookResponse.ok) {
          console.error(`[N8N WEBHOOK ERROR] Remote returned ${webhookResponse.status}`);
        }
      } catch (webhookErr) {
        console.error("[N8N WEBHOOK DISPATCH FAILED]", webhookErr);
        // Do not fail client submission if downstream webhook is temporarily down
      }
    } else {
      console.log("[DEV MODE] Lead logged to server console (N8N_WEBHOOK_URL unset):", leadPayload);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your private consultation has been reserved. Our senior relationship manager will connect shortly.",
        leadId: `ARH-${Date.now().toString().slice(-6)}`,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[API LEAD CRITICAL ERROR]", err);
    return NextResponse.json(
      { error: "An unexpected server error occurred. Please try contacting our concierge desk directly." },
      { status: 500 }
    );
  }
}
