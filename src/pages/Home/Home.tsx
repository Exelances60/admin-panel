import React, { useState } from "react";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import CompanyDataComponet from "./CompanyDataComponet/CompanyDataComponet";
import { FloatButton } from "antd";
import { chartsData } from "../../utils/Data/Data";
import Charts from "../../components/Charts/Charts";

const Home = () => {
  const [chartData, setChartData] = useState({
    labels: chartsData.map((label) => label.year),
    datasets: [
      {
        label: "Company Data",
        data: chartsData.map((data) => data.userGain),
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="w-full h-full p-3 box-border -z-20 ">
      <SearchHeader />
      <CompanyDataComponet />
      <Charts chartData={chartData} />
      <FloatButton.BackTop />
    </div>
  );
};

export default Home;
