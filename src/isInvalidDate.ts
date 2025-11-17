import { toTimestamp } from "./toTimestamp.ts";
import type { DateValue } from "./types/DateValue.ts";

export function isInvalidDate(date: DateValue) {
  return Number.isNaN(toTimestamp(date));
}
