import type { DateValue } from "./DateValue.ts";

export type DateComponents = {
  /** Original value */
  input: DateValue;
  /** Date object corresponding to the original value */
  date: Date;
  /** Timestamp */
  timestamp: number;
  /** Year */
  year: number;
  /** Year */
  Y: string;
  /** Year, zero-prefixed when shorter than 2 digits */
  YY: string;
  /** Year, zero-prefixed when shorter than 4 digits */
  YYYY: string;
  /** Year, last 2 digits zero-prefixed when shorter than 2 digits */
  yy: string;
  /** Year of a calendar era (specified by AD/BC or CE/BCE) */
  YE: string;
  /** Christian era: 1 for AD, -1 for BC */
  E: 1 | -1;
  /** Common Era: 1 for CE, -1 for BCE */
  CE: 1 | -1;
  /** Month */
  month: number;
  /** Month */
  M: string;
  /** Month, zero-prefixed when shorter than 2 digits */
  MM: string;
  /** Day */
  day: number;
  /** Day */
  D: string;
  /** Day, zero-prefixed when shorter than 2 digits */
  DD: string;
  /** Hours */
  hours: number;
  /** Hours */
  H: string;
  /** Hours, zero-prefixed when shorter than 2 digits */
  HH: string;
  /** 12h-clock hours */
  hours12: number;
  /** 12h-clock hours */
  h: string;
  /** 12h-clock hours, zero-prefixed when shorter than 2 digits */
  hh: string;
  /** Day period: AM/PM */
  a: string;
  /** Minutes */
  minutes: number;
  /** Minutes */
  m: string;
  /** Minutes, zero-prefixed when shorter than 2 digits */
  mm: string;
  /** Seconds */
  seconds: number;
  /** Seconds */
  s: string;
  /** Seconds, zero-prefixed when shorter than 2 digits */
  ss: string;
  /** Milliseconds */
  milliseconds: number;
  /** Milliseconds, zero-prefixed when shorter than 3 digits */
  ms: string;
  /** Time zone */
  tz: string;
  /** Week day */
  weekDay: number;
  /** Local time zone ISO date string */
  iso: string;
  /** Date (YYYY-MM-DD) */
  isoDate: string;
  /** Time (HH:mm:ss) */
  isoTime: string;
  /** Time with milliseconds */
  isoTimeMs: string;
  /** Timezone offset (in minutes) */
  timezoneOffset: number;
};
