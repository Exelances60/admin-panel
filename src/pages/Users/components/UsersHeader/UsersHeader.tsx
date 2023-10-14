import React from "react";
import { useTranslation } from "react-i18next";

const UsersHeader = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-[10vh] flex items-center justify-between box-border p-5">
      <h1 className="text-2xl font-bold">{t("USERS")}</h1>
      <h1 className="text-xl bg-black h-[85%] flex items-center justify-center w-[20%] text-white rounded-xl cursor-pointer">
        {t("ADD_USER")}
      </h1>
    </div>
  );
};

export default UsersHeader;
