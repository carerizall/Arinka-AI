import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  calculateAIScore,
  calculateLeadStatus,
} from "@/lib/ai-score";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const score = calculateAIScore(body.message);

  const status = calculateLeadStatus(score);

  const existingLead = await prisma.lead.findUnique({
    where: {
      phone: body.from,
    },
  });

  if (existingLead) {
    const updatedLead = await prisma.lead.update({
      where: {
        phone: body.from,
      },
      data: {
        name: body.name,
        message: body.message,
        aiScore: score,
        status,
      },
    });

    return NextResponse.json(updatedLead);
  }

  const newLead = await prisma.lead.create({
    data: {
      name: body.name,
      phone: body.from,
      message: body.message,
      aiScore: score,
      status,
      source: "WhatsApp",
    },
  });

  return NextResponse.json(newLead);
}