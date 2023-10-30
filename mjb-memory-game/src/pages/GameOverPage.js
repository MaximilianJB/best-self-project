import React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Typography, Paper, List, ListItem } from "@mui/material";
import {
  collection,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";

export default function GameOverPage({
  userName,
  gameTime,
  onRestart,
  database,
}) {
  const [leaderboard, setLeaderboard] = useState([]);
  const [userPlace, setUserPlace] = useState(null);

  // find user place on leaderboard
  const findUserPlace = () => {
    var userIndex = leaderboard.findIndex(u => (u.userName === userName) && (u.gameTime === gameTime))
    setUserPlace(userIndex + 1);
  }

  // Fetch and display leaderboard
  useEffect(() => {
    const fetchData = async () => {
      const newLeaderboard = [];
      const leaderboardQuery = query(
        collection(database, "leaderboard"),
        orderBy("gameTime", "asc")
      );
      const querySnapshot = await getDocs(leaderboardQuery);
      querySnapshot.forEach((doc) => {
        newLeaderboard.push(doc.data());
      });
      setLeaderboard(newLeaderboard);
    };
    fetchData();
  }, [database]);

  useEffect(() => {
    findUserPlace();
  }, [leaderboard]);

  console.log(userPlace);

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
          Game Over
        </Typography>
        <Typography variant="h4">Congratulations, {userName}!</Typography>
        <Typography variant="h6" sx={{ marginBottom: 3 }}>
          Your time: {gameTime} seconds
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 3 }}>
          You are #{userPlace} on the leaderboard!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ borderRadius: "50px" }}
          onClick={onRestart}
        >
          Restart
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
