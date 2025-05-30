import Player from './components/player.jsx'
import GameBoard from './components/GameBoard.jsx'
import Log from './components/Log.jsx'
import Gameover from './components/Gameover.jsx'
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

  const [playerNames, setPlayerNames] = useState({
    X: "Player 1",
    O: "Player 2"
  });

  // Calculate the board and winner before rendering
  let gameBoard = initialGameBoard.map(row => [...row]);
  for (const turn of gameTurns){
    const {square, player} = turn
    const {row, col} = square
    gameBoard[row][col] = player
  }

  let winner = null;
  let winnerSymbol = null; //
  for (const combination of winningCombinations) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col]

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
       winner = playerNames[firstSquareSymbol]; // Set the winner to the symbol of the first square in the combination
       winnerSymbol = firstSquareSymbol;
       break; // Exit the loop if a winner is found.
    }

  }
  const Draw = gameTurns.length === 9 && !winner

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
      <header id="game-header">
        <h1>React Tic-Tac-Toe</h1>
        <img src="/game-logo.png" alt="Tic-Tac-Toe" />
      </header>
      <main id="game-container">
        <h2>Players</h2>
        <ol id="players" className="highlight-player" >
          <Player initialName={playerNames.X} 
          playerSymbol="X" 
          isActive={currentPlayer === "X"}
          onNameChange={name => setPlayerNames(names => ({...names, X: name}))}/>
          <Player initialName={playerNames.O} 
          playerSymbol="O" 
          isActive={currentPlayer === "O"}
          onNameChange={name => setPlayerNames(names => ({...names, O: name}))}/>
        </ol>
        {winner && <p>{winner}</p>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
         {(Draw || winner) && <Gameover winner={winner}
         winnerSymbol={winnerSymbol}
         restartGame={() => setGameTurns([])}/>}
      </main>
      <Log turns={gameTurns} />
     
    </>
  )
}

export default App
