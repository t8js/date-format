export function pad(x: unknown, length: number, padding = "0"): string {
  return String(x).padStart(length, padding);
}
