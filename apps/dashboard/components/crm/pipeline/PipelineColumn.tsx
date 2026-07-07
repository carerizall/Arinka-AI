interface Lead {
  id: string;
  name: string;
  phone: string;
  status: string;
}

interface Props {
  title: string;
  leads: Lead[];
}

export default function PipelineColumn({
  title,
  leads,
}: Props) {
  return (
    <div className="min-w-[280px] rounded-xl bg-zinc-900 p-4">
      <h2 className="mb-4 text-lg font-bold">
        {title}
      </h2>

      <div className="space-y-3">
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="rounded-lg border border-zinc-800 bg-zinc-800 p-4"
          >
            <p className="font-semibold">
              {lead.name}
            </p>

            <p className="mt-1 text-sm text-zinc-400">
              {lead.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}