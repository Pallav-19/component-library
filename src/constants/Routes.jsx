import { GrSchedule } from "react-icons/gr";
import { TbTimelineEventText } from "react-icons/tb";
import { FaChartGantt } from "react-icons/fa6";
import { GiOrganigram } from "react-icons/gi";

import Calendar from "../pages/Calendar";
import Timeline from "../pages/Timeline";
import GanttChart from "../pages/GanttChart";
import OrganizationChart from "../pages/OrganizationChart";

export const AppRoutes = [
  {
    id: 1,
    title: "Calendar",
    to: "/calendar",
    Icon: GrSchedule,
    element: <Calendar />,
  },

  {
    id: 2,
    title: "Timeline",
    to: "/timleline",
    Icon: TbTimelineEventText,
    element: <Timeline />,
  },

  {
    id: 3,
    title: "Gantt Chart",
    to: "/gantt-chart",
    Icon: FaChartGantt,
    element: <GanttChart />,
  },

  {
    id: 4,
    title: "Organization Chart",
    to: "/organization-chart",
    Icon: GiOrganigram,
    element: <OrganizationChart />,
  },
];
