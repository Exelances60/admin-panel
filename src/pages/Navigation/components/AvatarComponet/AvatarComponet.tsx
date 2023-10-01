import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import DEFAULTPHOTO from "../../../../assets/avatar_default.jpg";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const AvatarComponet = () => {
  return (
    <>
      <div className="bg-[#edeff1] w-full h-[8vh] mt-10 rounded-lg flex p-5 box-border justify-evenly">
        <Stack
          direction="row"
          spacing={2}
          className="flex items-center justify-center"
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src={DEFAULTPHOTO} />
          </StyledBadge>
          <Typography
            variant="body1"
            component="h2"
            sx={{
              color: "#000000",
              fontSize: "1.2rem",
            }}
          >
            Remy Sharp
          </Typography>
        </Stack>
      </div>
    </>
  );
};

export default AvatarComponet;
