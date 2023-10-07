import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BarChart from "../../pages/Home/BarChart/BarChart";
import { FC } from "react";
import LineCharts from "../LineCharts/LineCharts";
import DonutCharts from "../DonutChats/DonutCharts";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "100%",
  color: theme.palette.text.secondary,
}));
type Datasets = {
  label: string;
  data: Array<number>;
  borderWidth: number;
};

type Props = {
  chartData: {
    labels: Array<number>;
    datasets: Datasets[];
  };
};
const Charts: FC<Props> = ({ chartData }) => {
  return (
    <>
      <Grid
        sx={{ marginTop: "10px" }}
        container
        spacing={{ xs: 1, sm: 1, md: 2 }}
        rowSpacing={2}
      >
        <Grid item xs={12} sm={6}>
          <Item>
            <BarChart chartData={chartData} />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item>
            <LineCharts />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item>
            <BarChart chartData={chartData} />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item>
            <DonutCharts />
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Charts;
