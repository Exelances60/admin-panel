import React from "react";
import withSearchHeader from "../../utils/WrapperWithSearchHeader/withSearchHeader";
import { fetchGetProduct } from "../../utils/fetchData";
import ProductGrid from "./ProductGrid/ProductGrid";
import { useQueryInfinity } from "../../hooks/useQueryHooks";

const Product = () => {
  const { data } = useQueryInfinity(
    fetchGetProduct,
    "https://fakestoreapi.com/products",
    "getProducts"
  );

  return (
    <>
      <ProductGrid data={data} />
    </>
  );
};

export default withSearchHeader(Product);
