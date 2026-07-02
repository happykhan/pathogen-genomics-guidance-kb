import type { Metadata } from "next";
import { WhoIrisExplorer } from "../../components/WhoIrisExplorer";

export const metadata: Metadata = {
  title: "WHO IRIS Resources",
  description: "WHO IRIS resource search and similarity map for pathogen genomics guidance.",
};

export default function WhoIrisPage() {
  return <WhoIrisExplorer />;
}

