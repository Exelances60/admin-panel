import React, { useState } from "react";
import { Outlet } from "react-router";
import LeftOpenMenu from "./components/LeftOpenMenu/LeftOpenMenu";

const Navigation = () => {
  const [open, setOpen] = useState<Boolean>(false);

  return (
    <div
      className={`flex w-[100%] h-[100vh] ease-in duration-300 delay-75  ${
        open ? "bg-black bg-opacity-80" : null
      }`}
    >
      <LeftOpenMenu setOpen={setOpen} open={open}></LeftOpenMenu>
      <div className={`w-full h-[100vh] ease-in duration-300 delay-75`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
