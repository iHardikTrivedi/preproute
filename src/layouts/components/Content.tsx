import type { PropsWithChildren } from "react";

import { Box } from "@mui/material";

const Content = ({ children }: PropsWithChildren) => {
  return (
    <Box
      component="main"
      sx={{
        flex: 1,

        display: "flex",
        flexDirection: "column",

        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );
};

export default Content;
