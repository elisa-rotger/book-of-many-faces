import React, { useState } from "react";
import "./AddForm.css";
import { Accordion } from "react-bootstrap";

export default function AddForm(props) {
    //empty state object
    const emptyNpc = {
        firstname: "",
        lastname: "",
        age: "",
        race: "",
        class: "",
        gender: "",
        residence: "",
        description: "",
        notes: "",
        image: "",
        game_id: `${props.currentGame}`,
        folder_id: 1
    }

    //setter for individual npcs
    const [npc, setNpc] = useState(emptyNpc)

    const handleChange = (event) => {
        //get values for every property of npc object
        const name = event.target.name;
        const value = event.target.value;
        //make copy w state - add those values
        setNpc((state) => ({
            ...state,
            [name]: value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(npc);
        setNpc(emptyNpc);
    }

    return (
        <Accordion flush className="accordion">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <span>
                        <img 
                        id="addnpc-logo"
                        src="https://image.flaticon.com/icons/png/512/1620/1620493.png"
                        alt="npc logo"
                        />create new NPC!
                    </span>
                </Accordion.Header>
                <Accordion.Body>
                    <form>
                        <div className="container" id="npc-form">
                            <div className="item">
                                <label> first name <br />
                                    <input 
                                    type="text"
                                    name="firstname"
                                    value={npc.firstname} 
                                    onChange={handleChange}/>
                                </label> <br /><br />
                                <label> last name <br />
                                    <input 
                                    type ="text"
                                    name="lastname"
                                    value={npc.lastname}
                                    onChange={handleChange}/>
                                </label> 
                            </div>
                            <div className="item">
                            <label> age <br />
                                    <input 
                                    type="text"
                                    name="age"
                                    value={npc.age}
                                    onChange={handleChange}
                                    id="age"/>
                                </label><br /><br />
                                <label> race <br />
                                    <input 
                                    type ="text"
                                    name="race"
                                    value={npc.race}
                                    onChange={handleChange}
                                    id="race"/>
                                </label>
                            </div>
                            <label className="item" id="description">description <br />
                                <textarea 
                                name="description"
                                value={npc.description}
                                onChange={handleChange}/>
                            </label>
                            <div className="item">
                                <label> class <br />
                                    <input 
                                    type ="text"
                                    name="class"
                                    value={npc.class}
                                    onChange={handleChange}
                                    id="class" />
                                </label><br /><br />
                                <label> residence <br />
                                    <input 
                                    type ="text"
                                    name="residence"
                                    value={npc.residence}
                                    onChange={handleChange}/>
                                </label>
                            </div>
                            <div className="item">
                                <label>gender <br />
                                    <select className="form-select" name="gender" value={npc.gender} onChange={handleChange}>
                                        <option />
                                        <option value="Female"> Female </option>
                                        <option value="Male"> Male </option>
                                        <option value="Other"> Other </option>
                                    </select>
                                </label> <br /> <br />
                                <label>
                                    image
                                    <input  
                                    type ="text"
                                    name="image"
                                    value={npc.image}
                                    onChange={handleChange}/>
                                </label>
                            </div>
                            <label className="item" id="notes">notes <br />
                                <textarea
                                name="notes"
                                value={npc.notes}
                                onChange={handleChange}/>
                            </label>
                        </div>
                        <button type="button" className="btn" onClick={handleSubmit} id="npc-btn">
                            <a>create npc</a>
                            <i class="gg-games"></i>
                        </button>
                    </form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}