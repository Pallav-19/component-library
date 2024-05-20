import TimelineCard from "../components/timeline/TimelineCard";
import timelineElements from "../components/timeline/TimelineElements.js";

const Timeline = () => {
  return (
    <div className="h-full w-full">
      {timelineElements.map((timeline) => (
        <TimelineCard key={timeline.id} {...timeline} />
      ))}
    </div>
  );
};

export default Timeline;
