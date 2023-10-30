import "./App.css";
import React, { useState } from "react";
import StartPage from "./pages/StartPage";
import GridPage from "./pages/GridPage";
import GameOverPage from "./pages/GameOverPage";

function App() {
  const [currentScreen, setCurrentScreen] = useState("start");
  const [userName, setUserName] = useState("");
  const [gameTime, setGameTime] = useState("");

  return (
    <div className="App">
      {currentScreen === "start" && (
        <StartPage
          setUserName={setUserName}
          onStart={() => setCurrentScreen("game")}
        />
      )}
      {currentScreen === "game" && (
        <GridPage
          setGameTime={setGameTime}
          onGameOver={() => setCurrentScreen("gameOver")}
        />
      )}
      {currentScreen === "gameOver" && (
        <GameOverPage
          userName={userName}
          gameTime={gameTime}
          onRestart={() => setCurrentScreen("start")}
        />
      )}
    </div>
  );
}

export default App;
