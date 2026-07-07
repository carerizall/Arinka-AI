"use client";

import { useState } from "react";
import PipelineBoard from "./PipelineBoard";

interface Lead {
  id: string;
  name: string;
  phone: string;
  status: string;
}

interface Props {
  leads: Lead[];
}

export default function PipelineClient({
  leads,
}: Props) {
  const [items, setItems] = useState(leads);

  return (
    <PipelineBoard
      leads={items}
    />
  );
}