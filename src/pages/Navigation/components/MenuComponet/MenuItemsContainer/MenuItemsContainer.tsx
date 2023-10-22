import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { MenuDataTypes } from "../../../../../types/FetchDataTypes/FetchDataTypes";

type menuItemsContainer = {
  index: number;
  item: MenuDataTypes;
};

const MenuItemsContainer: FC<menuItemsContainer> = ({ index, item }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <div
        key={index}
        onClick={() => {
          navigate(item.path);
        }}
        className="w-[300px] h-[5vh] flex items-center pl-5 box-border rounded-lg  hover:bg-[#f6f7f8] cursor-pointer ease-in duration-200 "
      >
        <p>
          {<item.componet className="mb-1" />} {t(item.name)}
        </p>
      </div>
    </>
  );
};

export default MenuItemsContainer;
