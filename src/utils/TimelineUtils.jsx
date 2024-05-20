import { faker } from "@faker-js/faker";

export function generateHistoricalEvents(numEvents) {
  const events = [];

  for (let i = 0; i < numEvents; i++) {
    const year = faker.date.past(80).getFullYear();
    const eventTitle = faker.lorem.words(2);
    const cardSubtitle = faker.lorem.sentence();
    const cardDetailedText = faker.lorem.paragraph();

    events.push({
      title: `Year ${year}`,
      cardTitle: eventTitle,
      url: faker.internet.url(),
      cardSubtitle: cardSubtitle,
      cardDetailedText: cardDetailedText,
    });
  }

  return events;
}
