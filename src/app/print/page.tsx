import type { Metadata } from "next";
import { PrintGuidanceApp } from "../../components/PrintGuidanceApp";

export const metadata: Metadata = {
  title: "Print-Friendly Guide",
};

export default function PrintPage() {
  return <PrintGuidanceApp />;
}
