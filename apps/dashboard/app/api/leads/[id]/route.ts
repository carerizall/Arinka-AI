import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const body = await req.json();
  const { id } = await params;

  const lead = await prisma.lead.update({
    where: {
      id,
    },
    data: {
      status: body.status,
      notes: body.notes,
      assignedTo: body.assignedTo,
    },
  });

  return NextResponse.json(lead);
}