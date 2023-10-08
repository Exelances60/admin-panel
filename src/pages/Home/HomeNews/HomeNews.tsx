import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TimeLineComponet from "../TimeLine/TimeLine";
import DemoLine from "../BasicLinePlot/BasicLinePlot";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "40vh",
  color: theme.palette.text.secondary,
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  height: "30vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.text.secondary,

  [theme.breakpoints.down("sm")]: {
    height: "45vh",
  },
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
        <Grid item xs={12} sm={6}>
          <Item>
            <DemoLine />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item2>
            <TimeLineComponet />
          </Item2>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeNews;
