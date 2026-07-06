import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const leads = [
  {
    name: "Budi Santoso",
    phone: "08123456789",
    status: "🔥 Hot",
    score: 95,
  },
  {
    name: "Sinta Dewi",
    phone: "08234567890",
    status: "🟡 Warm",
    score: 77,
  },
  {
    name: "Andi Saputra",
    phone: "08345678901",
    status: "⚪ Cold",
    score: 42,
  },
];

export default function RecentLeads() {
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

            <TableRow key={lead.phone}>

              <TableCell>{lead.name}</TableCell>

              <TableCell>{lead.phone}</TableCell>

              <TableCell>{lead.status}</TableCell>

              <TableCell>{lead.score}</TableCell>

            </TableRow>

          ))}

        </TableBody>
 
      </Table>

    </div>
  );
}