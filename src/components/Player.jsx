import { useState } from "react";

function Player(props) {

    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {

        setIsEditing(!isEditing);

    }

    // let buttonCption = "edit"

    let PlayerName = <span className='playersymbol'>{props.symbol}</span>

    if (isEditing) {
        PlayerName = <input type="text" required Value={props.name}/>
    //    let buttonCption="save"
    }


    return (
        <>
        <li>
            {PlayerName}
            <span>{props.Name}</span>
            <button onClick={handleEditClick}>{ isEditing ? "save" : "edit" }</button>
        </li>
        </>
    )
}


export default Player;