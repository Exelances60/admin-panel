import { Space } from "antd";
import i18next from "i18next";
import React, { FC } from "react";
import { DataType } from "../../../../../utils/Data/Data";

type CollumActionRenderProps = {
  setSelectedItem: React.Dispatch<React.SetStateAction<DataType | null>>;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  showDeleteConfirm: (item: DataType) => void;
  item: DataType;
};

const CollumActionRender: FC<CollumActionRenderProps> = ({
  setSelectedItem,
  setIsModalVisible,
  showDeleteConfirm,
  item,
}) => {
  return (
    <>
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
    </>
  );
};

export default CollumActionRender;
