import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Lead {
  id: string;
  name: string;
  phone: string;
  status: string;
  aiScore: number;
}

interface RecentLeadsProps {
  leads: Lead[];
}

export default function RecentLeads({
  leads,
}: RecentLeadsProps) {
  return (
    <div className="mt-8 rounded-xl bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Recent Leads
      </h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama</TableHead>
            <TableHead>WhatsApp</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>AI Score</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell>{lead.name}</TableCell>
              <TableCell>{lead.phone}</TableCell>
              <TableCell>{lead.status}</TableCell>
              <TableCell>{lead.aiScore}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}