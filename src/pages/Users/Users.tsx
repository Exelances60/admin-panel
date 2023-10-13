import React, { FC } from "react";
import withSearchHeader from "../../utils/WrapperWithSearchHeader/withSearchHeader";
import UsersHeader from "./components/UsersHeader/UsersHeader";
import UserTable from "./components/Table/Table";

const Users: FC = () => {
  return (
    <>
      <UsersHeader />
      <UserTable />
    </>
  );
};

export default withSearchHeader(Users);
