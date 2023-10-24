import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Search from "antd/es/input/Search";

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SearchIcon
        className="cursor-pointer"
        onClick={() => {
          setOpen(!open);
        }}
      />
      {open ? (
        <Search placeholder="input search text" style={{ width: 200 }} />
      ) : null}
    </>
  );
};

export default SearchBar;
