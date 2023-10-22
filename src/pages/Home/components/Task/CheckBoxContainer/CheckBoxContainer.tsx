import { Checkbox } from "antd";
import React, { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { success } from "../../../../../utils/DefaultStyles/DefaultStyles";

type CheckBoxContainerProps = {
  handleCheckboxChange: (index: number) => void;
  checkedTasks: boolean[];
  task: string;
  messageApi: any;
  index: number;
};

const CheckBoxContainer: FC<CheckBoxContainerProps> = ({
  handleCheckboxChange,
  checkedTasks,
  task,
  index,
  messageApi,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Checkbox
        key={index}
        className={`w-[100%] h-[30%] text-2xl flex items-center p-5 `}
        onChange={() => {
          handleCheckboxChange(index);
          if (checkedTasks[index] === false) {
            success(messageApi, "TASK_SUCCESS");
          }
        }}
      >
        <p className={`${checkedTasks[index] ? "line-through" : ""}`}>
          {t(task)}
        </p>
      </Checkbox>
    </>
  );
};

export default memo(CheckBoxContainer);
