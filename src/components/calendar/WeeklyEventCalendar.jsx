import PropTypes from "prop-types";

import { WEEKDAYS } from "../../constants/CalendarConstants";
import {
  eachDayOfInterval,
  endOfWeek,
  format,
  isToday,
  startOfWeek,
} from "date-fns";

import { eventsByDate } from "../../utils/CalendarUtilities";
import HalfRenderer from "./misc/HalfRenderer";

const EmptyCell = () => <div></div>;

const WeekdaysMapping = ({ datesOfWeek }) => (
  <div className="grid grid-cols-8">
    <EmptyCell />

    {WEEKDAYS.map((day, index) => (
      <div
        key={day}
        className="font-bold flex items-center justify-between  p-2 border border-0.5 border-gray-300"
      >
        {day}

        <span
          className={`font-normal text-gray-700 text- rounded-full p-1 h-8 w-8 text-center ${
            isToday(datesOfWeek[index]) && "bg-purple-700 text-white"
          } `}
        >
          {format(datesOfWeek[index], "d")}
        </span>
      </div>
    ))}
  </div>
);

WeekdaysMapping.propTypes = {
  datesOfWeek: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
};

const WeeklyEventCalendar = ({ calendarDate }) => {
  const startOfWeekDate = startOfWeek(calendarDate);

  const endOfWeekDate = endOfWeek(calendarDate);

  const datesOfWeek = eachDayOfInterval({
    start: startOfWeekDate,
    end: endOfWeekDate,
  });

  return (
    <div className="border-0.5 border-gray-300 rounded mt-4">
      <WeekdaysMapping datesOfWeek={datesOfWeek} />

      {Array.from({ length: 24 }, (_, hourIndex) => {
        let hour = "";
        let _format = "AM";

        if (hourIndex === 0) {
          hour = "12:00";
        } else if (hourIndex > 0 && hourIndex < 12) {
          hour = hourIndex.toString().padStart(2, "0") + ":00";
        } else if (hourIndex === 12) {
          hour = "12:00";
          _format = "PM";
        } else {
          hour = (hourIndex - 12).toString().padStart(2, "0") + ":00";
          _format = "PM";
        }

        return (
          <div
            className=" grid grid-cols-8 border border-gray-300"
            key={hourIndex}
          >
            <div className=" text-center font-semibold h-20 p-2">
              {hour} {_format}
            </div>

            {Array.from({ length: 7 }, (_, index) => {
              const date = datesOfWeek[index];

              const dataKey = format(date, "yyyy-MM-dd");

              const todayEvents = eventsByDate[dataKey] || [];

              return (
                <div className=" h-20" key={index}>
                  <HalfRenderer
                    hourIndex={hourIndex}
                    secondHalf={false}
                    todayEvents={todayEvents}
                  />

                  <HalfRenderer
                    hourIndex={hourIndex}
                    secondHalf={true}
                    todayEvents={todayEvents}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

WeeklyEventCalendar.propTypes = {
  calendarDate: PropTypes.instanceOf(Date).isRequired,
};

export default WeeklyEventCalendar;
