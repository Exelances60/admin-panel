import * as React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Avatars from "../../../../components/Avatar/Avatar";

const AvatarComponet = () => {
  return (
    <>
      <div className="bg-[#edeff1] w-full h-[8vh] mt-10 rounded-lg flex p-5 box-border justify-evenly">
        <Stack
          direction="row"
          spacing={2}
          className="flex items-center justify-center"
        >
          <Avatars />
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
