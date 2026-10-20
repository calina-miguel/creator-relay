import { FunnelLanding } from "./funnel-landing";

export const metadata = { title: "Creator Relay", description: "A clear content-to-commerce route for creators building their next product line." };

export default function Page(){ return <FunnelLanding config={{ name: "Creator Relay", monogram: "CR", eyebrow: "TURN TRUST INTO TRACTION", title: "Turn trust into traction.", body: "Creator-led commerce", accent: "#5b3cc4", soft: "#eee9ff", steps: ["Name the audience signal","Choose the useful bridge","Move from guide to product"], cta: "Find my bridge", outcome: "Product bridge" }} />; }

