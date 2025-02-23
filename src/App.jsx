import { useState } from "react";
import "./App.css";
import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import Gamelog from "./components/Gamelog";

function DeriveAvtivePlayer ( gameTurns){
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'x') {
    currentPlayer = 'o'
  }
return currentPlayer;
}


function App() {
  const [activePlayer, setActivePlayer] = useState("x");
  const [gameTurns, setGameTurns] = useState([]);


  
  function handleSquareSelected(rowIndex, colIndex) {
    setGameTurns((prevTurns) => [
      { square: { row: rowIndex, col: colIndex }, player: activePlayer },
      ...prevTurns,
    ]);

    // Switch the active player
    setActivePlayer((prevPlayer) => (prevPlayer === "x" ? "o" : "x"));
  }

  return (
    <div>
      <ol>
        <Player Name="Player 1" symbol="X" isActive={activePlayer === "x"} />
        <Player Name="Player 2" symbol="O" isActive={activePlayer === "o"} />
      </ol>
      <Gameboard onSelectSquare={handleSquareSelected} activePlayerSymbol={activePlayer} />
      <Gamelog turns={gameTurns} />
    </div>
  );
}

export default App;
