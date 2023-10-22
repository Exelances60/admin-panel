import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MailIcon from "@mui/icons-material/Mail";
import { StyledBadgeMailMenu } from "../../../utils/DefaultStyles/DefaultStyles";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="cart"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <StyledBadgeMailMenu badgeContent={3} color="secondary">
          <MailIcon color="action" />
        </StyledBadgeMailMenu>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem className="w-[200px]" onClick={handleClose}>
          <p> 🎆Lorem ipsum</p>
        </MenuItem>
        <MenuItem className="w-[200px]" onClick={handleClose}>
          <p>🎆Lorem ipsum</p>
        </MenuItem>
        <MenuItem className="w-[200px]" onClick={handleClose}>
          <p> 🎆Lorem ipsum</p>
        </MenuItem>
      </Menu>
    </>
  );
}
