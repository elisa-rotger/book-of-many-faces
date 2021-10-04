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
        <div className="home-box">
            <div className="games-title">            
                <h3>Choose your game</h3>
            </div>
            <div className="container" id="game-grid">
                {props.games.map((g) => (
                    <div className="game-btn" key={g.id}>
                        <div id="filler" />
                        <button className="btn btn-outline-dark" id="game" key={g.id} type="button" onClick={() => handleClick(g.id)}>{g.game}</button>
                        
                        <div className="dropdown">
                            <button className="dropbtn btn btn-outline-dark" key={g.id}>
                                <i className="gg-menu"></i>
                            </button>
                            <div className="dropdown-content">
                                {/* TODO */}
                                <a>edit</a>
                                <a className="btn btn-outline-danger" onClick={() => handleDelete(g.id)} >delete</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <form>
                <div className="row mb-3" id="game-form">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">create new campaign</label>
                    <div class="col-sm-10">
                        <input type="text" className="form-control" id="colFormLabel" placeholder="new game" name="game" value={game} onChange={handleChange}></input> <br />
                    </div>
                </div>
            <button type="button" className="btn btn-dark" onClick={handleSubmit}>new game</button>
            </form>
        </div>
    )
}