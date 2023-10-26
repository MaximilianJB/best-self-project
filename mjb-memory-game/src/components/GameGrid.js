import React from "react";
import { Box, Grid } from "@mui/material";
import Tile from "./Tile";

const Item = () => (
  <Box sx={{ width: "100%", paddingTop: "100%", position: "relative" }}>
    <Box
      sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      border={1}
    ></Box>
  </Box>
);

function GameGrid() {
  return (
    <Box padding={10} width={"50%"} margin={"auto"}>
      <Grid container spacing={2} columns={8}>
        {[...Array(16)].map((_, index) => (
          <Grid key={index} item xs={2}>
            <Tile />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default GameGrid;
