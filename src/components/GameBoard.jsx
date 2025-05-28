
export default function GameBoard({onSelectSquare, board }) { //activePlayerSymbol

    return <ol id="game-board">
        {(board.map((row, rowIndex) =>  //Fills a row
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => //Fills cells in each row
                    <li key={colIndex}> 
                        <button onClick={()=> onSelectSquare(rowIndex, colIndex)} 
                        disabled={playerSymbol != null //Disabling repetead click on square
                        } >{playerSymbol}</button> 
                    </li> )}
                </ol>
            </li>
        ))}
    </ol>
}