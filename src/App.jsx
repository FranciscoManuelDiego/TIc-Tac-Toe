import Player from './components/player.jsx'
import GameBoard from './components/GameBoard.jsx'
import Log from './components/Log.jsx'
import { useState } from 'react'

function App() {
  const [gameTurns, setGameTurns] = useState([]) //This is the state of the game turns
  const [activePlayer, setActivePlayer] = useState("X") //This is the state of the active player

  function handleChangeActivePlayer(rowIndex, colIndex) {
    const currentPlayer = activePlayer; 
    setGameTurns((prevTurns) => {
      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurn;
    });

    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );
  }
  return (
    <>
    <header>
      <h1>React Tic-Tac-Toe</h1>
      <img src="/game-logo.png" alt="Tic-Tac-Toe" />
    </header>
    <main id="game-container">
      <h2>Players</h2>
      <ol id="players" className="highlight-player" >
        <Player initialName="Player 1" playerSymbol="X" isActive={activePlayer === "X"}/>
        <Player initialName="Player 2" playerSymbol="O" isActive={activePlayer === "O"} />
      </ol>
        <GameBoard onSelectSquare={handleChangeActivePlayer}
        turns= {gameTurns} />
      </main>
      <Log turns={gameTurns} />
    </>
  )
}

export default App
