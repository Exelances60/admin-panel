import React from "react";
import { Pie } from "@ant-design/charts";

const DonutCharts = () => {
  const data = [
    {
      type: "demo1",
      value: 27,
    },
    {
      type: "demo2",
      value: 25,
    },
    {
      type: "demo3",
      value: 18,
    },
    {
      type: "demo4",
      value: 15,
    },
    {
      type: "demo5",
      value: 10,
    },
    {
      type: "demo6",
      value: 5,
    },
  ];

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
