import React, { useState } from "react";
import "./HomeGame.css";

export default function HomeGame(props) {
    const [game, setGame] = useState("");

    const handleChange = (event) => {
        setGame(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(game);
        setGame("");
    }

    const handleClick = (id) => {
        props.onClick(id);
    }

    const handleDelete = (id) => {
        props.onDelete(id);
    }

    return (
        <div>
            <div className="container" id="game-grid">
                {props.games.map((g) => (
                    <div className="game-btn">
                        <div id="filler" />
                        <button id="game" key={g.id} type="button" onClick={() => handleClick(g.id)}>{g.game}</button>
                        <div className="dropdown">
                            <button className="dropbtn" key={g.id}>options</button>
                            <div className="dropdown-content">
                                <a onClick={() => handleDelete(g.id)} >delete</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <form id="game-form">
                <h4>create new campaign</h4>
                <input type="text" name="game" value={game} onChange={handleChange}></input> <br />
                <button type="button" onClick={handleSubmit}>new game</button>
            </form>
        </div>
    )
}