import React from "react";
import { Pie } from "@ant-design/charts";
import { DonutBarData } from "../../utils/Data/Data";

const DonutCharts = () => {
  const data = DonutBarData;
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
  };

  return (
    <div className="w-full h-[100%]">
      <Pie {...config} />
    </div>
  );
};

export default DonutCharts;
