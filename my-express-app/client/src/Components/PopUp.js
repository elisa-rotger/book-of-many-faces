import { useState } from "react";

import "./PopUp.css";

const PopUp = (props) => {



    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <div className="box-content">
                    <img src={props.npc.image} />
                    <div className="info">
                        <span id="name">{props.npc.firstname} {props.npc.lastname}</span>
                        <span>{props.npc.race} {props.npc.class}, {props.npc.age} years old</span>
                        <span>Lives in: {props.npc.residence}</span>
                        <span>{props.npc.description}</span>
                        <span id="dm">DM notes: <br />{props.npc.notes}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUp;