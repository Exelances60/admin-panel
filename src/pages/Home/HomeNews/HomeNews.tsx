import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TimeLineComponet from "../TimeLine/TimeLine";
import LineCharts from "../../../components/LineCharts/LineCharts";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "40vh",
  color: theme.palette.text.secondary,
}));

const HomeNews = () => {
  return (
    <>
      <Grid
        sx={{ marginTop: "10px" }}
        container
        spacing={{ xs: 1, sm: 1, md: 2 }}
        rowSpacing={2}
      >
        <Grid item xs={13} sm={6}>
          <Item>
            <LineCharts />
          </Item>
        </Grid>
        <Grid item xs={13} sm={6}>
          <Item>
            <TimeLineComponet />
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeNews;
