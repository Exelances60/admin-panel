import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, MenuProps } from "antd";
import { useTranslation } from "react-i18next";
import BlogCardDropDown from "./BlogCardDropDown/BlogCardDropDown";
import { articlesType } from "../../../types/FetchDataTypes/FetchDataTypes";

const { Meta } = Card;
type BlogCardProps = {
  article: articlesType;
};

const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  const { t } = useTranslation();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href={article.url}>
          {t("GO_TO_BLOG")}
        </a>
      ),
    },
  ];

  const actions = [
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <BlogCardDropDown items={items}>
      <EllipsisOutlined key="ellipsis" />
    </BlogCardDropDown>,
  ];

  return (
    <>
      <Card
        style={{ width: 280, height: 420, marginTop: 10, marginBottom: 40 }}
        cover={
          <img
            alt="example"
            className="h-40 w-full object-cover"
            src={article.urlToImage || "https://picsum.photos/200/300"}
          />
        }
        actions={actions}
      >
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
          }
          title={article.title}
          description={
            <>
              <p className="product-description overflow-hidden text-ellipsis max-h-28">
                {article.content}
              </p>
              <p className="mt-2">
                <span className="text-xs text-gray-400">{t("AUTHOR")} </span>
                <span className="text-xs text-gray-600">{article.author}</span>
                <span className="text-xs text-gray-400 ml-2">{t("DATE")} </span>
                <span className="text-xs text-gray-600">
                  {article.publishedAt}
                </span>
              </p>
            </>
          }
        />
      </Card>
    </>
  );
};

export default BlogCard;
