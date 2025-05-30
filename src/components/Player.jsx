import { useState } from 'react';
export default function Player({initialName, playerSymbol, isActive}) {
    const [player, setPlayer] = useState(initialName);
    const [isEditing , setIsEditing] = useState(false);

    function handleClick() {
         if (isEditing && onNameChange) {
        onNameChange(player);
        }
    setIsEditing(editing => !editing);
    }
    function handleChange(event){
        setPlayer(event.target.value)
    }
    
    //Then the className sets wether the player is active or not , via props.
    return (
         <li className={isActive ? "active" : undefined}> 
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