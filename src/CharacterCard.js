import React from "react";
 
function CharacterCard(props) {
    return (
        <div className={"card " + (props.Clicked ? "animate" : "")} onClick={() => props.handleClick( props.id)} >  
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="img-content">
                <ul>
                    <li>
                        <strong>Name:</strong>{props.name}
                    </li>
                    <li>
                        <strong>Type: </strong>{props.type}
                    </li>
                </ul>
            </div>
        </div >
    )
}
 
export default CharacterCard;
