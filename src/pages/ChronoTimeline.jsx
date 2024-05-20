import { Chrono } from "react-chrono";
import { generateHistoricalEvents } from "../utils/TimelineUtils";

const ChronoTimeline = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col font-semibold text-2xl gap-4 text-amber-800">
        <h1>Horizontal</h1>

        <Chrono items={generateHistoricalEvents(100)} mode="HORIZONTAL" />
      </div>

      <div className="flex flex-col font-semibold text-2xl gap-4 text-amber-800">
        <h1>Vertical</h1>

        <Chrono items={generateHistoricalEvents(100)} mode="VERTICAL" />
      </div>
    </div>
  );
};

export default ChronoTimeline;
