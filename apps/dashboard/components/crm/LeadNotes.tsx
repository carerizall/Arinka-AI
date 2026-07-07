"use client";

import { useState } from "react";

interface Props {
  id: string;
  currentNotes: string | null;
}

export default function LeadNotes({
  id,
  currentNotes,
}: Props) {
  const [notes, setNotes] = useState(currentNotes ?? "");
  const [loading, setLoading] = useState(false);

  async function saveNotes() {
    setLoading(true);

    await fetch(`/api/leads/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        notes,
      }),
    });

    setLoading(false);

    alert("Catatan berhasil disimpan.");
  }

  return (
    <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-4 text-xl font-semibold">
        Catatan Sales
      </h2>

      <textarea
        rows={6}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full rounded-lg bg-zinc-800 p-3"
        placeholder="Tulis catatan..."
      />

      <button
        onClick={saveNotes}
        disabled={loading}
        className="mt-4 rounded-lg bg-green-600 px-5 py-3"
      >
        {loading ? "Menyimpan..." : "Simpan Catatan"}
      </button>
    </div>
  );
}