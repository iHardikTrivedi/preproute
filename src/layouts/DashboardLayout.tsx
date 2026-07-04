import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const DashboardLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Header />

      <Box
        sx={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
        }}
      >
        <Sidebar />

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Content>
            <Outlet />
          </Content>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
