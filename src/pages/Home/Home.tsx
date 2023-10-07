import React, { useEffect, useState } from "react";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import CompanyDataComponet from "./CompanyDataComponet/CompanyDataComponet";
import { FloatButton } from "antd";
import Charts from "../../components/Charts/Charts";
import { useQuery } from "@tanstack/react-query";
import { fetchChartsData } from "../../utils/fetchData";
import { Skeleton } from "antd";
import HomeNews from "./HomeNews/HomeNews";

type Datasets = {
  label: string;
  data: Array<number>;
  borderWidth: number;
};

const Home = () => {
  const { data, isLoading } = useQuery(
    ["Chartsdata"],
    () =>
      fetchChartsData(
        "https://49e637ff-67fb-444c-b176-f958a6ee9377.mock.pstmn.io/chartdata/admin"
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
            label: "Company Data",
            data: data.map((data) => data.userGain),
            borderWidth: 1,
          },
        ],
      });
    }
  }, [data]);

  return (
    <div className="w-full h-full p-3 box-border -z-20 ">
      {isLoading ? (
        <Skeleton active />
      ) : (
        <>
          <SearchHeader />
          <CompanyDataComponet />
          <Charts chartData={chartData} />
          <HomeNews />
          <FloatButton.BackTop />
        </>
      )}
    </div>
  );
};

export default Home;
