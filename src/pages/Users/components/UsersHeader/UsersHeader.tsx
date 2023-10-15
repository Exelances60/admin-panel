import React from "react";
import { useTranslation } from "react-i18next";

const UsersHeader = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-[10vh] flex items-center justify-between box-border p-5">
      <h1 className="text-2xl font-bold">{t("USERS")}</h1>
    </div>
  );
};

export default UsersHeader;