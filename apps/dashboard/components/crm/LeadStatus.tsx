"use client";

import { useState } from "react";

interface Props {
  id: string;
  currentStatus: string;
}

export default function LeadStatus({
  id,
  currentStatus,
}: Props) {
  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);

  async function saveStatus() {
    setLoading(true);

    await fetch(`/api/leads/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
      }),
    });

    setLoading(false);

    alert("Status berhasil diupdate.");
  }

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-3 font-semibold">
        Status
      </h2>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full rounded-lg bg-zinc-800 p-3"
      >
        <option>Cold</option>
        <option>Warm</option>
        <option>Hot</option>
        <option>Closing</option>
        <option>Lost</option>
      </select>

      <button
        onClick={saveStatus}
        disabled={loading}
        className="mt-4 w-full rounded-lg bg-green-600 py-3"
      >
        {loading ? "Menyimpan..." : "Simpan"}
      </button>
    </div>
  );
}