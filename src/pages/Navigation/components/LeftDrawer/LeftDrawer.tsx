import React, { useState } from "react";
import { Drawer } from "antd";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import AvatarComponet from "../AvatarComponet/AvatarComponet";
import MenuComponet from "../MenuComponet/MenuComponet";

const LeftDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DragHandleIcon
        sx={{
          cursor: "pointer",
          fontSize: "2.5rem",
          alignItems: "center",
          justifyContent: "center",

          mt: "2.3rem",
          ml: "1rem",
        }}
        onClick={showDrawer}
      ></DragHandleIcon>
      <Drawer
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"left"}
      >
        <AvatarComponet />
        <MenuComponet />
      </Drawer>
    </>
  );
};

export default LeftDrawer;
