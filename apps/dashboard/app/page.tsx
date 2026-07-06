import { prisma } from "@/lib/prisma";
import AppLayout from "@/components/layout/AppLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import LeadChart from "@/components/dashboard/LeadChart";
import RecentLeads from "@/components/dashboard/RecentLeads";

export default async function Home() {
  const totalLead = await prisma.lead.count();

const hotLead = await prisma.lead.count({
  where: {
    status: "Hot",
  },
});

const warmLead = await prisma.lead.count({
  where: {
    status: "Warm",
  },
});

const coldLead = await prisma.lead.count({
  where: {
    status: "Cold",
  },
});

const recentLeads = await prisma.lead.findMany({
  take: 5,
  orderBy: {
    createdAt: "desc",
  },
});
const monthlyData = [
  {
    month: "Jul",
    lead: totalLead,
  },
];
  return (
    <AppLayout>
      <h1 className="text-4xl font-bold">Dashboard</h1>

      <p className="mt-2 text-zinc-400">
        Selamat datang di Arinka AI CRM 🚀
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
         title="Total Lead"
         value={totalLead}
        />
        <StatsCard
         title="Hot Lead"
        value={hotLead}
        />

        <StatsCard
         title="Warm Lead"
         value={warmLead}
        />

        <StatsCard
        title="Cold Lead"
       value={coldLead}
        />

        <StatsCard title="Chat Hari Ini" value="52" />
        <StatsCard title="AI Summary" value="39" />
      </div>

      <div className="mt-8">
        <LeadChart data={monthlyData} />
      </div>

      <RecentLeads leads={recentLeads} />

    </AppLayout>
  );
}

