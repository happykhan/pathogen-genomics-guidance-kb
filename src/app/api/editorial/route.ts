import { NextResponse } from "next/server";
import { defaultProfile, defaultProfileVersion } from "../../../data/defaultProfile";
import {
  evidenceItems,
  evidenceClaimCards,
  getEditorialCoverage,
  sectionSynthesisBriefs,
  whitepaperFragments,
} from "../../../data/editorialContent";
import { whitepaperOutline, whitepaperOutlineVersion, whitepaperTarget } from "../../../data/whitepaperOutline";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({
    version: "0.2.0",
    description:
      "Legacy public-safe editorial debug model. New guide prose should be authored from source PDFs and extracted full text, not generated from this fragment/card model.",
    defaultProfileVersion,
    defaultProfile,
    whitepaperOutlineVersion,
    whitepaperTarget,
    whitepaperOutline,
    evidenceItems,
    evidenceClaimCards,
    sectionSynthesisBriefs,
    whitepaperFragments,
    coverage: getEditorialCoverage(),
  });
}
