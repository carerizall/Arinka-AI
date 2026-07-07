import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import LeadStatus from "@/components/crm/LeadStatus";
import LeadNotes from "@/components/crm/LeadNotes";
import LeadAssign from "@/components/crm/LeadAssign";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function LeadDetailPage({ params }: Props) {
  const { id } = await params;

  const lead = await prisma.lead.findUnique({
  where: {
    id,
  },

  include: {
    messages: {
      orderBy: {
        createdAt: "asc",
      },
    },
  },
});

  if (!lead) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-white">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-4xl font-bold">
          {lead.name}
        </h1>

        <p className="mt-2 text-zinc-400">
          {lead.phone}
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-2 font-semibold">
              AI Score
            </h2>

            <p className="text-5xl font-bold text-green-400">
              {lead.aiScore}
            </p>
          </div>

          <LeadStatus
              id={lead.id}
              currentStatus={lead.status}
            />

        </div>

        <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-3 text-xl font-semibold">
            AI Summary
          </h2>

          <p>
            {lead.summary || "Belum ada ringkasan."}
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-3 text-xl font-semibold">
            Pesan Terakhir
          </h2>

          <p>
            {lead.message}
          </p>
        </div>

        <LeadNotes
          id={lead.id}
          currentNotes={lead.notes}
        />

        <LeadAssign
          id={lead.id}
          currentAssign={lead.assignedTo}
        />

        <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
  <h2 className="mb-5 text-xl font-semibold">
    Timeline Chat
  </h2>

  <div className="space-y-4">
    {lead.messages.map((chat) => (
      <div
        key={chat.id}
        className="rounded-lg bg-zinc-800 p-4"
      >
        <p className="font-medium text-green-400">
          👤 Customer
        </p>

        <p className="mt-2">
          {chat.message}
        </p>

        <p className="mt-3 text-xs text-zinc-400">
          {new Date(chat.createdAt).toLocaleString("id-ID")}
        </p>
      </div>
    ))}
  </div>
</div>

      </div>
    </main>
  );
}