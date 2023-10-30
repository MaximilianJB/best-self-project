import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Tile from "./Tile";
import ComputerIcon from "@mui/icons-material/Computer";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import SavedSearchRoundedIcon from "@mui/icons-material/SavedSearchRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import NaturePeopleRoundedIcon from "@mui/icons-material/NaturePeopleRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import { addDoc, collection } from "firebase/firestore";

function GameGrid({ onGameOver, db, userName, gameTime }) {
  const [tilePairs, setTilePairs] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [completedIndices, setCompletedIndices] = useState([]);

  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "leaderboard"), {
        userName: userName,
        gameTime: gameTime,
      });
      console.log("Document written with ID:", docRef.id);
    } catch (e) {
      console.error("Error adding document:", e);
    }
  };

  useEffect(() => {
    // Check for win condition
    if (completedIndices.length === tilePairs.length && tilePairs.length !== 0) {
      addData();
      onGameOver();
    }
  }, [completedIndices, tilePairs.length, onGameOver]);

  const handleFlip = (index) => {
    setFlippedIndices((prevFlipped) => {
      // If there are already two flipped, do nothing
      if (prevFlipped.length >= 2) return prevFlipped;

      const newFlippedIndices = [...prevFlipped, index];

      // Check for matching pairs
      if (newFlippedIndices.length === 2) {
        const [firstIndex, secondIndex] = newFlippedIndices;
        if (tilePairs[firstIndex].title === tilePairs[secondIndex].title) {
          setCompletedIndices((prevCompleted) => {
            const newCompleted = new Set([...prevCompleted, ...newFlippedIndices]);
            return Array.from(newCompleted);
          });          
        }
      }

      return newFlippedIndices;
    });

    if (flippedIndices.length >= 1) {
      setTimeout(() => {
        setFlippedIndices([]);
      }, 1000);
    }
  };

  useEffect(() => {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    function createPair(title, Component, color) {
      return [
        { title, Component, color },
        { title, Component, color },
      ];
    }

    const tileData = [
      {
        title: "Coding",
        Component: <ComputerIcon fontSize="large" />,
        color: "#A8D5E2",
      },
      {
        title: "Leader",
        Component: <EmojiEventsRoundedIcon fontSize="large" />,
        color: "#D5A8D8",
      },
      {
        title: "Communicator",
        Component: <PhoneRoundedIcon fontSize="large" />,
        color: "#F2CF63",
      },
      {
        title: "Optimistic",
        Component: <WbSunnyRoundedIcon fontSize="large" />,
        color: "#F4CDAF",
      },
      {
        title: "Confident",
        Component: <SecurityRoundedIcon fontSize="large" />,
        color: "#C3D8A8",
      },
      {
        title: "Humble",
        Component: <NaturePeopleRoundedIcon fontSize="large" />,
        color: "#E7A8A8",
      },
      {
        title: "Curious",
        Component: <SavedSearchRoundedIcon fontSize="large" />,
        color: "#A8B6D5",
      },
      {
        title: "Convener",
        Component: <HandshakeRoundedIcon fontSize="large" />,
        color: "#D5CBA8",
      },
    ];

    const initialTilePairs = tileData.flatMap((data) =>
      createPair(data.title, data.Component, data.color)
    );

    shuffleArray(initialTilePairs);

    setTilePairs(initialTilePairs);
  }, []);

  return (
    <Box padding={3} width={"50%"} margin={"auto"}>
      <Grid container spacing={2} columns={8}>
        {tilePairs.map((tile, index) => (
          <Grid key={index} item xs={2}>
            <Tile
              title={tile.title}
              Component={tile.Component}
              color={tile.color}
              isFlipped={flippedIndices.includes(index)}
              onFlip={() => handleFlip(index)}
              isCompleted={completedIndices.includes(index)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default GameGrid;
