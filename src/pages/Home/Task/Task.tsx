import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Checkbox } from "antd";
import { message } from "antd";
import { useQuery } from "@tanstack/react-query";
import { fetchTasksData } from "../../../utils/fetchData";
import { useTranslation } from "react-i18next";

const Task = () => {
  const { t } = useTranslation();
  const { data } = useQuery(
    ["task"],
    () =>
      fetchTasksData(
        "https://6f970cd2-f70c-42c1-90b8-d206baeea5a8.mock.pstmn.io/taskData"
      ),
    {
      refetchOnWindowFocus: true,
      staleTime: 5000,
    }
  );

  const [checkedTasks, setCheckedTasks] = useState<boolean[]>(
    Array(data?.length).fill(false)
  );
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: t("TASK_SUCCESS"),
    });
  };

  const handleCheckboxChange = (index: number) => {
    const updatedCheckedTasks = [...checkedTasks];
    updatedCheckedTasks[index] = !updatedCheckedTasks[index];
    setCheckedTasks(updatedCheckedTasks);
  };

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
        <div className="w-full h-[30vh] mb-5 bg-white rounded-sm flex flex-col p-5 box-border shadow-md">
          <h2 className="text-3xl font-bold ">Tasks</h2>
          {data?.map((task, index) => (
            <Checkbox
              key={index}
              className={`w-[100%] h-[30%] text-2xl flex items-center p-5 `}
              onChange={() => {
                handleCheckboxChange(index);
                if (checkedTasks[index] === false) {
                  success();
                }
              }}
            >
              <p className={`${checkedTasks[index] ? "line-through" : ""}`}>
                {t(task)}
              </p>
            </Checkbox>
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default Task;
