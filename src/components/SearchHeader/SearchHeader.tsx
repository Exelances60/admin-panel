import React from "react";
import { Box } from "@mui/material";
import SearchHeaderAvatar from "./SearchHeaderAvatar/SearchHeaderAvatar";
import SearchBar from "./SearchBar/SearchBar";

const SearchHeader = () => {
  return (
    <div className="w-full h-[10%] flex px-5 box-border justify-around ">
      <Box className="w-[50%] h-[100%] flex items-center">
        <SearchBar />
      </Box>
      <Box className="w-[50%] h-[100%] flex justify-end items-center">
        <SearchHeaderAvatar />
      </Box>
    </div>
  );
};

export default SearchHeader;
