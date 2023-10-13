import React from "react";
import { Space, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { DataType, TableData } from "../../../../utils/Data/Data";
import i18next from "i18next";

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => {
      return (
        <Space>
          <img
            src={record.avatar}
            alt={text}
            style={{ width: "35px", height: "35px", borderRadius: "50%" }}
          />
          <a>{text}</a>
        </Space>
      );
    },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => {
      return (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {i18next.t(tag.toUpperCase())}
              </Tag>
            );
          })}
        </>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>{i18next.t("EDİT")}</a>
        <a>{i18next.t("DELETE")}</a>
      </Space>
    ),
  },
];

const UserTable = () => {
  return (
    <div className="w-full h-[70%] p-10">
      <Table
        className="w-full shadow-lg rounded-lg p-2"
        columns={columns}
        dataSource={TableData}
        pagination={{
          pageSize: 5,
        }}
      />
    </div>
  );
};

export default UserTable;
