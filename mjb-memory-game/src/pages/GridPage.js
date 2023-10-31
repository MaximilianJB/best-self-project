import Typography from "@mui/material/Typography";
import GameGrid from "../components/GameGrid";
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";

export default function GamePage({ onGameOver, setGameTime, userName, gameTime, db }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime + 1;
        setGameTime(newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [setGameTime]);

  return (
    <div className="App">
      <div className="Header">
        <Typography
          variant="h3"
          paddingTop={5}
          paddingBottom={1}
          color={"#0D2863"}
        >
          MJB Memory Match
        </Typography>
      </div>
      <div className="Body">
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Typography variant="h3">{time}</Typography>
          <GameGrid onGameOver={onGameOver} userName={userName} gameTime={gameTime} db={db}/>
        </Box>
      </div>
      <div className="Footer"></div>
    </div>
  );
}
