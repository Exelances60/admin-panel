import React from "react";
import { Select, Space } from "antd";
import { useTranslation } from "react-i18next";

const SelectLanguage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (value: string) => {
    const languageValue = value;
    i18n.changeLanguage(languageValue);
  };

  return (
    <Space wrap>
      <Select
        defaultValue="English"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: "en", label: "English" },
          { value: "tr", label: "Türkçe" },
        ]}
      />
    </Space>
  );
};

export default SelectLanguage;
