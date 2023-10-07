// companyDataImport.tsx

import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import AdbIcon from "@mui/icons-material/Adb";
import WindowIcon from "@mui/icons-material/Window";
import BugReportIcon from "@mui/icons-material/BugReport";

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
