import PropTypes from "prop-types";
import "gantt-task-react/dist/index.css";
import { ViewMode } from "gantt-task-react";
import { AVAILABLE_VIEW_MODES } from "../../utils/MMGantChartUtilites";

export const ViewSwitcher = ({
  onViewModeChange,
  onViewListChange,
  isChecked,
  viewMode,
}) => {
  return (
    <div className="container flex w-full gap-4 items-center">
      {AVAILABLE_VIEW_MODES.map((mode) => (
        <button
          key={mode.id}
          className={`p-2 text-purple-700 border border-purple-700 rounded ${
            viewMode === ViewMode[mode.accessor] && "bg-purple-700 text-white"
          }`}
          onClick={() => onViewModeChange(ViewMode[mode.accessor])}
        >
          {mode.label}
        </button>
      ))}

      <div className="flex gap-2 ml-auto">
        <label>
          <input
            type="checkbox"
            defaultChecked={isChecked}
            onClick={() => onViewListChange(!isChecked)}
          />
        </label>
        Show Task List
      </div>
    </div>
  );
};

ViewSwitcher.propTypes = {
  onViewModeChange: PropTypes.func,
  onViewListChange: PropTypes.func,
  isChecked: PropTypes.bool,
  viewMode: PropTypes.string,
};
