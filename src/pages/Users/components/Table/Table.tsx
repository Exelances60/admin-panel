import React, { useEffect, useState } from "react";
import { Table, Tag, Modal, message } from "antd";
import { ColumnsType } from "antd/es/table";
import { DataType } from "../../../../utils/Data/Data";
import i18next from "i18next";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { success } from "../../../../utils/DefaultStyles/DefaultStyles";
import ShowEditModal from "./ShowEditModal/ShowEditModal";
import CollumActionRender from "./CollumActionRender/CollumActionRender";
import CollumNameRender from "./CollumNameRender/CollumNameRender";
import { getAllUsers } from "../../../../utils/Firebase/FireBase";

const { confirm } = Modal;

const UserTable = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [data, setData] = useState<DataType[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<DataType | null>(null);

  useEffect(() => {
    const getData = async () => {
      const response = await getAllUsers();
      setData(response);
    };
    getData();
  }, []);

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
      content: i18next.t("DELETE_CONFIRMATINO"),
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
        <CollumNameRender text={text} record={record} />
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
        <CollumActionRender
          item={item}
          showDeleteConfirm={showDeleteConfirm}
          setSelectedItem={setSelectedItem}
          setIsModalVisible={setIsModalVisible}
        />
      ),
    },
  ];

  return (
    <div className="md:w-full w-[100vh] h-[70%] p-10">
      {contextHolder}
      <ShowEditModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        setData={setData}
        selectedItem={selectedItem}
      />
      <Table
        className="md:w-full shadow-lg rounded-lg p-2"
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
