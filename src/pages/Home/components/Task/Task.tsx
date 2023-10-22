import React, { useCallback, useState } from "react";
import { Grid } from "@mui/material";
import { message } from "antd";
import { fetchTasksData } from "../../../../utils/fetchData";
import { useTranslation } from "react-i18next";
import { DefaultStyles } from "../../../../utils/DefaultStyles/DefaultStyles";
import { useQueryMinutes } from "../../../../hooks/useQueryHooks";
import CheckBoxContainer from "./CheckBoxContainer/CheckBoxContainer";

const Task = () => {
  const { t } = useTranslation();

  const { data } = useQueryMinutes(
    fetchTasksData,
    "https://a527901c-49dd-464c-82f7-45b13cacafcc.mock.pstmn.io/adminPanel/Task",
    "task"
  );

  const [checkedTasks, setCheckedTasks] = useState<boolean[]>(
    Array(data?.length).fill(false)
  );
  const [messageApi, contextHolder] = message.useMessage();

  const handleCheckboxChange = useCallback(
    (index: number) => {
      const updatedCheckedTasks = [...checkedTasks];
      updatedCheckedTasks[index] = !updatedCheckedTasks[index];
      setCheckedTasks(updatedCheckedTasks);
    },
    [checkedTasks]
  );

  return (
    <Grid
      sx={{ marginTop: "10px" }}
      container
      spacing={{ xs: 1, sm: 1, md: 2 }}
      columnSpacing={2}
      rowSpacing={2}
    >
      {contextHolder}
      <Grid item xs={12} sm={8}>
        <div className={DefaultStyles.home.taskDiv}>
          <h2 className="text-3xl font-bold ">{t("TASK")}</h2>
          {data?.map((task, index) => (
            <CheckBoxContainer
              index={index}
              handleCheckboxChange={handleCheckboxChange}
              checkedTasks={checkedTasks}
              messageApi={messageApi}
              task={task}
            />
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default Task;
