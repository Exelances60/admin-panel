import i18next from "i18next";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Paper from "@mui/material/Paper";
import { BadgeProps } from "antd";

export const DefaultStyles = {
  layout: "w-full h-full p-3 box-border -z-20 ",
  home: {
    taskDiv:
      "w-full h-[30vh] mb-5 bg-white rounded-sm flex flex-col p-5 box-border shadow-md",
  },
  card: {
    cartButton:
      "fixed bottom-96 right-0 z-10 bg-white text-2xl text-center font-bold flex items-center justify-center rounded-full",
    cardComponet:
      "cursor-pointer hover:shadow-xl ease-in duration-200 shadow-md hover:-translate-y-1",
  },
  product: {
    priceP:
      "product-description overflow-hidden text-ellipsis max-h-12 font-bold text-black text-xl ",
  },
  users: {
    userHeader: {
      div: "w-full h-[10vh] flex items-center justify-between box-border p-5",
      h1: "text-2xl font-bold text-black",
    },
  },
};

export const success = (messageApi: any, msg: string) => {
  return messageApi.open({
    type: "success",
    content: i18next.t(msg),
  });
};

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export const ItemCharts = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "100%",
  color: theme.palette.text.secondary,
}));

export const ItemCompanyGridContainer = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "25vh",
  color: theme.palette.text.secondary,
}));

export const ItemHomeNews = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "40vh",
  color: theme.palette.text.secondary,
}));

export const Item2HomeNews = styled(Paper)(({ theme }) => ({
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

export const StyledBadgeMailMenu = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
