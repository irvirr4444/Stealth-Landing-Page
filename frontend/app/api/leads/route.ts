import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, utm_source, utm_medium, utm_campaign } = body;
    const qrSource = /^QR=[1-5]$/.test(body.qr_source)
      ? body.qr_source
      : "general";

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const ip = forwardedFor?.split(",")[0]?.trim() || realIp || null;

    const { error } = await supabase.from("leads").insert({
      name,
      phone,
      email,
      ip,
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
      qr_source: qrSource,
    });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to save lead" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
