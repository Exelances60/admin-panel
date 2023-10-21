import React from "react";
import withSearchHeader from "../../utils/WrapperWithSearchHeader/withSearchHeader";
import { useQuery } from "@tanstack/react-query";
import { fetchGetProduct } from "../../utils/fetchData";
import ProductGrid from "./ProductGrid/ProductGrid";

const Product = () => {
  const { data } = useQuery(
    ["getProducts"],
    () => fetchGetProduct("https://fakestoreapi.com/products"),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );
  return (
    <>
      <ProductGrid data={data} />
    </>
  );
};

export default withSearchHeader(Product);
