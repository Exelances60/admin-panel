import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { Fragment, useState, MouseEvent } from "react";
import Avatars from "../../Avatar/Avatar";
import AvatarMenu from "../AvatarMenu/AvatarMenu";
import MailMenu from "../MailMenu/MailMenu";
import SelectLanguage from "../SelectLanguage/SelectLanguage";

const SearchHeaderAvatar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Typography sx={{ minWidth: 100, cursor: "pointer" }}>
          <SelectLanguage />
        </Typography>
        <MailMenu />
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatars />
          </IconButton>
        </Tooltip>
      </Box>
      <AvatarMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
    </Fragment>
  );
};

export default SearchHeaderAvatar;
