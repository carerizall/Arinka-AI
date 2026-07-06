import AppLayout from "@/components/layout/AppLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import LeadChart from "@/components/dashboard/LeadChart";
import RecentLeads from "@/components/dashboard/RecentLeads";

export default function Home() {
  return (
    <AppLayout>
      <h1 className="text-4xl font-bold">Dashboard</h1>

      <p className="mt-2 text-zinc-400">
        Selamat datang di Arinka AI CRM 🚀
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard title="Total Lead" value="124" />
        <StatsCard title="Hot Lead" value="18" color="text-green-400" />
        <StatsCard title="Chat Hari Ini" value="52" />
        <StatsCard title="AI Summary" value="39" />
      </div>

      <div className="mt-8">
        <LeadChart />
      </div>

      <RecentLeads />

    </AppLayout>
  );
}

