import { useState } from 'react';
export default function Player({initialName, playerSymbol}) {
    const [player, setPlayer] = useState(initialName);
    const [isEditing , setIsEditing] = useState(false);

    function handleClick() {
        setIsEditing((isEditing) => !isEditing) // Functions are needed to update the previous state, recommended by React Team
    }
    function handleChange(event){
        setPlayer(event.target.value)
    }
    return (
         <li>
            <span className="player">
                {isEditing ? 
                <input type="text" required value={player} onChange={handleChange} /> 
                : 
                <span className="player-name">{player}</span>
                }
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
         </li>
    )
}