import React from "react";
import { useTranslation } from "react-i18next";
import { DefaultStyles } from "../../../../utils/DefaultStyles/DefaultStyles";

const UsersHeader = () => {
  const { t } = useTranslation();
  return (
    <div className={DefaultStyles.users.userHeader.div}>
      <h1 className={DefaultStyles.users.userHeader.h1}>{t("USERS")}</h1>
    </div>
  );
};

export default UsersHeader;
