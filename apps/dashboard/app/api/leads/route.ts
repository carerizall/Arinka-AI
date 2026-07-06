import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  calculateAIScore,
  calculateLeadStatus,
} from "@/lib/ai-score";

export async function GET() {
  const leads = await prisma.lead.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(leads);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const score = calculateAIScore(body.message ?? "");

  const status = calculateLeadStatus(score);

  const lead = await prisma.lead.create({
    data: {
      name: body.name,
      phone: body.phone,
      message: body.message,
      source: body.source ?? "WhatsApp",

      aiScore: score,
      status: status,

      assignedTo: body.assignedTo,
      notes: body.notes,
    },
  });

  return NextResponse.json(lead);
}