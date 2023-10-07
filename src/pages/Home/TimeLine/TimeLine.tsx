import React from "react";
import { Timeline } from "antd";
import { timelineItems } from "../../../utils/Data/Data";

const TimeLineComponet = () => {
  return (
    <div className="w-full h-full p-5 box-border items-center justify-center">
      <Timeline>
        {timelineItems.map((item, index) => (
          <Timeline.Item key={index} color={item.color}>
            {item.content}
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLineComponet;
