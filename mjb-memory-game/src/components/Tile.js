import React from "react";
import { Box, Paper, Typography } from "@mui/material";

function Tile({ title, Component, color, isFlipped, onFlip, isCompleted }) {

  return (
    <Box
      sx={{ width: "100%", paddingTop: "100%", position: "relative", cursor: "pointer" }}
      onClick={onFlip}
    >
      <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
        <Paper
          elevation={isCompleted ? 0 : 3}
          square={false}
          sx={{
            padding: "5px",
            height: "100%",
            backgroundColor: isFlipped ? color : "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isFlipped || isCompleted ? (
            <Box display={"flex"} flexDirection={"column"} sx={{ opacity: isCompleted ? 0.5 : 1 }}>
              <Box>{Component}</Box>
              <Typography variant="body">{title}</Typography>
            </Box>
          ) : (
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "#0D2863" }}
            >
              ?
            </Typography>
          )}
        </Paper>
      </Box>
    </Box>
  );
}

export default Tile;
