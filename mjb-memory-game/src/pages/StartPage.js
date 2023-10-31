import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  List,
  ListItem,
  Modal,
} from "@mui/material";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { query, orderBy } from "firebase/firestore";
import TileStepper from "../components/TileStepper";
import qrCodeImage from "../qrcode_mjb-memory-match.web.app.png";

export default function StartPage({ onStart, setUserName, database }) {
  const [name, setName] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);
  const [highScore, setHighScore] = useState([]);
  const [openModal, setOpenModal] = useState(true);
  const [openQRCode, setQRCode] = useState(false);

  const handleStart = () => {
    setUserName(name);
    onStart();
  };

  const handleCloseModal = () => {
    setOpenModal(false); // Add this function to close modal
  };

  const handleOpenQR = () => setQRCode(true);
  const handleCloseQR = () => setQRCode(false);

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
    <div>
      <Modal open={openQRCode} onClose={handleCloseQR}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <img src={qrCodeImage} alt="QR Code"></img>
        </Box>
      </Modal>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id="modal-title"
            textAlign={"center"}
            variant="h4"
            component="h2"
          >
            Welcome to MJB Memory Match!
          </Typography>
          <Typography id="modal-description" textAlign="center" sx={{ mt: 2 }}>
            This game was created as a creative avenue for the Best Self Project
            for the Hogan Program. In this game you must discover all of the
            matching tiles in order to win. Don't forget though, the time is
            ticking, and a fast time could place you on the leaderboard!
          </Typography>
          <Typography
            id="modal-description"
            textAlign="center"
            sx={{ mt: 2, mb: 4 }}
          >
            Each of the grid tiles in this game represent a different aspect of
            Max that his close peers deemed to be what makes him his "Best
            Self". Learn more about all the tile choices below, and more about
            Max in the process!
          </Typography>
          <TileStepper />
          <Button onClick={handleCloseModal} variant="outlined" sx={{ mt: 4 }}>
            Close
          </Button>
        </Box>
      </Modal>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#f0f0f0",
          padding: { xs: 1, md: 4 },
        }}
      >
        <Paper
          sx={{
            padding: { xs: 2, md: 4 },
            textAlign: "center",
            borderRadius: 2,
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
            width: { xs: "90%", md: "auto" },
          }}
        >
          <Typography variant="h3" color={"#0D2863"} gutterBottom>
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
            size="large"
            sx={{ borderRadius: "50px", backgroundColor: "#0D2863" }}
            onClick={handleStart}
            disabled={!name}
          >
            Start Game
          </Button>
          <Button
            size="small"
            sx={{ marginTop: 3 }}
            onClick={handleOpenQR}
          >
            Let the class play!
          </Button>
        </Paper>
        <Paper
          sx={{
            padding: { xs: 2, md: 4 }, // Responsive padding
            textAlign: "center",
            borderRadius: 2,
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
            marginTop: { xs: 3, md: 5 }, // Responsive margin
            width: { xs: "90%", md: "auto" }, // Responsive width
          }}
        >
          <Typography variant="h4">High Scores</Typography>
          <List sx={{ listStyle: "decimal", paddingLeft: 5 }}>
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
    </div>
  );
}
