import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import AdbIcon from "@mui/icons-material/Adb";
import WindowIcon from "@mui/icons-material/Window";
import BugReportIcon from "@mui/icons-material/BugReport";
import { UserOutlined, HomeOutlined, CodeOutlined } from "@ant-design/icons";

export const getIconComponent = (component: string) => {
  switch (component) {
    case "AppleIcon":
      return <AppleIcon fontSize="large" />;
    case "AdbIcon":
      return <AdbIcon fontSize="large" />;
    case "WindowIcon":
      return <WindowIcon fontSize="large" />;
    case "BugReportIcon":
      return <BugReportIcon fontSize="large" />;
    default:
      return null;
  }
};

export const inputFields = [
  { name: "name", placeholder: "Name", prefix: <UserOutlined /> },
  {
    name: "age",
    placeholder: "Age",
    prefix: <UserOutlined />,
    type: "number",
  },
  { name: "address", placeholder: "Address", prefix: <HomeOutlined /> },
  { name: "position", placeholder: "Position", prefix: <CodeOutlined /> },
  { name: "avatar", placeholder: "Avatar", prefix: <UserOutlined /> },
];
