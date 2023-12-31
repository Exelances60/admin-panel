import React, { FC, useState } from "react";
import { Grid } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import ProductCart from "../ProductCart/ProductCart";
import { dataProps } from "../../../types/FetchDataTypes/FetchDataTypes";

type ProductGridProps = {
  data: dataProps[];
};

const ProductGrid: FC<ProductGridProps> = ({ data }) => {
  const [cart, setCart] = useState<dataProps[]>([]);
  return (
    <>
      <ProductCart cart={cart} />
      <Grid container spacing={2}>
        {data?.map((item) => {
          return (
            <Grid item xs={8} sm={4} md={4} lg={2}>
              <ProductCard key={item.id} item={item} setCart={setCart} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ProductGrid;
