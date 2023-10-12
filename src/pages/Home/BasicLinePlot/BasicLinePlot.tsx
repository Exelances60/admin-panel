import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/charts";
import { useTranslation } from "react-i18next";

const DemoLine = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    padding: [10, 20, 30, 40],
    xField: t("Date"),
    yField: t("scales"),
    xAxis: {
      tickCount: 5,
    },
  };

  return <Line {...config} />;
};

export default DemoLine;
