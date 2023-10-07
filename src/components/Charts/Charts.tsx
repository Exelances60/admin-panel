import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BarChart from "../../pages/Home/BarChart/BarChart";
import { FC } from "react";
import LineCharts from "../LineCharts/LineCharts";

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
      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        <Grid item xs={8}>
          <Item>
            <BarChart chartData={chartData} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <LineCharts></LineCharts>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Charts;
