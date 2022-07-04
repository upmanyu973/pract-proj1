import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../css/Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AppsIcon from "@mui/icons-material/Apps";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import LayersIcon from "@mui/icons-material/Layers";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useState } from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export default function Sidebar({ navigate }) {
  const [menuData, setmenuData] = useState([
    {
      id: 1,
      label: "Dashboard",
      icon: <DashboardIcon />,
      action: () => {
        navigate("/home");
      },
    },
    {
      id: 2,
      label: "User Management",
      icon: <AnalyticsIcon />,
      action: () => {
        navigate("/home/userlist");
      },
    },
    {
      id: 3,
      label: "Sales",
      icon: <BusinessCenterIcon />,
      // action: () => {
      //   Navigate("/dashboard");
      // },
    },
    {
      id: 4,
      label: "Applications",
      icon: <AppsIcon />,
      // action: () => {
      //   Navigate("/dashboard");
      // }
    },
    {
      id: 5,
      label: "Pages",
      icon: <LayersIcon />,
      // action: () => {
      //   Navigate("/dashboard");
      // },
    },
    {
      id: 6,
      label: "Ecommerce",
      icon: <LocalShippingIcon />,
      // action: () => {
      //   Navigate("/dashboard");
      // },
    },
    {
      id: 7,
      label: "Authentication",
      icon: <NoteAltIcon />,
      // action: () => {
      //   Navigate("/dashboard");
      // },
    },
  ]);
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "100%" }}
      // className="sidebar"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
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
      </List>
      <Divider />
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
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <ReorderIcon
            style={{ color: "#fff", marginLeft: "50px", marginRight: "50px" }}
            onClick={toggleDrawer(anchor, true)}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
