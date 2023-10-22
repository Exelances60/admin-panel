import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { FC } from "react";
import LineCharts from "../LineCharts/LineCharts";
import DonutCharts from "../DonutChats/DonutCharts";
import BarChart from "../../pages/Home/components/BarChart/BarChart";
import { Datasets } from "../../types/FetchDataTypes/FetchDataTypes";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "100%",
  color: theme.palette.text.secondary,
}));

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
        <Item>{Component}</Item>
      </Grid>
    ))}
  </Grid>
);

export default Chart;
