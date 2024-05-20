import { useState } from "react";
import { Scheduler } from "@bitnoi.se/react-scheduler";
import "@bitnoi.se/react-scheduler/dist/style.css";
import { generateTasks } from "../utils/ReactSchedulerUtilities";

const ReactScheduler = () => {
  const [filterButtonState, setFilterButtonState] = useState(0);

  return (
    <div className="relative w-full h-full">
      <Scheduler
        data={generateTasks(100)}
        onRangeChange={(newRange) => console.log(newRange)}
        onTileClick={(clickedResource) => console.log(clickedResource)}
        onItemClick={(item) => console.log(item)}
        onFilterData={() => {
          setFilterButtonState(1);
        }}
        onClearFilterData={() => {
          setFilterButtonState(0);
        }}
        config={{
          zoom: 0,
          filterButtonState,
        }}
      />
    </div>
  );
};

export default ReactScheduler;
