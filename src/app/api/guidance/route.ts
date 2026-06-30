import { NextResponse } from "next/server";
import { guidanceBlocks } from "../../../data/guidanceBlocks";
import { sources } from "../../../data/sources";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({
    version: "0.1.0",
    description: "Structured guidance text used by the dynamic pathogen genomics whitepaper.",
    guidanceBlocks,
    sources,
  });
}
