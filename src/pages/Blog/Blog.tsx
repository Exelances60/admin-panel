import React from "react";
import withSearchHeader from "../../utils/WrapperWithSearchHeader/withSearchHeader";
import { useQuery } from "@tanstack/react-query";
import { fetchGetBlogData } from "../../utils/fetchData";
import { Skeleton } from "antd";
import BlogContainer from "./BlogContainer/BlogContainer";

const Blog = () => {
  const { data, isLoading } = useQuery(
    ["blog"],
    () =>
      fetchGetBlogData(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8d86040c5b1d451ba67fce1d43616d12"
      ),
    {
      refetchOnWindowFocus: false,
      staleTime: 5000,
      cacheTime: 5000,
    }
  );
  if (isLoading && !data) {
    return (
      <div className="w-full h-full ">
        <Skeleton active></Skeleton>
      </div>
    );
  }

  const { articles } = data || {};

  return (
    <>
      <BlogContainer articles={articles} />
    </>
  );
};

export default withSearchHeader(Blog);
