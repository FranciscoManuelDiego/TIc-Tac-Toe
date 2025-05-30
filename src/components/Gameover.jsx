export default function Gameover({winner, restartGame, winnerSymbol}) {
    return(
    <div id="game-over">
        {winner && <h2>{winner} ({winnerSymbol}) is the winner</h2>}
        {!winner && <p>It's a draw!</p>}
        <span>
        <button onClick={restartGame}> Hit to restart </button>
        </span>
    </div>
    )
}