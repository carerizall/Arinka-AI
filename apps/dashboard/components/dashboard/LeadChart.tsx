"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", lead: 30 },
  { month: "Feb", lead: 45 },
  { month: "Mar", lead: 40 },
  { month: "Apr", lead: 70 },
  { month: "Mei", lead: 90 },
  { month: "Jun", lead: 120 },
];

export default function LeadChart() {
  return (
    <div className="rounded-xl bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Perkembangan Lead
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#27272a" />

            <XAxis dataKey="month" stroke="#a1a1aa" />

            <YAxis stroke="#a1a1aa" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="lead"
              stroke="#22c55e"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}