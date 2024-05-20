import { faker } from "@faker-js/faker";
import { format } from "date-fns";

function getRandomDate() {
  const date = faker.date.between({
    from: "2023-01-01T00:00:00.000Z",
    to: "2026-01-01T00:00:00.000Z",
  });

  const hours = faker.number.int({ min: 0, max: 23 });
  const minutes = faker.number.int({ min: 0, max: 59 });
  const seconds = faker.number.int({ min: 0, max: 59 });

  date.setHours(hours, minutes, seconds);

  return date;
}

export const events = Array.from({ length: 1000 }, () => ({
  title: faker.company.catchPhrase(),
  date: getRandomDate(),
}));

export const eventsByDate = events.reduce((acc, event) => {
  const dateKey = format(event.date, "yyyy-MM-dd");

  if (!acc[dateKey]) {
    acc[dateKey] = [];
  }

  acc[dateKey].push(event);

  return acc;
}, {});
