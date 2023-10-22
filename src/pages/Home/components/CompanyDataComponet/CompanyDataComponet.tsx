import React, { FC } from "react";
import CompanyGridContainer from "./CompanyGridContainer/CompanyGridContainer";
import Grid from "@mui/material/Grid";
import { Skeleton } from "antd";
import { companyData } from "../../../../types/FetchDataTypes/FetchDataTypes";
import { fetchCompanyData } from "../../../../utils/fetchData";
import { useQueryInfinity } from "../../../../hooks/useQueryHooks";

type CompanyDataComponetProps = {
  data?: companyData[];
};

const CompanyDataComponet: FC<CompanyDataComponetProps> = () => {
  const { data, isLoading } = useQueryInfinity<companyData[]>(
    fetchCompanyData,
    "https://cfaa85b2-5916-4671-b381-e858bd1354e4.mock.pstmn.io/adminCompanyData",
    "companyData"
  );

  return (
    <>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <Grid container spacing={{ xs: 1, sm: 2, md: 2 }} rowSpacing={2}>
          {data?.map((item, index) => {
            return <CompanyGridContainer index={index} item={item} />;
          })}
        </Grid>
      )}
    </>
  );
};

export default CompanyDataComponet;
