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
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Sidebar />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />

        <Content>
          <Outlet />
        </Content>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
