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

    return (
        <div>
            <div className="container" id="game-grid">
                {props.games.map((g) => (
                    <button key={g.id} type="button" onClick={() => handleClick(g.id)}>{g.game}</button>
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