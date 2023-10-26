import "./App.css";
import Typography from "@mui/material/Typography";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Typography variant="h3" paddingTop={5} color={"#0D2863"}>
          MJB Memory Game
        </Typography>
      </div>
      <div className="Body">
        <GameGrid />
      </div>
      <div className="Footer">{/* Footer content */}</div>
    </div>
  );
}

export default App;
