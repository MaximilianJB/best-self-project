import { Box, Paper } from "@mui/material";
import React from "react";

function Tile() {
  return (
    <Box sx={{ width: "100%", paddingTop: "100%", position: "relative" }}>
      <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
        <Paper
          elevation={3}
          square={false}
          sx={{ padding: "5px", height: "100%" }}
        ></Paper>
      </Box>
    </Box>
  );
}

export default Tile;
