export default function Log({turns}){
    return(
        <ol id="log">
            {turns.map((turn => 
            <li key={`${turn.player}-${turn.square.row}-${turn.square.col}`}>
                {turn.player} selected square at row {turn.square.row + 1} and column {turn.square.col + 1}
            </li>
        ))}
        </ol>
    )
}