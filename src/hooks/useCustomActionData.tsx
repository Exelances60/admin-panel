import React from "react";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import BlogCardDropDown from "../pages/Blog/BlogCard/BlogCardDropDown/BlogCardDropDown";

export const actionDataFuction = (items: MenuProps["items"]) => {
  const actions = [
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <BlogCardDropDown items={items}>
      <EllipsisOutlined key="ellipsis" />
    </BlogCardDropDown>,
  ];
  return actions;
};
