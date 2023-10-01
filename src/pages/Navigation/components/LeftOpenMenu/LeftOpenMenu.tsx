import React, { FC } from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { Typography } from "@mui/material";
import AvatarComponet from "../AvatarComponet/AvatarComponet";
import MenuComponet from "../MenuComponet/MenuComponet";

type LeftOpenMenuProps = {
  open: Boolean;
  setOpen: React.Dispatch<React.SetStateAction<Boolean>>;
};

const LeftOpenMenu: FC<LeftOpenMenuProps> = ({ open, setOpen }) => {
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1050) {
      setOpen(false);
    }
  });
  return (
    <>
      <DragHandleIcon
        sx={{
          cursor: "pointer",
          fontSize: "2.5rem",
          alignItems: "center",
          justifyContent: "center",
          display: { xs: "flex", md: "flex", lg: "none" },
        }}
        onClick={() => {
          setOpen(!open);
        }}
        className="deneme"
      ></DragHandleIcon>
      <div
        className={`bg-[#ffffff] w-[80%] lg:w-[30%] xl:w-[20%]  md:w-[40%] ] flex flex-col ease-in duration-300 lg:flex lg:flex-col lg:z-50 absolute lg:relative ${
          open ? null : "left-[-100%]"
        } ${
          open ? null : "md:hidden"
        } md:left-[0%] h-[100%]  items-center box-border p-5 border-r-2 border-[#e0e4e8] border-dotted`}
        style={{
          animation: `${open ? "slideIn" : null} 0.4s ease-in-out `,
        }}
      >
        {open ? (
          <Typography
            variant="body1"
            component="h2"
            className="cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          >
            Close The Panel
          </Typography>
        ) : null}
        <AvatarComponet />
        <MenuComponet setOpen={setOpen} />
      </div>
    </>
  );
};

export default LeftOpenMenu;
