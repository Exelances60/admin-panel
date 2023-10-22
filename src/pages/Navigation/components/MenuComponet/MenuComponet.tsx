import React, { Dispatch, FC, SetStateAction } from "react";
import Stack from "@mui/material/Stack";
import { menuData } from "../../../../routes/routes";
import MenuItemsContainer from "./MenuItemsContainer/MenuItemsContainer";

type MenuComponetProps = {
  setOpen?: Dispatch<SetStateAction<Boolean>>;
};

const MenuComponet: FC<MenuComponetProps> = () => {
  return (
    <>
      <Stack direction={"column"} spacing={2} className="mt-10 ">
        {menuData.map((item, index) => {
          return <MenuItemsContainer index={index} item={item} />;
        })}
      </Stack>
    </>
  );
};

export default MenuComponet;
