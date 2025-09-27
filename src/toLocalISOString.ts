import { formatDate } from "./formatDate";
import type { DateValue } from "./types/DateValue";

export function toLocalISOString(date: DateValue) {
  return formatDate(date, "{iso}");
}
