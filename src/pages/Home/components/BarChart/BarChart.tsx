import React from "react";
import { ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";
import { FC } from "react";
import { Chart, registerables } from "chart.js";
import { Datasets } from "../../../../types/FetchDataTypes/FetchDataTypes";
Chart.register(...registerables);

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

  return (
    <div className="w-full h-[100%]">
      <Bar data={chartData} options={option} />
    </div>
  );
};

export default BarChart;
