import React, { Dispatch, FC, SetStateAction } from "react";
import Stack from "@mui/material/Stack";

import { useNavigate } from "react-router";
import { menuData } from "../../../../routes/routes";

type MenuComponetProps = {
  setOpen?: Dispatch<SetStateAction<Boolean>>;
};

const MenuComponet: FC<MenuComponetProps> = () => {
  const navigate = useNavigate();
  return (
    <>
      <Stack direction={"column"} spacing={2} className="mt-10 ">
        {menuData.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                navigate(item.path);
              }}
              className="w-[300px] h-[5vh] flex items-center pl-5 box-border rounded-lg  hover:bg-[#f6f7f8] cursor-pointer ease-in duration-200 "
            >
              <p>
                {<item.componet className="mb-1" />} {item.name}
              </p>
            </div>
          );
        })}
      </Stack>
    </>
  );
};

export default MenuComponet;
