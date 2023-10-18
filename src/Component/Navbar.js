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
{
  /* <div>
  <nav className="bg-white shadow flex ">
    <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
      <a
        href="/"
        className="text-gray-800 dark:text-gray-500 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
      >
        Coins
      </a>

      <a
        href="/"
        className="border-b-2 text-gray-800 dark:text-gray-500 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
      >
        Exchange
      </a>

      <a
        href="/"
        className="border-b-2 text-gray-800 dark:text-gray-500 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
      >
        Chart
      </a>

      <a
        href="/"
        className="border-b-2 text-gray-800 dark:text-gray-500 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
      >
        Swap
      </a>
    </div>
    <div>
      <img
        className="h-20"
        src="https://coincap.io/static/logos/black.svg"
        alt="logo"
      ></img>
    </div>
    <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
      <a
        href="/"
        className="border-b-2 text-gray-800 dark:text-gray-500 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-6 h-6"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
          />
        </svg>
      </a>

      <a
        href="/"
        className="border-b-2 border-transparent text-gray-800 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-6 h-6"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
          />
        </svg>
      </a>
      <button className="rounded-3xl bg-green-500 h-10  px-2 text-white">
        Connect Wallet
      </button>
    </div>
  </nav>
</div>; */
}
