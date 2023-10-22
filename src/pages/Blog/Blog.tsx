import React from "react";
import withSearchHeader from "../../utils/WrapperWithSearchHeader/withSearchHeader";
import { useQueryMinutes } from "../../hooks/useQueryHooks";
import BlogContainer from "./BlogContainer/BlogContainer";
import { Skeleton } from "antd";
import { fetchGetBlogData } from "../../utils/fetchData";

const Blog = () => {
  const { data, isLoading } = useQueryMinutes(
    fetchGetBlogData,
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8d86040c5b1d451ba67fce1d43616d12",
    "blog"
  );

  return (
    <>
      {isLoading && !data ? (
        <Skeleton active />
      ) : (
        <BlogContainer articles={data?.articles || []} />
      )}
    </>
  );
};

export default withSearchHeader(Blog);
