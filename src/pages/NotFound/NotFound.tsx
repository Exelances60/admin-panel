import React from "react";
import { Result, Button } from "antd";
import withSearchHeader from "../../utils/WrapperWithSearchHeader/withSearchHeader";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle={t("PAGE_NOT_FOUND")}
        extra={
          <Button
            type="default"
            onClick={() => {
              navigate("/Home");
            }}
          >
            Back Home
          </Button>
        }
      />
    </>
  );
};

export default withSearchHeader(NotFound);
