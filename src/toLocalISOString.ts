import { formatDate } from "./formatDate.ts";
import type { DateValue } from "./types/DateValue.ts";

export function toLocalISOString(date: DateValue) {
  return formatDate(date, "{iso}");
}
