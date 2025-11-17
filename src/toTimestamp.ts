import type { DateValue } from "./types/DateValue.ts";

export function toTimestamp(x: DateValue): number {
  return (x instanceof Date ? x : new Date(x)).getTime();
}
