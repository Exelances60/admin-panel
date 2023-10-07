import React from "react";
import { Bar } from "@ant-design/charts";

const LineCharts = () => {
  const data = [
    {
      year: "1951 年",
      value: 38,
    },
    {
      year: "1952 年",
      value: 52,
    },
    {
      year: "1956 年",
      value: 61,
    },
    {
      year: "1957 年",
      value: 145,
    },
    {
      year: "1958 年",
      value: 48,
    },
  ];
  const config = {
    data,
    xField: "value",
    yField: "year",
    seriesField: "year",
    legend: {
      position: "top-left" as const, // Use one of the predefined values
    },
  };
  return <Bar {...config} />;
};

export default LineCharts;
