// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import "../css/Navbar.css";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import HomeIcon from "@mui/icons-material/Home";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import SearchBar from "../../common-components/searchBar";
// import SettingsIcon from "@mui/icons-material/Settings";
// import Logo from "../assets/Logo.png";
// import Sidebar from "./Sidebar";
// function AppBar() {
//   const [show, setShow] = useState(false);
//   const [navLinkData, setNavLinkData] = useState([
//     {
//       label: "hhjffccgffg",
//     },
//   ]);
//   const navigate = useNavigate();
//   return (
//     <Navbar style={{ backgroundColor: "#000" }} expand="lg">
//       <Sidebar navigate={navigate} />
//       <Navbar.Brand>
//         <img alt="logo" src={Logo} className="logo" />
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="me-auto">
//           {navLinkData.map((link, index) => {
//             return (
//               <Nav.Link
//                 key={index}
//                 style={{ color: "#fff" }}
//                 className="navLink"
//                 href="#home"
//               >
//                 {link.label}
//               </Nav.Link>
//             );
//           })}
//         </Nav>

//         <SearchBar />
//         {/* <Navbar.Text>
//             {JSON.parse(localStorage.getItem("user")).email}
//           </Navbar.Text> */}
//         <NavDropdown
//           id="nav-dropdown-dark-example"
//           title={<SettingsIcon style={{ color: "#F7F9F9" }} />}
//           menuVariant="dark"
//         >
//           <NavDropdown.Item onClick={() => setShow(true)}>
//             Profile
//           </NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item
//             onClick={() => {
//               console.log("logout");
//             }}
//           >
//             Logout
//           </NavDropdown.Item>
//         </NavDropdown>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default AppBar;

import * as React from "react";
import "../css/Search.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Sidebar from "./Sidebar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchBar from "./searchBar";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Sidebar navigate={navigate} />
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <div className="searchBox">
            {" "}
            <SearchBar />
          </div>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
