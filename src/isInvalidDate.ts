import { toTimestamp } from "./toTimestamp";
import type { DateValue } from "./types/DateValue";

export function isInvalidDate(date: DateValue) {
  return Number.isNaN(toTimestamp(date));
}
