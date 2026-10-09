export function isValidPriority(value: number): boolean {
  return Number.isInteger(value) && value >= 1 && value <= 3;
}