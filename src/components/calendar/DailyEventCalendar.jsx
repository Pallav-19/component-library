import { format } from "date-fns";
import PropTypes from "prop-types";

import { eventsByDate } from "../../utils/CalendarUtilities";
import HalfRenderer from "./misc/HalfRenderer";

const DailyEventCalendar = ({ calendarDate }) => {
  const dataKey = format(calendarDate, "yyyy-MM-dd");

  const todayEvents = eventsByDate[dataKey] || [];

  return (
    <div className="w-full border border-0.5 border-gray-300">
      {Array.from({ length: 24 }, (_, hourIndex) => {
        let hour = "";
        let format = "AM";

        if (hourIndex === 0) {
          hour = "12:00";
        } else if (hourIndex > 0 && hourIndex < 12) {
          hour = hourIndex.toString().padStart(2, "0") + ":00";
        } else if (hourIndex === 12) {
          hour = "12:00";
          format = "PM";
        } else {
          hour = (hourIndex - 12).toString().padStart(2, "0") + ":00";
          format = "PM";
        }

        return (
          <div className="w-full flex border border-gray-300" key={hourIndex}>
            <div className=" text-center font-semibold h-20 p-2 w-1/12">
              {hour} {format}
            </div>

            <div className="w-11/12 h-20">
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
          </div>
        );
      })}
    </div>
  );
};

DailyEventCalendar.propTypes = {
  calendarDate: PropTypes.instanceOf(Date),
};

export default DailyEventCalendar;
