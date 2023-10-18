import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";

const Navbar = () => {
  return (
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className="navbar"
          position="static"
          sx={{ backgroundColor: "white" }}
        >
          <Toolbar>
            <Typography
              className="nav-child"
              variant="h6"
              component="div"
              sx={{ flexGrow: 0.25 }}
            >
              <a href="/" className="link">
                Coins
              </a>
            </Typography>
            <Typography
              className="nav-child"
              variant="h6"
              component="div"
              sx={{ flexGrow: 0.25 }}
            >
              <a href="/" className="link">
                Exchange
              </a>
            </Typography>
            <Typography
              className="nav-child"
              variant="h6"
              component="div"
              sx={{ flexGrow: 0.25 }}
            >
              <a href="/" className="link">
                Chart
              </a>
            </Typography>
            <Typography
              className="nav-child"
              variant="h6"
              component="div"
              sx={{ flexGrow: 0.25 }}
            >
              <a href="/" className="link">
                Swap
              </a>
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              style={{ justifyContent: "center" }}
              sx={{ mr: 2, flexGrow: 0.5 }}
            >
              <img
                className="logo"
                src="https://coincap.io/static/logos/black.svg"
                alt="logo"
                width="100rem"
              />
            </IconButton>

            <Typography sx={{ flexGrow: 0.5 }}>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <IconButton>
                <SettingsIcon />
              </IconButton>
            </Typography>
            <Button variant="contained" color="secondary">
              Connect Wallet
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
};

export default Navbar;
