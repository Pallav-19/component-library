import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { events } from "../utils/CalendarUtilities";

export default function FullCalendarComponent() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      events={events}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth",
      }}
    />
  );
}
