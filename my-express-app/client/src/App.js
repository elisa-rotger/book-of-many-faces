import React, { useEffect, useState } from "react";
import './App.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import Portfolio from "./Components/Portfolio.js";
import AddForm from "./Components/AddForm";
import HomeGame from "./Components/HomeGame";

export default function App() {
  const [home, setHome] = useState(true);
  const [games, setGames] = useState([]);
  const [NPCS, setNPCS] = useState([]);
  const [error, setError] = useState("");
  const [currentGame, setCurrentGame] = useState("");

  useEffect(() => {
    fetch("/users/mvp")
      .then(result => result.json())
      .then(npcs => { setNPCS(npcs) })
      .catch(error => { setError(error.message); console.log(error) })
  }, [])

  useEffect(() => {
    fetch("/games/mvp")
      .then(result => result.json())
      .then(npcs => { setGames(npcs) })
      .catch(error => { setError(error.message); console.log(error) })
  }, [])

  const handleHome = () => {
    setCurrentGame(null);
    setHome(true);
  }

  const addGame = (newGame) => {
    fetch("/games/mvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ game: newGame })
    })
      .then(result => result.json())
      .then(games => {
        setGames(games)
      })
      .catch(error => { setError(error.message) })
  }

  const addNpc = (newNpc) => {
    fetch("/users/mvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newNpc)
    })
      .then(result => result.json())
      .then(npcs => { 
        setNPCS(npcs)
      })
      .catch(error => { setError(error.message); console.log(error) })
  }

  const deleteGame = (id) => {
    fetch(`games/mvp/${id}`, {
      method: "DELETE"
    })
    .then(result => result.json())
    .then(games => { 
      setGames(games)
    })
    .catch(error => { setError(error.message); console.log(error) })
  }

  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand onClick={handleHome}>
            <img 
            id="nav-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Font_Awesome_5_solid_dice-d20.svg/512px-Font_Awesome_5_solid_dice-d20.svg.png"
            className="d-inline-block align-top"
            alt="d20 dice logo"
            />
            NPC INDEX</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={handleHome}>Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="wrapper" id="main-content">
        <div>
          <h1>NPC INDEX</h1>
        </div>
        <div>{error ? error : ""}</div>
        {home && !currentGame
        ? <HomeGame onSubmit={newGame => addGame(newGame)} games={games} onClick={id => setCurrentGame(id)} onDelete={id => deleteGame(id)} /> 
        : <div>
          <AddForm onSubmit={newNpc => addNpc(newNpc)} currentGame={currentGame}/>
          <Portfolio npcs={NPCS} currentGame={currentGame}/>
        </div>}

      </div>
    </div>
  );
}
