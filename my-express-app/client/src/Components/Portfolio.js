import React, { useState } from "react";
import "./Portfolio.css";

export default function Portfolio(props) {
    const [search, setSearch] = useState("");

    const filterNPCS = (npcs, search) => {
        if(!search) { return npcs }
        return npcs.filter((npc) => {
            const name = npc.firstname.toLowerCase() + npc.lastname.toLowerCase();
            return name.includes(search)
        })
    }

    const filteredNPCS = filterNPCS(props.npcs, search)

    const handleChange = (event) => {
        setSearch(event.target.value)
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
                    <div className="mod-image">
                        <img src={n.image} alt="description of the character"/>
                    </div>
                    <div className="tile-content">
                        <p>{n.firstname} {n.lastname}</p>
                    </div>
                </li>
            ))}
        </ul>
        </div>
    </div>
    )
}