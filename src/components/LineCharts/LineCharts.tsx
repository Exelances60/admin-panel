import React from "react";
import { Bar } from "@ant-design/charts";

const LineCharts = () => {
  const data = [
    {
      year: "Ocak",
      value: 38,
    },
    {
      year: "Şubat",
      value: 52,
    },
    {
      year: "Mart",
      value: 61,
    },
    {
      year: "Nisan",
      value: 145,
    },
    {
      year: "Mayıs",
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
