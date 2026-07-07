import Link from "next/link";

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
              <TableCell>
        <Link
            href={`/leads/${lead.id}`}
            className="font-medium text-blue-400 hover:text-blue-300 hover:underline"
  >
          {lead.name}
        </Link>
        </TableCell>
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