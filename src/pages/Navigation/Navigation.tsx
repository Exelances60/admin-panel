import React from "react";
import { Outlet } from "react-router";
import LeftDrawer from "./components/LeftDrawer/LeftDrawer";

const Navigation = () => {
  return (
    <div
      className={`flex w-[100%] h-[100vh] ease-in duration-300 delay-75 z-40`}
    >
      <LeftDrawer></LeftDrawer>
      <div className={`w-full h-[100vh] ease-in duration-300 delay-75`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
