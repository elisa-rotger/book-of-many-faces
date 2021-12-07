import React, { useState } from "react";
import "./HomeGame.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function HomeGame(props) {
    const [game, setGame] = useState("");
    const [show, setShow] = useState(false);
    const [currentGame, setCurrentGame] = useState();

    const handleChange = (event) => {
        setGame(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(game);
        setGame("");
    }

    const handleEdit = (event) => {
        event.preventDefault();
        setShow(true);
        setCurrentGame(event.target.id)
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
                <img 
                id="title-logo"
                src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/swords-crossed-dice-512.png"
                alt="d20 crossed with swords logo"
                />           
                <h3>choose your game</h3>
                <img 
                id="title-logo"
                src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/swords-crossed-dice-512.png"
                alt="d20 crossed with swords logo"
                />  
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
                                <a id={g.id} onClick={handleEdit}>edit</a>
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
            <button type="button" className="add-game btn btn-dark" onClick={handleSubmit}>
                <a>new game</a>
                <i class="gg-add-r"></i>
            </button>
            </form>

            <Modal centered show={show} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Rename your game</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {currentGame}
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setShow(false)}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
            </Modal>
        </div>
    )
}