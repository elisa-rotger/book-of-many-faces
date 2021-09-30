import React, { useState } from "react";
import PopUp from "./PopUp";
import "./Portfolio.css";

export default function Portfolio(props) {
    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [featured, setFeatured] = useState(null);

    const filterNPCS = (npcs, search) => {
        if(!search) { return npcs }
        return npcs.filter((npc) => {
            const name = npc.firstname.toLowerCase() + npc.lastname.toLowerCase();
            return name.includes(search);
        })
    }

    const filteredNPCS = filterNPCS(props.npcs, search);

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const openPopup = (id) => {
        setIsOpen(true);
        const index = props.npcs.findIndex(n => n.id == id)
        setFeatured(props.npcs[index]);
    }

    const closePopup = () => {
        setIsOpen(false);
    }

    return (
    <div className="wrap">
        <div className="search-bar">
            <span>search:</span>
            <input
            type="text"
            name="search"
            value={search}
            onChange={handleChange} />
        </div>
        <div className="tab-content">
        
        <ul className="tiles">
            {props.npcs &&
            filteredNPCS.filter(n => n.game_id === props.currentGame).map(n => (
                <li key={n.id} className="mod-tile">
                    <div className="dropdown" id="droptile">
                        <button className="dropbtn" type="button" id="tile-btn"> + </button>
                        <div className="dropdown-content" id="drop-content">
                            {/* TODO */}
                            <a>Favourite</a>
                            <a>Delete</a>
                            <a>Send to...</a>
                        </div>
                    </div>
                    <div className="mod-image">
                        <img src={n.image} alt="description of the character" onClick={() => openPopup(n.id)}/>
                    </div>
                    <div className="tile-content">
                        <p>{n.firstname} {n.lastname}</p>
                    </div>
                </li>
            ))}
        </ul>
        {isOpen && <PopUp handleClose={closePopup} npc={featured} />}
        </div>
    </div>
    )
}