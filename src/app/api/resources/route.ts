import { NextResponse } from "next/server";
import { resources } from "../../../data/resources";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({
    version: "0.1.0",
    description: "Resource finder catalogue with summaries, audience tags, topic tags, and source/PDF URLs where available.",
    resources,
  });
}
