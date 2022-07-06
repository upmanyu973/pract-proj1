import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Pannel from "./Pannel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Pannel.css";
import { useNavigate } from "react-router-dom";
import { Box, makeStyles } from "@mui/material";
const Body = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const drawerWidth = 240;
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        navigate={navigate}
      />
      <Navbar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        navigate={navigate}
      />
      <Pannel />
    </Box>
  );
};

export default Body;
