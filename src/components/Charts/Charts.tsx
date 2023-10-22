import * as React from "react";
import Grid from "@mui/material/Grid";
import { FC } from "react";
import LineCharts from "../LineCharts/LineCharts";
import DonutCharts from "../DonutChats/DonutCharts";
import BarChart from "../../pages/Home/components/BarChart/BarChart";
import { Datasets } from "../../types/FetchDataTypes/FetchDataTypes";
import { ItemCharts } from "../../utils/DefaultStyles/DefaultStyles";

type ChartProps = {
  chartData: {
    labels: number[];
    datasets: Datasets[];
  };
};

const Chart: FC<ChartProps> = ({ chartData }) => (
  <Grid
    sx={{ marginTop: "10px" }}
    container
    spacing={{ xs: 1, sm: 1, md: 2 }}
    rowSpacing={2}
  >
    {[
      <BarChart chartData={chartData} />,
      <LineCharts />,
      <BarChart chartData={chartData} />,
      <DonutCharts />,
    ].map((Component, index) => (
      <Grid key={index} item xs={12} sm={6}>
        <ItemCharts>{Component}</ItemCharts>
      </Grid>
    ))}
  </Grid>
);

export default Chart;
