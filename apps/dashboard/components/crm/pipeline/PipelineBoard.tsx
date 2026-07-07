import PipelineColumn from "./PipelineColumn";

interface Lead {
  id: string;
  name: string;
  phone: string;
  status: string;
}

interface Props {
  leads: Lead[];
}

export default function PipelineBoard({
  leads,
}: Props) {
  return (
    <div className="flex gap-6 overflow-x-auto">

      <PipelineColumn
        title="Cold"
        leads={leads.filter((x) => x.status === "Cold")}
      />

      <PipelineColumn
        title="Warm"
        leads={leads.filter((x) => x.status === "Warm")}
      />

      <PipelineColumn
        title="Hot"
        leads={leads.filter((x) => x.status === "Hot")}
      />

      <PipelineColumn
        title="Closing"
        leads={leads.filter((x) => x.status === "Closing")}
      />

      <PipelineColumn
        title="Lost"
        leads={leads.filter((x) => x.status === "Lost")}
      />

    </div>
  );
}