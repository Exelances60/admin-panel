import { Space } from "antd";
import React, { FC } from "react";

type CollumNameRenderProps = {
  text: string;
  record: {
    avatar: string;
  };
};

const CollumNameRender: FC<CollumNameRenderProps> = ({ text, record }) => {
  return (
    <>
      <Space>
        <img
          src={record.avatar}
          alt={text}
          style={{ width: "35px", height: "35px", borderRadius: "50%" }}
        />
        <a>{text}</a>
      </Space>
    </>
  );
};

export default CollumNameRender;
