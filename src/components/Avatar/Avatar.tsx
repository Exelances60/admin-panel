import React from "react";
import DEFAULTPHOTO from "../../assets/Avatar/avatar_default.jpg";
import Avatar from "@mui/material/Avatar";
import { StyledBadge } from "../../utils/DefaultStyles/DefaultStyles";
const Avatars = () => {
  return (
    <>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src={DEFAULTPHOTO} />
      </StyledBadge>
    </>
  );
};

export default Avatars;
