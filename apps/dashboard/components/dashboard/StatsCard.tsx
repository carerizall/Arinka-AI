interface StatsCardProps {
  title: string;
  value: React.ReactNode;
}

export default function StatsCard({
  title,
  value,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-sm text-zinc-400">{title}</p>

      <h2 className="mt-4 text-4xl font-bold text-white">
        {value}
      </h2>
    </div>
  );
}