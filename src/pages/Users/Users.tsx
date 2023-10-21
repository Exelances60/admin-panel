import React, { FC } from "react";
import withSearchHeader from "../../utils/WrapperWithSearchHeader/withSearchHeader";
import UsersHeader from "./components/UsersHeader/UsersHeader";
import UserTable from "./components/Table/Table";
import { useQueryClient } from "@tanstack/react-query";

const Users: FC = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(["companyData"]);
  return (
    <>
      <UsersHeader />
      <UserTable />
    </>
  );
};

export default withSearchHeader(Users);
