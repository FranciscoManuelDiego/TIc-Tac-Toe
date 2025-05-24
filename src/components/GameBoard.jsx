const initialGameBoard = [ //This is then populated with the game values
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function GameBoard(){
    return <ol id="game-board">
        {(initialGameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, cellIndex) => <li key={cellIndex}>
                        <button>{playerSymbol}</button>
                    </li> )}
                </ol>
            </li>
        ))}
    </ol>
}