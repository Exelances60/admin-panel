import { Input, Modal } from "antd";
import React, { FC, useState } from "react";
import { DataType } from "../../../../../utils/Data/Data";
import { inputFields } from "../../../../../utils/Data/companyDataİmport/companyDataİmport";

type ShowEditModalProps = {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
  selectedItem: DataType | null;
};

const ShowEditModal: FC<ShowEditModalProps> = ({
  isModalVisible,
  setIsModalVisible,
  setData,
  selectedItem,
}) => {
  const [formFields, setFormFields] = useState<DataType>({
    key: "31",
    name: "",
    age: 0,
    address: "",
    position: "",
    tags: selectedItem?.tags || ["Cool"],
    avatar:
      selectedItem?.avatar ||
      "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={() => {
          setData((prevData) => {
            return prevData.map((dataItem) => {
              return dataItem.key === selectedItem?.key ? formFields : dataItem;
            });
          });
          setIsModalVisible(false);
        }}
        okButtonProps={{ className: "bg-blue-500 border-none" }}
      >
        {inputFields.map((inputField) => (
          <Input
            key={inputField.name}
            placeholder={inputField.placeholder}
            name={inputField.name}
            value={formFields[inputField.name]}
            onChange={handleInputChange}
            prefix={inputField.prefix}
            type={inputField.type}
          />
        ))}
      </Modal>
    </>
  );
};

export default ShowEditModal;
