import React, { useEffect, useState } from "react";
import CompanyDataComponet from "./CompanyDataComponet/CompanyDataComponet";
import Charts from "../../components/Charts/Charts";
import { useQuery } from "@tanstack/react-query";
import { fetchChartsData } from "../../utils/fetchData";
import { Skeleton } from "antd";
import HomeNews from "./HomeNews/HomeNews";
import Task from "./Task/Task";
import withSearchHeader from "../../utils/WrapperWithSearchHeader/withSearchHeader";
import { useTranslation } from "react-i18next";

type Datasets = {
  label: string;
  data: Array<number>;
  borderWidth: number;
};

const Home = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useQuery(
    ["Chartsdata"],
    () =>
      fetchChartsData(
        "https://e8cdaa21-e4f2-4003-b87b-34e779d24ef6.mock.pstmn.io/adminPanel/ChartsData"
      ),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  const [chartData, setChartData] = useState<{
    labels: number[];
    datasets: Datasets[];
  }>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (data) {
      setChartData({
        labels: data.map((label) => label.year),
        datasets: [
          {
            label: t("CompanyData"),
            data: data.map((data) => data.userGain),
            borderWidth: 1,
          },
        ],
      });
    }
  }, [data]);

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
