import React, { useEffect, useState } from "react";
import './App.css';
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

  return (
    <div>
      <div className="header-wrap">
        <div className="header-right">
          <form>
            <button type="button" onClick={handleHome}>HOME</button>
          </form>
        </div>
      </div>
      <div className="wrapper" id="main-content">
        <div>
          <h1>NPC INDEX</h1>
        </div>
        <div>{error ? error : ""}</div>
        {home && !currentGame
        ? <HomeGame onSubmit={newGame => addGame(newGame)} games={games} onClick={id => setCurrentGame(id)}/> 
        : <div>
          <AddForm onSubmit={newNpc => addNpc(newNpc)} currentGame={currentGame}/>
          <Portfolio npcs={NPCS} currentGame={currentGame}/>
        </div>}

      </div>
    </div>
  );
}
