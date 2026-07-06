import { NextResponse } from "next/server";

import {
  calculateAIScore,
  calculateLeadStatus,
} from "../../../lib/ai-score";

export async function GET() {
  const message =
    "Halo kak, saya mau tanya harga cash dan survey besok.";

  const score = calculateAIScore(message);

  const status = calculateLeadStatus(score);

  return NextResponse.json({
    message,
    score,
    status,
  });
}