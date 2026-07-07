import { prisma } from "@/lib/prisma";
import PipelineClient from "@/components/crm/pipeline/PipelineClient";

export default async function PipelinePage() {
  const leads = await prisma.lead.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold">
          CRM Pipeline
        </h1>

        <PipelineClient
        leads={leads}
        />
      </div>
    </main>
  );
}