import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const { count, error } = await supabase
      .from("leads")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ count: 0 }, { status: 500 });
    }

    return NextResponse.json({ count: count || 0 });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
