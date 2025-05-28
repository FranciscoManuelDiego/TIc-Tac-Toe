import Player from './components/player.jsx'
import GameBoard from './components/GameBoard.jsx'
import Log from './components/Log.jsx'
import { useState } from 'react'
import {winningCombinations} from './components/winning-combinations.js'

const initialGameBoard = [ //This is then populated with the game values
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
const players= {
  X: "Player 1",
  O: "Player 2"
}

function derivedStateActivePlayer(gameTurns) {
  //This is the current player, it will be changed later
  return gameTurns.length % 2 === 0 ? "X" : "O";
}

function App() {
  const [gameTurns, setGameTurns] = useState([])

  const currentPlayer = derivedStateActivePlayer(gameTurns);

  // Calculate the board and winner before rendering
  let gameBoard = initialGameBoard.map(row => [...row]);
  for (const turn of gameTurns){
    const {square, player} = turn
    const {row, col} = square
    gameBoard[row][col] = player
  }

  let winner = null;
  for (const combination of winningCombinations) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col]

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
       winner = players[firstSquareSymbol]; // Set the winner to the symbol of the first square in the combination
       break; // Exit the loop if a winner is found.
    }
  }

  function handleSelectSquare(rowIndex, colIndex) {
    // Prevent moves if there's already a winner or the square is filled
    setGameTurns((prevTurns) => {
      const currentPlayer = derivedStateActivePlayer(prevTurns)
      const updatedTurn = [
        ...prevTurns,
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
      ];
      return updatedTurn;
    });
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
          <Player initialName="Player 1" playerSymbol="X" isActive={currentPlayer === "X"}/>
          <Player initialName="Player 2" playerSymbol="O" isActive={currentPlayer === "O"} />
        </ol>
        {winner && <p>Winner: {winner}</p>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </main>
      <Log turns={gameTurns} />
    </>
  )
}

export default App
