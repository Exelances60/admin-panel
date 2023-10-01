import React from "react";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import CompanyDataComponet from "./CompanyDataComponet/CompanyDataComponet";

const Home = () => {
  return (
    <div className="w-full h-full p-3 box-border -z-20 ">
      <SearchHeader />
      <CompanyDataComponet />
    </div>
  );
};

export default Home;
