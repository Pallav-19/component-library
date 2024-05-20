import { addDays, addMonths, lastDayOfMonth, startOfMonth, subMonths } from "date-fns";

export const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const VIEW_TYPES = {
  MONTHLY: "Monthly",
  WEEKLY: "Weekly",
  DAILY: "Daily",
};

export const getNthDayOfPreviousMonth = (date, n) =>
  addDays(startOfMonth(subMonths(date, 1)), n - 1);

export const getNthDayOfNextMonth = (date, n) =>
  addDays(startOfMonth(addMonths(date, 1)), n - 1);

export const getNoOfDaysInPreviousMonth = (date) =>
  lastDayOfMonth(subMonths(date, 1)).getDate();
