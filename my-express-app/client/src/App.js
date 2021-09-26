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
      .then(json => { setNPCS(json) })
      .catch(error => { setError(error.message) })
  }, [])

  const addNpc = (newNpc) => {
    console.log(newNpc)
  }

  return (
    <div className="App">
      NPC INDEX
      {console.log(NPCS)}
      <AddForm onSubmit={newNpc => addNpc(newNpc)}/>
    </div>
  );
}
