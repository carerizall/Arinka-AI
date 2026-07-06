export function generateSummary(message: string): string {
  const text = message.toLowerCase();

  const result: string[] = [];

  if (text.includes("survey")) {
    result.push("Lead ingin melakukan survey.");
  }

  if (text.includes("cash")) {
    result.push("Tertarik pembayaran cash.");
  }

  if (text.includes("kpr")) {
    result.push("Tertarik pembayaran KPR.");
  }

  if (text.includes("harga")) {
    result.push("Menanyakan harga.");
  }

  if (text.includes("diskon")) {
    result.push("Menanyakan diskon.");
  }

  if (text.includes("booking")) {
    result.push("Ingin melakukan booking.");
  }

  if (result.length === 0) {
    return "Belum ada informasi penting.";
  }

  return result.join(" ");
}