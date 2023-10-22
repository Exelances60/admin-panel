import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { getIconComponent } from "../../../../../utils/Data/companyDataİmport/companyDataİmport";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { companyData } from "../../../../../types/FetchDataTypes/FetchDataTypes";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "25vh",
  color: theme.palette.text.secondary,
}));

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
    </>
  );
};

export default CompanyGridContainer;
