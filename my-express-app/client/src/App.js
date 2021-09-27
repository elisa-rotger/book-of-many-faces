import React, { useEffect, useState } from "react";
import './App.css';
import Portfolio from "./Components/Portfolio.js";
import AddForm from "./Components/AddForm";

export default function App() {
  const [NPCS, setNPCS] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/users/mvp")
      .then(result => result.json())
      .then(npcs => { setNPCS(npcs) })
      .catch(error => { setError(error.message) })
  }, [])

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
      <div className="header-wrap"></div>
      <div className="wrapper" id="main-content">
        <div>
          <h1>NPC INDEX</h1>
        </div>
        <div>{error ? error : ""}</div>
        <AddForm onSubmit={newNpc => addNpc(newNpc)}/>
        <Portfolio npcs={NPCS}/>
      </div>
    </div>
  );
}
