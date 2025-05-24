
import Player from './components/player.jsx'
import GameBoard from './components/GameBoard.jsx'

function App() {
  
  return (
    <>
    <header>
      <h1>React Tic-Tac-Toe</h1>
      <img src="/game-logo.png" alt="Tic-Tac-Toe" />
    </header>
    <main id="game-container">
      <h2>Players</h2>
      <ol id="players">
        <Player initialName="Player 1" playerSymbol="X" />
        <Player initialName="Player 2" playerSymbol="O" />
      </ol>
        <GameBoard />
      </main>
    </>
  )
}

export default App
