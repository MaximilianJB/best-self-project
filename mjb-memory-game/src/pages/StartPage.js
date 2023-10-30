import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  List,
  ListItem,
} from "@mui/material";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { query, orderBy } from "firebase/firestore";

export default function StartPage({ onStart, setUserName, database }) {
  const [name, setName] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);
  const [highScore, setHighScore] = useState([]);

  const handleStart = () => {
    setUserName(name);
    onStart();
  };

  useEffect(() => {
    const fetchData = async () => {
      const newLeaderboard = [];
      const leaderboardQuery = query(
        collection(database, "leaderboard"),
        orderBy("gameTime")
      );
      const querySnapshot = await getDocs(leaderboardQuery);
      querySnapshot.forEach((doc) => {
        newLeaderboard.push(doc.data());
      });
      setLeaderboard(newLeaderboard);
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Find and set the lowest time
    let minTime = Infinity;
    let highScorer = "";
    leaderboard.forEach((entry) => {
      if (entry.gameTime < minTime) {
        minTime = entry.gameTime;
        highScorer = entry.userName;
      }
    });

    setHighScore({ name: highScorer, gameTime: minTime });
  }, [leaderboard]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Paper
        sx={{
          padding: 4,
          textAlign: "center",
          borderRadius: 2,
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h2" gutterBottom>
          MJB Memory Match
        </Typography>
        <TextField
          label="Your Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginBottom: 3 }}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ borderRadius: "50px" }}
          onClick={handleStart}
          disabled={!name}
        >
          Start Game
        </Button>
      </Paper>
      <Paper
        sx={{
          padding: 4,
          textAlign: "center",
          borderRadius: 2,
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          marginTop: 5,
        }}
      >
        <Typography variant="h4">High Scores</Typography>
        <List sx={{ listStyle: "decimal" }}>
          {leaderboard.map((entry, index) => (
            <ListItem key={index} sx={{ display: "list-item" }}>
              <Typography>
                {entry.gameTime}s - {entry.userName}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
