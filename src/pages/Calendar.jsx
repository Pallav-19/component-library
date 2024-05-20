import { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import {
  addDays,
  addMonths,
  addWeeks,
  endOfWeek,
  format,
  startOfWeek,
  subDays,
  subMonths,
  subWeeks,
} from "date-fns";
import PropTypes from "prop-types";

import MonthlyEventCalendar from "../components/calendar/MonthlyEventCalendar";
import { VIEW_TYPES } from "../constants/CalendarConstants";
import WeeklyEventCalendar from "../components/calendar/WeeklyEventCalendar";
import DailyEventCalendar from "../components/calendar/DailyEventCalendar";

const IconButton = ({ handleClick, icon }) => {
  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-1 text-2xl px-1 py-1 text-purple-700 rounded"
    >
      {icon}
    </button>
  );
};

IconButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.element.isRequired,
};

const MonthHeader = ({ calendarDate }) => (
  <h1 className="font-semibold h-full flex items-center text-2xl w-48 text-center">
    {format(calendarDate, "MMMM yyyy")}
  </h1>
);

MonthHeader.propTypes = {
  calendarDate: PropTypes.instanceOf(Date).isRequired,
};

const WeekHeader = ({ calendarDate }) => {
  const startOfWeekDate = startOfWeek(calendarDate);

  const endOfWeekDate = endOfWeek(calendarDate);

  return (
    <h1 className="font-semibold h-full flex items-center text-2xl w-72 text-center">
      {format(startOfWeekDate, "dd/M/yyyy")} -{" "}
      {format(endOfWeekDate, "dd/M/yyyy")}
    </h1>
  );
};

WeekHeader.propTypes = {
  calendarDate: PropTypes.instanceOf(Date).isRequired,
};

const DailyHeader = ({ calendarDate }) => {
  return (
    <h1 className="font-semibold h-full flex items-center text-2xl w-56 text-center">
      {format(calendarDate, "dd MMMM yyyy")}
    </h1>
  );
};

DailyHeader.propTypes = {
  calendarDate: PropTypes.instanceOf(Date),
};

const DayNavigator = ({ calendarDate, setCalendarDate }) => {
  const addDay = () => setCalendarDate(addDays(calendarDate, 1));

  const subDay = () => setCalendarDate(subDays(calendarDate, 1));

  return (
    <div className="flex items-center gap-4">
      <IconButton icon={<BiLeftArrow />} handleClick={subDay} />

      <DailyHeader calendarDate={calendarDate} />

      <IconButton icon={<BiRightArrow />} handleClick={addDay} />
    </div>
  );
};

DayNavigator.propTypes = {
  calendarDate: PropTypes.instanceOf(Date),
  setCalendarDate: PropTypes.func.isRequired,
};

const WeekNavigator = ({ calendarDate, setCalendarDate }) => {
  const addWeek = () => setCalendarDate(addWeeks(calendarDate, 1));

  const subWeek = () => setCalendarDate(subWeeks(calendarDate, 1));

  return (
    <div className="flex items-center gap-4">
      <IconButton icon={<BiLeftArrow />} handleClick={subWeek} />

      <WeekHeader calendarDate={calendarDate} />

      <IconButton icon={<BiRightArrow />} handleClick={addWeek} />
    </div>
  );
};

WeekNavigator.propTypes = {
  calendarDate: PropTypes.instanceOf(Date).isRequired,
  setCalendarDate: PropTypes.func.isRequired,
};

const MonthNavigator = ({ calendarDate, setCalendarDate }) => {
  const addMonth = () => setCalendarDate(addMonths(calendarDate, 1));

  const subMonth = () => setCalendarDate(subMonths(calendarDate, 1));

  return (
    <div className="flex items-center gap-4">
      <IconButton icon={<BiLeftArrow />} handleClick={subMonth} />

      <MonthHeader calendarDate={calendarDate} />

      <IconButton icon={<BiRightArrow />} handleClick={addMonth} />
    </div>
  );
};

MonthNavigator.propTypes = {
  calendarDate: PropTypes.instanceOf(Date).isRequired,
  setCalendarDate: PropTypes.func.isRequired,
};

const SwitchNavigator = ({ view, calendarDate, setCalendarDate }) => {
  switch (view) {
    case VIEW_TYPES.MONTHLY:
      return (
        <MonthNavigator
          calendarDate={calendarDate}
          setCalendarDate={setCalendarDate}
        />
      );

    case VIEW_TYPES.WEEKLY:
      return (
        <WeekNavigator
          calendarDate={calendarDate}
          setCalendarDate={setCalendarDate}
        />
      );
    case VIEW_TYPES.DAILY:
      return (
        <DayNavigator
          calendarDate={calendarDate}
          setCalendarDate={setCalendarDate}
        />
      );

    default:
      return;
  }
};

SwitchNavigator.propTypes = {
  view: PropTypes.string.isRequired,
  calendarDate: PropTypes.instanceOf(Date).isRequired,
  setCalendarDate: PropTypes.func.isRequired,
};

const ViewSelector = ({ view, setView }) => {
  const isLastElement = (index) =>
    index !== Object.values(VIEW_TYPES).length - 1;

  const changeView = (_view) => setView(_view);

  return (
    <div className="flex items-center border border-purple-700 rounded-md overflow-hidden">
      {Object.values(VIEW_TYPES).map((_view, index) => (
        <button
          type="button"
          onClick={() => changeView(_view)}
          className={`p-2  text-purple-700 font-semibold ${
            isLastElement(index) && "border border-r-purple-700"
          } ${view === _view && "bg-purple-700 text-white"}`}
          key={_view}
        >
          {_view}
        </button>
      ))}
    </div>
  );
};

ViewSelector.propTypes = {
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
};

const GoToTodayButton = ({ setToday }) => (
  <button
    onClick={setToday}
    className="border border-purple-700 p-2 rounded text-purple-700 font-semibold"
  >
    Today
  </button>
);

GoToTodayButton.propTypes = {
  setToday: PropTypes.func.isRequired,
};

const ActionsAndInfo = ({ calendarDate, setCalendarDate, view, setView }) => {
  const setToday = () => setCalendarDate(new Date());

  return (
    <div className="flex w-full items-center justify-between mb-6">
      <SwitchNavigator
        view={view}
        calendarDate={calendarDate}
        setCalendarDate={setCalendarDate}
      />

      <ViewSelector view={view} setView={setView} />

      <GoToTodayButton setToday={setToday} />
    </div>
  );
};

ActionsAndInfo.propTypes = {
  calendarDate: PropTypes.instanceOf(Date).isRequired,
  setCalendarDate: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
};

const SwitchView = ({ view, calendarDate }) => {
  switch (view) {
    case VIEW_TYPES.MONTHLY:
      return <MonthlyEventCalendar calendarDate={calendarDate} />;

    case VIEW_TYPES.WEEKLY:
      return <WeeklyEventCalendar calendarDate={calendarDate} />;

    case VIEW_TYPES.DAILY:
      return <DailyEventCalendar calendarDate={calendarDate} />;

    default:
      break;
  }
};

SwitchView.propTypes = {
  calendarDate: PropTypes.instanceOf(Date).isRequired,
  view: PropTypes.string.isRequired,
};

const Calendar = () => {
  const currentDate = new Date();

  const [calendarDate, setCalendarDate] = useState(currentDate);

  const [view, setView] = useState(VIEW_TYPES.MONTHLY);

  return (
    <div className="h-ful w-full">
      <div className="container mx-auto pb-2 bg-white rounded-lg p-6">
        <ActionsAndInfo
          calendarDate={calendarDate}
          setCalendarDate={setCalendarDate}
          view={view}
          setView={setView}
        />

        <SwitchView view={view} calendarDate={calendarDate} />
      </div>
    </div>
  );
};

export default Calendar;
