import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AppleIcon from "@mui/icons-material/Apple";
import AdbIcon from "@mui/icons-material/Adb";
import WindowIcon from "@mui/icons-material/Window";
import BugReportIcon from "@mui/icons-material/BugReport";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "25vh",
  color: theme.palette.text.secondary,
}));

const data = [
  {
    count: "714k",
    name: "Weekly Sales",
    componet: AppleIcon,
    color: "#d1e9fc",
  },
  {
    count: "1.8m",
    name: "Total Sales",
    componet: AdbIcon,
    color: "#d0f2ff",
  },
  {
    count: "2.1k",
    name: "Avg. Sales",
    componet: WindowIcon,
    color: "#fff7cd",
  },
  {
    count: "1.2k",
    name: "Total Users",
    componet: BugReportIcon,
    color: "#ffe7d9",
  },
];

const CompanyDataComponet = () => {
  return (
    <>
      <Grid container spacing={{ xs: 1, sm: 2, md: 2 }} rowSpacing={2}>
        {data.map((item, index) => {
          return (
            <Grid item xs={6} md={3} lg={3} key={index}>
              <Item
                className={`flex flex-col items-center justify-center `}
                style={{
                  backgroundColor: item.color,
                  borderRadius: "20px",
                }}
              >
                {<item.componet fontSize="large" />}
                <Typography variant="h4" className="text-2xl  font-bold">
                  {item.count}
                </Typography>
                <Typography className="text-sm">{item.name}</Typography>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default CompanyDataComponet;
