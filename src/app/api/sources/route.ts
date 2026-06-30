import { NextResponse } from "next/server";
import { sources } from "../../../data/sources";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({
    version: "0.1.0",
    description: "Source registry referenced by guidance blocks.",
    sources,
  });
}
