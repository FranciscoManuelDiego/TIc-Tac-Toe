import { useState } from "react"

const initialGameBoard = [ //This is then populated with the game values
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function GameBoard(){
    const [gameBoard, setGameBoard] = useState(initialGameBoard) //This is the state of the game board

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameboard) => {
            const updatedGameboard = [...prevGameboard.map((innerArray) => 
             [...innerArray])] //This is crucial to work upon a copy of the gameboard 
             // so it doesn't cause a problem in memory storage.
             //After that, we take the elements inside and update them again.
            updatedGameboard[rowIndex][colIndex] = "X" //This is the value that will be set in the gameboard
            return updatedGameboard // update the gameboard in an unmutated way
        })
    } //This function handles the changes of shape between the game board and the game values

    return <ol id="game-board">
        {(gameBoard.map((row, rowIndex) =>  //Fills a row
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => //Fills cells in each row
                    <li key={colIndex}> 
                        <button onClick={()=> handleSelectSquare(rowIndex, colIndex)} >{playerSymbol}</button>
                    </li> )}
                </ol>
            </li>
        ))}
    </ol>
}