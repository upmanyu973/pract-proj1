import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import "../css/Sidebar.css";
import Box from "@mui/material/Box";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AppsIcon from "@mui/icons-material/Apps";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import LayersIcon from "@mui/icons-material/Layers";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import AdbIcon from "@mui/icons-material/Adb";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useState } from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const Sidebar = (props) => {
  console.log(props);
  const {
    window,
    handleDrawerToggle,
    navigate,
    mobileOpen,
    drawerWidth,
    classes,
  } = props;
  const [menuData, setmenuData] = useState([
    {
      id: 1,
      label: "Dashboard",
      icon: <DashboardIcon className="icon" />,
      action: () => {
        props.navigate("/home");
      },
    },
    {
      id: 2,
      label: "User Management",
      icon: <AnalyticsIcon className="icon" />,
      action: () => {
        props.navigate("/home/userlist");
      },
    },
    {
      id: 3,
      label: "Sales",
      icon: <BusinessCenterIcon className="icon" />,
      // action: () => {
      //   Navigate("/dashboard");
      // },
    },
    {
      id: 4,
      label: "Applications",
      icon: <AppsIcon className="icon" />,
      // action: () => {
      //   Navigate("/dashboard");
      // }
    },
    {
      id: 5,
      label: "Pages",
      icon: <LayersIcon className="icon" />,
      // action: () => {
      //   Navigate("/dashboard");
      // },
    },
    {
      id: 6,
      label: "Ecommerce",
      icon: <LocalShippingIcon className="icon" />,
      // action: () => {
      //   Navigate("/dashboard");
      // },
    },
    {
      id: 7,
      label: "Authentication",
      icon: <NoteAltIcon className="icon" />,
      // action: () => {
      //   Navigate("/dashboard");
      // },
    },
  ]);

  const redirectMethod = () => {
    navigate("/home");
  };
  const drawer = (
    <div>
      <Toolbar style={{ backgroundColor: "black" }}>
        <AdbIcon
          sx={{
            display: { xs: "none", md: "flex" },
            mr: 1,
            color: "#fff",
            cursor: "pointer",
          }}
        />
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "#fff",
            textDecoration: "none",
            cursor: "pointer",
          }}
          onClick={redirectMethod}
        >
          LOGO
        </Typography>
      </Toolbar>
      {/* <Divider style={{ color: "#fff" }} /> */}
      <List className="menuList">
        {menuData.map((data, index) => {
          return (
            <ListItem disablePadding key={index}>
              <ListItemButton
                className="sidebar-listButton"
                onClick={data.action}
              >
                <ListItemIcon>{data.icon}</ListItemIcon>
                <ListItemText>{data.label}</ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      {/* <Divider />
      <List>
        {menuData.map((data, index) => {
          return (
            <ListItem key={index}>
              <ListItemButton
                className="sidebar-listButton"
                onClick={data.action}
              >
                <ListItemIcon>{data.icon}</ListItemIcon>
                <ListItemText>{data.label}</ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      component="nav"
      borderRight={0}
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
