import { NextResponse } from "next/server";
import { defaultProfile, defaultProfileVersion } from "../../../data/defaultProfile";
import {
  evidenceItems,
  evidenceClaimCards,
  getEditorialCoverage,
  sectionSynthesisBriefs,
  whitepaperFragments,
} from "../../../data/editorialContent";
import { whitepaperOutline, whitepaperOutlineVersion } from "../../../data/whitepaperOutline";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({
    version: "0.2.0",
    description:
      "Public-safe editorial debug model for the dynamic whitepaper. This endpoint intentionally excludes local file paths and full-text source extracts.",
    defaultProfileVersion,
    defaultProfile,
    whitepaperOutlineVersion,
    whitepaperOutline,
    evidenceItems,
    evidenceClaimCards,
    sectionSynthesisBriefs,
    whitepaperFragments,
    coverage: getEditorialCoverage(),
  });
}
