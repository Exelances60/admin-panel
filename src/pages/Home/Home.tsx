import React, { useEffect, useState } from "react";
import Charts from "../../components/Charts/Charts";
import { fetchChartsData } from "../../utils/fetchData";
import { Skeleton } from "antd";
import withSearchHeader from "../../utils/WrapperWithSearchHeader/withSearchHeader";
import { useTranslation } from "react-i18next";
import CompanyDataComponet from "./components/CompanyDataComponet/CompanyDataComponet";
import HomeNews from "./components/HomeNews/HomeNews";
import Task from "./components/Task/Task";
import { useQueryInfinity } from "../../hooks/useQueryHooks";

const Home = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useQueryInfinity(
    fetchChartsData,
    "https://2f6c2ab6-25ac-4d2b-916c-1214668e4b8f.mock.pstmn.io/adminPanal/Charts",
    "Chartsdata"
  );

  const chartData = {
    labels: data?.map((label) => label.year) || [],
    datasets: [
      {
        label: t("CompanyData"),
        data: data?.map((data) => data.userGain) || [],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <>
          <CompanyDataComponet />
          <Charts chartData={chartData} />
          <HomeNews />
          <Task />
        </>
      )}
    </>
  );
};

export default withSearchHeader(Home);
