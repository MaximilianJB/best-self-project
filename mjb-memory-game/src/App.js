import "./App.css";
import React, { useState } from "react";
import StartPage from "./pages/StartPage";
import GridPage from "./pages/GridPage";
import GameOverPage from "./pages/GameOverPage";

function App({ db }) {
  const [currentScreen, setCurrentScreen] = useState("start");
  const [userName, setUserName] = useState("");
  const [gameTime, setGameTime] = useState("");

  return (
    <div className="App">
      {currentScreen === "start" && (
        <StartPage
          setUserName={setUserName}
          onStart={() => setCurrentScreen("game")}
          database={db}
        />
      )}
      {currentScreen === "game" && (
        <GridPage
          setGameTime={setGameTime}
          userName={userName}
          gameTime={gameTime}
          db={db}
          onGameOver={() => {
            setCurrentScreen("gameOver");
          }}
        />
      )}
      {currentScreen === "gameOver" && (
        <GameOverPage
          userName={userName}
          gameTime={gameTime}
          onRestart={() => setCurrentScreen("start")}
          database={db}
        />
      )}
    </div>
  );
}

export default App;
