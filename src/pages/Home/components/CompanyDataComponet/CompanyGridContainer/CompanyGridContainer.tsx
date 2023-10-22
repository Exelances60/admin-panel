import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { getIconComponent } from "../../../../../utils/Data/companyDataİmport/companyDataİmport";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { companyData } from "../../../../../types/FetchDataTypes/FetchDataTypes";
import { ItemCompanyGridContainer } from "../../../../../utils/DefaultStyles/DefaultStyles";

type CompanyGridContainerProps = {
  index: number;
  item: companyData;
};

const CompanyGridContainer: FC<CompanyGridContainerProps> = ({
  index,
  item,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Grid item xs={6} md={3} lg={3} key={index}>
        <ItemCompanyGridContainer
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
        </ItemCompanyGridContainer>
      </Grid>
    </>
  );
};

export default CompanyGridContainer;
