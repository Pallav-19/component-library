import { faker } from "@faker-js/faker";
import { addDays } from "date-fns";

export function generateTasks(numTasks) {
  const tasks = [];

  for (let i = 0; i < numTasks; i++) {
    const taskId = faker.string.uuid();
    const taskIcon = faker.image.avatar();
    const taskTitle = faker.person.firstName();
    const taskSubtitle = faker.person.jobTitle();

    const data = [];
    const numDataItems = faker.number.int({ min: 1, max: 5 });

    for (let j = 0; j < numDataItems; j++) {
      const startDate = faker.date.between({
        from: "2024-01-01",
        to: "2024-12-31",
      });
      const endDate = addDays(startDate, faker.number.int({ min: 1, max: 30 }));
      const projectTitle = faker.company.name();
      const projectSubtitle = `Subtitle ${faker.string
        .alphanumeric(1)
        .toUpperCase()}`;
      const description = faker.lorem.sentence();
      const bgColor = faker.internet.color();
      const occupancy = faker.datatype.number({ min: 1000, max: 20000 });

      data.push({
        id: faker.string.uuid(),
        startDate: startDate,
        endDate: endDate,
        occupancy: occupancy,
        title: projectTitle,
        subtitle: projectSubtitle,
        description: description,
        bgColor: bgColor,
      });
    }

    tasks.push({
      id: taskId,
      label: {
        icon: taskIcon,
        title: taskTitle,
        subtitle: taskSubtitle,
      },
      data: data,
    });
  }

  return tasks;
}
