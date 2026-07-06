import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  calculateAIScore,
  calculateLeadStatus,
} from "@/lib/ai-score";
import { generateSummary } from "@/lib/ai-summary";

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log("=================================");
  console.log("EVENT :", body.event);
  console.log(JSON.stringify(body, null, 2));
  console.log("=================================");

  // Hanya proses pesan masuk
  if (body.event !== "messages.upsert") {
    return NextResponse.json({
      ignored: true,
    });
  }

  // Abaikan pesan yang kita kirim sendiri
  if (body.data?.key?.fromMe) {
    console.log("Pesan dari saya sendiri, dilewati.");

    return NextResponse.json({
      ignored: true,
    });
  }

  const message =
    body.data?.message?.conversation ||
    body.data?.message?.extendedTextMessage?.text ||
    body.data?.message?.imageMessage?.caption ||
    body.data?.message?.videoMessage?.caption ||
    "";

  const phone = body.data?.key?.remoteJid?.split("@")[0];

  if (!message || !phone) {
    return NextResponse.json({
      ignored: true,
    });
  }

  const score = calculateAIScore(message);
  const status = calculateLeadStatus(score);

  let summary = "";

  try {
    summary = await generateSummary(message);
  } catch (error) {
    console.error("AI Summary gagal:", error);
  }

  await prisma.lead.create({
    data: {
      name: body.data?.pushName ?? phone,
      phone,
      message,
      summary,

      source: "WhatsApp",

      aiScore: score,
      status,
    },
  });

  console.log("Lead berhasil disimpan!");

  return NextResponse.json({
    success: true,
  });
}