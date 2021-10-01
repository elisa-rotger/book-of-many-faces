import { useState } from "react";

import "./PopUp.css";
import EditForm from "./EditForm.js";

const PopUp = (props) => {
    const [edit, setEdit] = useState(false);
    // const [updated, setUpdated] = useState(null);

    const handleEdit = () => {
        setEdit(!edit);
    }

    const updateNPC = (updatedNPC) => {
        // setUpdated(updatedNPC);
        props.updateNPC(updatedNPC);
    }


    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <div className="box-content">
                    <img src={props.npc.image} />
                    {/* TODO */}
                    {edit 
                    ? <EditForm npc={props.npc} onSubmit={(updatedNPC) => updateNPC(updatedNPC)} closeEdit={handleEdit}/>
                    : 
                    <div className="info">
                        <button className="edit-btn" onClick={handleEdit} >edit NPC</button>
                        <span id="name">{props.npc.firstname} {props.npc.lastname}</span>
                        <span>{props.npc.race} {props.npc.class}, {props.npc.age} years old</span>
                        <span>Lives in: {props.npc.residence}</span>
                        <span>{props.npc.description}</span>
                        <span id="dm">DM notes: <br />{props.npc.notes}</span>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default PopUp;