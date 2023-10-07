import React from "react";
import { ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";
import { FC } from "react";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
type Datasets = {
  label: string;
  data: Array<number>;
  borderWidth: number;
};

export type Props = {
  chartData: {
    labels: Array<number>;
    datasets: Datasets[];
  };
};

const BarChart: FC<Props> = ({ chartData }) => {
  const option: ChartOptions = {
    animation: {
      duration: 1000,
      easing: "easeInOutQuart",
    },
  };

  return <Bar data={chartData} options={option} />;
};

export default BarChart;
