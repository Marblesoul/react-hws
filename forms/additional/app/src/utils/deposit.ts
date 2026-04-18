export function getRate(amount: number, months: number): number {
  if (amount > 100_000 && amount < 1_000_000) {
    if (months >= 1 && months <= 5) return 4;
    if (months >= 6 && months <= 12) return 4.5;
    if (months > 12) return 1.5;
  }
  if (amount >= 1_000_000) {
    if (months >= 1 && months <= 5) return 4.5;
    if (months >= 6 && months <= 12) return 5.5;
    if (months > 12) return 1.5;
  }
  return 1.5;
}

export function getFinalAmount(amount: number, rate: number, months: number): number {
  return amount * (1 + (rate / 100) * (months / 12));
}
