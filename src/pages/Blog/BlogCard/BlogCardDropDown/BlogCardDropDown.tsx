import { Dropdown, MenuProps } from "antd";
import React from "react";

type BlogCardDropDownProps = {
  children: React.ReactNode;
  items: MenuProps["items"];
};

const BlogCardDropDown: React.FC<BlogCardDropDownProps> = ({
  children,
  items,
}) => {
  return (
    <>
      <Dropdown menu={{ items }}>{children}</Dropdown>
    </>
  );
};

export default BlogCardDropDown;
