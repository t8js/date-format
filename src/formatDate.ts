/* eslint-disable max-params */

import { INVALID_DATE_STRING } from "./const";
import { fill } from "./fill";
import { getDateComponents } from "./getDateComponents";
import { isInvalidDate } from "./isInvalidDate";
import type { DateComponents } from "./types/DateComponents";
import type { DateValue } from "./types/DateValue";

export type FormatDateTemplate =
  | string
  | ((dateComponents: DateComponents) => string);

export type FormatDateTransform = Partial<
  Record<string, (dateComponents: DateComponents) => unknown>
>;

export type FormatDateOptions = {
  template: FormatDateTemplate;
  transform?: FormatDateTransform;
  targetTimezone?: string;
};

export function formatDate(
  date: DateValue,
  template?: FormatDateTemplate,
  targetTimezone?: string,
): string;

export function formatDate(
  date: DateValue,
  template?: FormatDateTemplate,
  transform?: FormatDateTransform,
  targetTimezone?: string,
): string;

export function formatDate(
  date: DateValue,
  options?: FormatDateOptions,
): string;

export function formatDate(
  date: DateValue,
  template: FormatDateTemplate | FormatDateOptions = "{iso}",
  transform?: FormatDateTransform | string,
  targetTimezone?: string,
): string {
  if (isInvalidDate(date)) return INVALID_DATE_STRING;

  if (typeof template === "object") {
    let options = template;

    transform = options.transform;
    targetTimezone = options.targetTimezone;
    template = options.template;
  } else if (typeof transform === "string") {
    targetTimezone = transform;
    transform = undefined;
  }

  let dateComponents = getDateComponents(date, targetTimezone);

  if (!dateComponents) return INVALID_DATE_STRING;

  let resolvedTemplate =
    typeof template === "function" ? template(dateComponents) : template;

  return fill(resolvedTemplate, dateComponents, transform);
}
