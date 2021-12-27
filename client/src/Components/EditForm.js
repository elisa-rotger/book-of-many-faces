import { useState } from "react";
import "./EditForm.css"

const EditForm = (props) => {
    const [updated, setUpdated] = useState(props.npc);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUpdated((state) => ({
            ...state,
            [name]: value,
        }))
    }

    const handleSubmit = (updatedNPC) => {
        props.onSubmit(updatedNPC);
        props.closeEdit();
    }

    return (
    <div>
        <form className="edit-form">
            <label className="item">
                <span>first name</span> <br />
                <input 
                type="text"
                name="firstname"
                value={updated.firstname}
                onChange={handleChange} />
            </label>
            <label className="item">
                <span>last name</span> <br />
                <input
                type="text"
                name="lastname"
                value={updated.lastname}
                onChange={handleChange} />
            </label>
            <label className="item">
                <span>age</span> <br />
                <input               
                type="text"
                name="age"
                value={updated.age}
                onChange={handleChange} />
            </label>
            <label className="item">
                <span>race</span> <br />
                <input                
                type="text"
                name="race"
                value={updated.race}
                onChange={handleChange} />
            </label>
            <label className="item">
                <span>class</span> <br />
                <input                 
                type="text"
                name="class"
                value={updated.class}
                onChange={handleChange} />
            </label>
            <label className="item">
                <span>gender</span> <br />
                <select className="form-select" name="gender" value={updated.gender} onChange={handleChange}>
                    <option />
                    <option value="Female"> Female </option>
                    <option value="Male"> Male </option>
                    <option value="Other"> Other </option>
                </select>
            </label>
            <label className="item">
                <span>residence</span> <br />
                <input 
                type="text"
                name="residence"
                value={updated.residence}
                onChange={handleChange}/>
            </label>
            <label className="item" id="up-image">
                <span>image</span> <br />
                <input                 
                type="text"
                name="image"
                value={updated.image}
                onChange={handleChange}/>
            </label><br />
            <label className="item" id="up-description">
                <span>description</span> <br />
                <textarea 
                name="description"
                value={updated.description}
                onChange={handleChange} />
            </label>
            <label className="item" id="up-notes">
                <span>notes</span> <br />
                <textarea
                name="notes"
                value={updated.notes} 
                onChange={handleChange}/>
            </label>
            <button type="button" onClick={() => handleSubmit(updated)}>update npc</button>
        </form>
    </div>)
}

export default EditForm;