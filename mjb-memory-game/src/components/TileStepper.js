import React, { useState } from "react";
import tileData from "./tileData"; // Adjust the path as necessary
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Box, Typography, Paper } from "@mui/material";

const TileStepper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % tileData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1) % tileData.length);
  };

  const currentTile = tileData[currentIndex];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ArrowBackIosRoundedIcon
        onClick={handlePrev}
        style={{ cursor: "pointer" }}
      />
      <Paper
        elevation={3}
        style={{
          borderRadius: "12px",
          width: "200px",
          height: "200px",
          backgroundColor: currentTile.color,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          padding: 3,
          margin: "0 20px",
        }}
      >
        <Box padding={1} style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          {currentTile.Component}
          <Typography align="center" variant="h6" sx={{ fontWeight: "bold" }}>
            {currentTile.title}
          </Typography>
          <Typography align="center">{currentTile.description}</Typography>
        </Box>
      </Paper>
      <ArrowForwardIosRoundedIcon
        onClick={handleNext}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default TileStepper;
