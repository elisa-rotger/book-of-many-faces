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
    document.title = "BMF"
  }, []);

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
    newNpc.description = newNpc.description.replace(/'/g, "\\'");
    newNpc.notes = newNpc.notes.replace(/'/g, "\\'");
    console.log(newNpc);
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

  const deleteNPC = (id) => {
    fetch(`/users/mvp/${id}`, {
      method: "DELETE"
    })
    .then(result => result.json())
    .then(npcs => { setNPCS(npcs) })
    .catch(error => { setError(error.message); console.log(error) })
  }

  const deleteGame = (id) => {
    fetch(`/games/mvp/${id}`, {
      method: "DELETE"
    })
    .then(result => result.json())
    .then(games => { 
      setGames(games)
    })
    .catch(error => { setError(error.message); console.log(error) })
  }

  const editGame = (updatedGame) => {
    fetch(`/games/mvp/${updatedGame.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedGame)
    })
    .then(result => result.json())
    .then(games => {setGames(games)})
    .catch(error => { setError(error.message); console.log(error) })
  }

  const updateNPC = (updatedNPC) => {
    updatedNPC.description = updatedNPC.description.replace(/'/g, "\\'");
    updatedNPC.notes = updatedNPC.notes.replace(/'/g, "\\'");
    fetch(`/users/mvp/${updatedNPC.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedNPC)
    })
    .then(result => result.json())
    .then(npcs => { setNPCS(npcs) })
    .catch(error => { setError(error.message); console.log(error) })
  }

  const addFolder = (npcID, folderID) => {
    console.log(folderID)
    fetch(`/fold/mvp/${npcID}`, {
      method:"PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ folder_id: folderID })
    })
    .then(result => result.json())
    .then(npcs => { setNPCS(npcs) })
    .catch(error => { setError(error.message); console.log(error) })
  }

  return (
    <div>
      {/* NAVIGATION BAR W HOME BUTTON */}
      <Navbar className="nav-bar" bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand onClick={handleHome}>
            <img 
            id="nav-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Font_Awesome_5_solid_dice-d20.svg/512px-Font_Awesome_5_solid_dice-d20.svg.png"
            className="d-inline-block align-top"
            alt="d20 dice logo"
            />
            <span id="nav-title">BMF</span>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={handleHome}>Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="wrapper" id="main-content">
        <div className="title">
          <div className="title-content">
            <h1>BOOK OF</h1><div className="title-gap"></div> <h1 className="special-title">MANY FACES</h1>
          </div>
        </div>

        {/* ERROR DISPLAY */}
        <div>{error ? error : ""}</div>

        {/* CONDITIONAL RENDERING OF EITHER HOME PAGE OR PORTFOLIO */}
        <div className="wrapper" id="second-content">
          {home && !currentGame
          ? <HomeGame onSubmit={newGame => addGame(newGame)} games={games} onClick={id => setCurrentGame(id)} onDelete={id => deleteGame(id)} onEdit={updatedGame => editGame(updatedGame)}/> 
          : <div>
            <div className="port-content">
              <AddForm onSubmit={newNpc => addNpc(newNpc)} currentGame={currentGame}/>
              <Portfolio npcs={NPCS} games={games} currentGame={currentGame} onDelete={id => deleteNPC(id)} updateNPC={(updatedNPC) => updateNPC(updatedNPC)} onFolder={(npcID, folderID) => addFolder(npcID, folderID)} />
            </div>
          </div>}
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <section className="content">
          <div className="logo">
            <img 
            id="nav-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Font_Awesome_5_solid_dice-d20.svg/512px-Font_Awesome_5_solid_dice-d20.svg.png"
            alt="d20 dice logo"
            /> <span>BOOK OF MANY FACES</span>
          </div>
        </section>
      </footer>
    </div>
  );
}
