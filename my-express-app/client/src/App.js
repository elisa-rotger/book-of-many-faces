import React, { useEffect, useState } from "react";
import './App.css';
import Portfolio from "./Components/Portfolio.js";
import AddForm from "./Components/AddForm";
import HomeGame from "./Components/HomeGame";

export default function App() {
  const [home, setHome] = useState(false);
  const [NPCS, setNPCS] = useState([]);
  const [error, setError] = useState("");
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/users/mvp")
      .then(result => result.json())
      .then(npcs => { setNPCS(npcs) })
      .catch(error => { setError(error.message) })
  }, [])

  useEffect(() => {
    fetch("/games/mvp")
      .then(result => result.json())
      .then(npcs => { setGames(npcs) })
      .catch(error => { setError(error.message) })
  }, [])

  const handleHome = () => {
    setHome(true)
  }

  const addGame = (newGame) => {
    fetch("/games/mvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ newGame })
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
      .catch(error => { setError(error.message) })
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
        {home 
        ? <HomeGame onSubmit={newGame => addGame(newGame)} games={games}/> 
        :<div>
          <AddForm onSubmit={newNpc => addNpc(newNpc)}/>
          <Portfolio npcs={NPCS}/>
        </div>}

      </div>
    </div>
  );
}
