import type { PropsWithChildren } from "react";

import { Box } from "@mui/material";

import { LAYOUT } from "../constants";

const Content = ({ children }: PropsWithChildren) => {
  return (
    <Box
      component="main"
      sx={{
        flex: 1,

        overflow: "auto",

        bgcolor: "background.default",

        p: LAYOUT.CONTENT_PADDING,
      }}
    >
      {children}
    </Box>
  );
};

export default Content;
