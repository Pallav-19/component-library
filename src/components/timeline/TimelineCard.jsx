import PropTypes from "prop-types";

const TimelineThread = () => (
  <div className="h-full w-1 bg-purple-900 relative">
    <div className="absolute bg-amber-300 h-10 w-10 rounded-full top-2 -right-[18px] p-2.5">
      <div className="bg-purple-900 h-full w-full rounded-full"></div>
    </div>
  </div>
);

const TimelineCard = ({
  title,
  location,
  description,
  date,
  tech,
}) => {
  return (
    <div className={`flex gap-8 h-60 w-1/2 bg-transparent`}>
      <div className="pt-4 w-16">
        <h1 className="font-semibold text-md">{date}</h1>
      </div>

      <TimelineThread />

      <div className="flex-1 pb-8">
        <div className="rounded-lg shadow-md h-full w-full bg-white p-4 ">
          <h1 className="font-semibold text-xl">{title}</h1>

          <span className="font-normal text-base text-gray-600">
            {location}
          </span>

          <p className="mt-2">{description}</p>

          <div className="mt-8 w-full flex justify-end">
            <span className="font-normal text-gray-500">{tech.join(", ")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

TimelineCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  date: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  tech: PropTypes.arrayOf(PropTypes.string),
};

export default TimelineCard;
