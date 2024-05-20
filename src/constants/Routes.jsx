import { GrSchedule } from "react-icons/gr";
import { TbTimelineEventText, TbTimelineEventMinus } from "react-icons/tb";
import { FaChartGantt } from "react-icons/fa6";
import { GiOrganigram } from "react-icons/gi";
import { RiCalendarScheduleFill } from "react-icons/ri";

import Calendar from "../pages/Calendar";
import Timeline from "../pages/Timeline";
import ReactScheduler from "../pages/ReactScheduler";
import OrganizationChart from "../pages/OrganizationChart";
import ChronoTimeline from "../pages/ChronoTimeline";
import MMGanttChart from "../pages/MMGanttChart";

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
    title: "React Scheduler",
    to: "/react-scheduler",
    Icon: RiCalendarScheduleFill,
    element: <ReactScheduler />,
  },

  {
    id: 4,
    title: "Organization Chart",
    to: "/organization-chart",
    Icon: GiOrganigram,
    element: <OrganizationChart />,
  },

  {
    id: 4,
    title: "Chrono Timeline",
    to: "/chrono-timeline",
    Icon: TbTimelineEventMinus,
    element: <ChronoTimeline />,
  },

  {
    id: 5,
    title: "Matematuk Gantt Chart",
    to: "/mm-gantt-chart",
    Icon: FaChartGantt,
    element: <MMGanttChart />,
  },
];
