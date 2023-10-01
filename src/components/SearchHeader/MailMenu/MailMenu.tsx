import * as React from "react";
import Menu from "@mui/material/Menu";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MailIcon from "@mui/icons-material/Mail";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

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
        <StyledBadge badgeContent={3} color="secondary">
          <MailIcon color="action" />
        </StyledBadge>
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
