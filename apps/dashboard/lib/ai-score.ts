export function calculateAIScore(message: string) {
  const text = message.toLowerCase();

  let score = 0;

  if (text.includes("harga")) score += 20;

  if (text.includes("lokasi")) score += 20;

  if (text.includes("survey")) score += 30;

  if (text.includes("booking")) score += 40;

  if (text.includes("cash")) score += 40;

  if (text.includes("kapan")) score += 10;

  return Math.min(score, 100);
}

export function calculateLeadStatus(score: number) {
  if (score >= 80) return "Hot";

  if (score >= 50) return "Warm";

  return "Cold";
}