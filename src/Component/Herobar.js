import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  gradientBox: {
    background: "linear-gradient(45deg, #00308F 30%, #89CFF0 90%)",
    width: "100%", // Set the width of the box as needed
    height: 200, // Set the height of the box as needed
  },
}));

const Herobar = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.gradientBox}
      style={{
        display: "flex",
        flexDirection: "row",
        color: "white",
        paddingTop: "1rem",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography>Market Cap </Typography>
        <Typography>$1.05t</Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography>Exchange Vol</Typography>
        <Typography>$87.40b</Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography>Assets</Typography>
        <Typography>2,295</Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography>Exchanges</Typography>
        <Typography>73</Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography>Markets</Typography>
        <Typography>12,563</Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography>BTC Dom Index</Typography>
        <Typography>36.9%</Typography>
      </Box>
    </Box>
  );
};

export default Herobar;
