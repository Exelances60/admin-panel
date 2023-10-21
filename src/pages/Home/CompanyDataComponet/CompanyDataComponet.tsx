import React, { FC, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchCompanyData } from "../../../utils/fetchData";
import { companyData } from "../../../store/ComponyData/CompanyReducer";
import { Skeleton } from "antd";
import { useTranslation } from "react-i18next";
import { getIconComponent } from "../../../utils/Data/companyDataİmport/companyDataİmport";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "25vh",
  color: theme.palette.text.secondary,
}));

type CompanyDataComponetProps = {
  data?: companyData[];
};

const CompanyDataComponet: FC<CompanyDataComponetProps> = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const { data, isLoading } = useQuery<companyData[]>(
    ["companyData"],
    () =>
      fetchCompanyData(
        "https://ad3a6df6-8c9f-49e5-ae35-a460acbb0944.mock.pstmn.io/adminCompanyData"
      ),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );
  useEffect(() => {
    if (isLoading) {
      queryClient.invalidateQueries(["companyData"]);
    }
  }, [queryClient, isLoading]);

  return (
    <>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <Grid container spacing={{ xs: 1, sm: 2, md: 2 }} rowSpacing={2}>
          {data?.map((item, index) => {
            return (
              <Grid item xs={6} md={3} lg={3} key={index}>
                <Item
                  className={`flex flex-col items-center justify-center `}
                  style={{
                    backgroundColor: item.color,
                    borderRadius: "20px",
                  }}
                >
                  {getIconComponent(item.component)}
                  <Typography variant="h4" className="text-2xl  font-bold">
                    {item.count}
                  </Typography>
                  <Typography className="text-sm">{t(item.name)}</Typography>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default CompanyDataComponet;
