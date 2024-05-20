import PropTypes from "prop-types";
import { getMinutes, getHours } from "date-fns";

const HalfRenderer = ({ todayEvents, hourIndex, secondHalf }) => {
  return (
    <div className="flex flex-col gap-2 border border-gray-300 h-1/2 p-0.5 overflow-y-scroll no-scrollbar">
      {todayEvents
        .filter((event) => {
          const eventMinutes = getMinutes(new Date(event.date));
          const eventHour = getHours(new Date(event.date));
          return (
            eventHour === hourIndex &&
            (secondHalf ? eventMinutes > 30 : eventMinutes <= 30)
          );
        })
        .map((event) => (
          <div
            className="p-1 text-xs bg-amber-300 rounded text-gray-700"
            key={event.title}
          >
            {event.title}
          </div>
        ))}
    </div>
  );
};

HalfRenderer.propTypes = {
  todayEvents: PropTypes.array.isRequired,
  hourIndex: PropTypes.number.isRequired,
  secondHalf: PropTypes.bool.isRequired,
};

export default HalfRenderer;
