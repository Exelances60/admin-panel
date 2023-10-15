import React, { useState } from "react";
import { Space, Table, Tag, Modal, message } from "antd";
import { ColumnsType } from "antd/es/table";
import { DataType, TableData } from "../../../../utils/Data/Data";
import i18next from "i18next";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { success } from "../../../../utils/DefaultStyles/DefaultStyles";
import ShowEditModal from "./ShowEditModal/ShowEditModal";

const { confirm } = Modal;

const UserTable = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [data, setData] = useState<DataType[]>(TableData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DataType | null>(null);

  const renderTags = (tags: string[]) => {
    return tags.map((tag: string) => (
      <Tag color={tag.length > 5 ? "geekblue" : "green"} key={tag}>
        {i18next.t(tag.toUpperCase())}
      </Tag>
    ));
  };

  const deleteItem = (item: DataType) => {
    const updatedData = data.filter((dataItem) => dataItem.key !== item.key);
    setData(updatedData);
    success(messageApi, "DELETE_SUCCESS");
  };

  const showDeleteConfirm = (item: DataType) => {
    confirm({
      title: "Do you want to delete these items?",
      icon: <ExclamationCircleFilled />,
      content:
        "When clicked the OK button, this dialog will be closed after 1 second",
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        })
          .then(() => deleteItem(item))
          .catch(() => console.error("Oops, an error occurred!"));
      },
      onCancel() {},
      okButtonProps: {
        className: "bg-red-500 border-none",
      },
    });
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Space>
          <img
            src={record.avatar}
            alt={text}
            style={{ width: "35px", height: "35px", borderRadius: "50%" }}
          />
          <a>{text}</a>
        </Space>
      ),
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
      render: (_, { tags }) => renderTags(tags),
    },
    {
      title: "Action",
      key: "action",
      render: (item) => (
        <Space size="middle">
          <p
            className="cursor-pointer"
            onClick={() => {
              setSelectedItem(item);
              setIsModalVisible(true);
            }}
          >
            {i18next.t("EDİT")}
          </p>
          <p className="cursor-pointer" onClick={() => showDeleteConfirm(item)}>
            {i18next.t("DELETE")}
          </p>
        </Space>
      ),
    },
  ];

  return (
    <div className="w-full h-[70%] p-10">
      {contextHolder}
      <ShowEditModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        setData={setData}
        selectedItem={selectedItem}
      />
      <Table
        className="w-full shadow-lg rounded-lg p-2"
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 5,
        }}
      />
    </div>
  );
};

export default UserTable;
