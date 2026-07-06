type StatsCardProps = {
  title: string;
  value: string;
  color?: string;
};

export default function StatsCard({
  title,
  value,
  color = "text-white",
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm transition hover:border-zinc-700">
      <p className="text-sm text-zinc-400">{title}</p>

      <h2 className={`mt-4 text-4xl font-bold ${color}`}>
        {value}
      </h2>
    </div>
  );
}