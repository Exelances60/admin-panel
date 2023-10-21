import React, { FC } from "react";
import { articlesType } from "../../../utils/fetchData";
import BlogCard from "../BlogCard/BlogCard";
import { Grid } from "@mui/material";

type BlogContainerProps = {
  articles?: articlesType[];
};

const BlogContainer: FC<BlogContainerProps> = ({ articles }) => {
  return (
    <div className="w-full  ">
      <Grid container spacing={1}>
        {articles?.map((article: articlesType, i: number) => {
          if (i < 20) {
            return (
              <Grid item xs={8} sm={4} md={4} lg={2}>
                <BlogCard article={article} />
              </Grid>
            );
          }
        })}
      </Grid>
    </div>
  );
};

export default BlogContainer;
