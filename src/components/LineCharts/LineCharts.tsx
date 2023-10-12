import React from "react";
import { Bar } from "@ant-design/charts";
import { useTranslation } from "react-i18next";

const LineCharts = () => {
  const { t } = useTranslation();
  const data = [
    {
      year: t("January"),
      value: 38,
    },
    {
      year: t("February"),
      value: 52,
    },
    {
      year: t("March"),
      value: 61,
    },
    {
      year: t("April"),
      value: 145,
    },
    {
      year: t("May"),
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
