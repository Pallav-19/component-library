import PropTypes from "prop-types";
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isToday,
  startOfMonth,
} from "date-fns";

import {
  getNoOfDaysInPreviousMonth,
  getNthDayOfNextMonth,
  getNthDayOfPreviousMonth,
  WEEKDAYS,
} from "../../constants/CalendarConstants";

import { eventsByDate } from "../../utils/CalendarUtilities";

const WeekdaysMapping = () =>
  WEEKDAYS.map((day) => (
    <div
      key={day}
      className="font-bold text-cener p-2 border border-0.5 border-gray-300"
    >
      {day}
    </div>
  ));

const EventsByDayMapping = ({ todaysEvent }) => (
  <div className="h-36 flex flex-col gap-1 overflow-y-scroll no-scrollbar mt-1">
    {todaysEvent.map((event, index) => (
      <p className="bg-amber-300 p-2 rounded text-gray-700" key={index}>
        {event.title}
      </p>
    ))}
  </div>
);

EventsByDayMapping.propTypes = {
  todaysEvent: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const DateText = ({ day }) => {
  return (
    <span
      className={`${
        isToday(day) && "bg-purple-900 text-white"
      } p-1 h-6 w-6 rounded-full`}
    >
      {format(day, "d")}
    </span>
  );
};

DateText.propTypes = {
  day: PropTypes.instanceOf(Date).isRequired,
};

const DateTile = ({ day }) => {
  const dateKey = format(day, "yyyy-MM-dd");

  const todaysEvent = eventsByDate[dateKey] || [];
  return (
    <div className="p-2 border border-0.5 border-gray-300 h-48">
      <DateText day={day} />

      <EventsByDayMapping todaysEvent={todaysEvent} />
    </div>
  );
};

DateTile.propTypes = {
  day: PropTypes.instanceOf(Date).isRequired,
};

const NonMonthDayMapping = ({ length, calendarDate, tail = false }) => {
  const noOfDaysInPrevMonth = getNoOfDaysInPreviousMonth(calendarDate);

  return Array.from({ length }).map((_, index) => {
    const nthDayOfPreviousMonth = getNthDayOfPreviousMonth(
      calendarDate,
      noOfDaysInPrevMonth - length + index + 1
    );

    const nthDayOfNextMonth = getNthDayOfNextMonth(calendarDate, index + 1);

    return (
      <DateTile
        day={tail ? nthDayOfNextMonth : nthDayOfPreviousMonth}
        key={`empty-${index}`}
      />
    );
  });
};

NonMonthDayMapping.propTypes = {
  length: PropTypes.number.isRequired,
  calendarDate: PropTypes.instanceOf(Date).isRequired,
  tail: PropTypes.bool,
};

const CalendarDaysMapping = ({ firstDayOfTheMonth, lastDayOfMonth }) => {
  const daysInMonth = eachDayOfInterval({
    start: firstDayOfTheMonth,
    end: lastDayOfMonth,
  });

  return daysInMonth.map((day, index) => {
    return <DateTile key={index} day={day} />;
  });
};

CalendarDaysMapping.propTypes = {
  firstDayOfTheMonth: PropTypes.instanceOf(Date).isRequired,
  lastDayOfMonth: PropTypes.instanceOf(Date).isRequired,
};

const MonthlyEventCalendar = ({ calendarDate }) => {
  const firstDayOfTheMonth = startOfMonth(calendarDate);

  const lastDayOfMonth = endOfMonth(calendarDate);

  const startingDayIndex = getDay(firstDayOfTheMonth);

  const endDayIndex = getDay(lastDayOfMonth);

  const noOfRemainingDaySlots = 6 - endDayIndex;

  return (
    <div className="grid grid-cols-7 border border-0.5 border-gray-300 rounded mt-4">
      <WeekdaysMapping />

      <NonMonthDayMapping
        calendarDate={calendarDate}
        length={startingDayIndex}
      />

      <CalendarDaysMapping
        firstDayOfTheMonth={firstDayOfTheMonth}
        lastDayOfMonth={lastDayOfMonth}
      />

      <NonMonthDayMapping
        calendarDate={calendarDate}
        tail={true}
        length={noOfRemainingDaySlots}
      />
    </div>
  );
};

MonthlyEventCalendar.propTypes = {
  calendarDate: PropTypes.instanceOf(Date).isRequired,
};

export default MonthlyEventCalendar;
