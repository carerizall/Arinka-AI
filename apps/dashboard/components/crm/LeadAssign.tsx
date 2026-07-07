"use client";

import { useState } from "react";

interface Props {
  id: string;
  currentAssign: string | null;
}

const USERS = [
  "Belum Ditugaskan",
  "Abas Rizal",
  "Marketing A",
  "Marketing B",
  "Admin",
];

export default function LeadAssign({
  id,
  currentAssign,
}: Props) {
  const [assignedTo, setAssignedTo] = useState(
    currentAssign ?? "Belum Ditugaskan"
  );

  const [loading, setLoading] = useState(false);

  async function saveAssign() {
    setLoading(true);

    await fetch(`/api/leads/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        assignedTo:
          assignedTo === "Belum Ditugaskan"
            ? null
            : assignedTo,
      }),
    });

    setLoading(false);

    alert("Sales berhasil diperbarui.");
  }

  return (
    <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-4 text-xl font-semibold">
        Assign Sales
      </h2>

      <select
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
        className="w-full rounded-lg bg-zinc-800 p-3"
      >
        {USERS.map((user) => (
          <option key={user}>
            {user}
          </option>
        ))}
      </select>

      <button
        onClick={saveAssign}
        disabled={loading}
        className="mt-4 rounded-lg bg-blue-600 px-5 py-3"
      >
        {loading ? "Menyimpan..." : "Simpan Sales"}
      </button>
    </div>
  );
}