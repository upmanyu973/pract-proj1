import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Usermanagement from "./pannelComponents/userManagement";
import Dashboard from "./pannelComponents/dashboard";
import { Box, Toolbar, Typography } from "@mui/material";

const Pannel = (props) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${props.drawerWidth}px)` },
      }}
    >
      <Toolbar />
      <Typography paragraph>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/userlist" element={<Usermanagement />} />
        </Routes>
      </Typography>
    </Box>
  );
};

export default Pannel;
