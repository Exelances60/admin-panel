import * as React from "react";
import Grid from "@mui/material/Grid";
import TimeLineComponet from "../TimeLine/TimeLine";
import DemoLine from "../BasicLinePlot/BasicLinePlot";
import {
  Item2HomeNews,
  ItemHomeNews,
} from "../../../../utils/DefaultStyles/DefaultStyles";

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
          <ItemHomeNews>
            <DemoLine />
          </ItemHomeNews>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item2HomeNews>
            <TimeLineComponet />
          </Item2HomeNews>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeNews;
