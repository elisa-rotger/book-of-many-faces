import React, { useEffect, useState } from "react";
import PopUp from "./PopUp";
import "./Portfolio.css";

export default function Portfolio(props) {
    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [featured, setFeatured] = useState(null);
    const [folders, setFolders] = useState([]);
    const [folder, setFolder] = useState("");

    useEffect(() => {
        fetch("/folders/mvp")
        .then(result => result.json())
        .then(folders => { setFolders(folders) })
        .catch(error => { console.log(error) })
    }, [folders]);

    const filterNPCS = (npcs, search) => {
        if(!search) { return npcs }
        return npcs.filter((npc) => {
            const name = npc.firstname.toLowerCase() + npc.lastname.toLowerCase();
            return name.includes(search);
        })
    };

    const filteredNPCS = filterNPCS(props.npcs, search);

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const addFolder = (folder) => {
        fetch("/folders/mvp", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ folder: folder, image: "http://www.newdesignfile.com/postpic/2013/12/transparent-folder-icon_247505.png" })
          })
            .then(result => result.json())
            .then(folders => {
              setFolders(folders)
            })
            .catch(error => { console.log(error.message) })
    }

    const updateFolder = (folder, id) => {
        // console.log(folder, id)
        fetch(`/folders/mvp/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({folder})
        })
        .then(result => result.json())
        .then(folders => { setFolders(folders) })
        .catch(error => { console.log(error) })
    }

    const handleDelete = (id) => {
        props.onDelete(id);
    }

    const openPopup = (id) => {
        setIsOpen(true);
        const index = props.npcs.findIndex(n => n.id == id)
        setFeatured(props.npcs[index]);
    }

    const closePopup = () => {
        setIsOpen(false);
    }

    const updateNPC = (updatedNPC) => {
        props.updateNPC(updatedNPC);
        setFeatured(updatedNPC);
    }

    return (
    <div className="wrap">
        <div className="search-bar">
            <span className="folder">create folder
                <button type="button" className="btn" onClick={() => addFolder("folder")} >
                    <i class="gg-folder-add"></i>
                </button>
            </span>
            <span>search:</span>
            <input
            type="text"
            name="search"
            value={search}
            onChange={handleChange} />
        </div>

        <div className="tab-content">
            <ul className="tiles">
                {props.npcs &&
                filteredNPCS.filter(n => n.game_id === props.currentGame).map(n => (
                    <li key={n.id} className="mod-tile">
                        <div className="dropdown" id="droptile">
                            <button className="dropbtn" type="button" id="tile-btn"> + </button>
                            <div className="dropdown-content" id="drop-content">
                                {/* TODO */}
                                <a className="dropdown-item">Favourite</a>
                                <a className="dropdown-item">Kill</a>
                                <a className="dropdown-item dropdown" id="send-drop">
                                    <button type="button" className="btn">
                                    Send to...
                                    </button>
                                    <div className="dropdown-content" id="send-content">
                                        {folders && folders.map((f) => (
                                            <a className="dropdown-item" key={f.id}>{f.folder}</a>
                                        ))}
                                    </div>
                                </a>
                                <a className="dropdown-item btn-outline-danger" id="delete-btn" onClick={() => handleDelete(n.id)}>Delete</a>
                            </div>
                        </div>
                        <div className="mod-image">
                            <img src={n.image} alt="description of the character" onClick={() => openPopup(n.id)}/>
                        </div>
                        <div className="tile-content">
                            <p>{n.firstname} {n.lastname}</p>
                        </div>
                    </li>
                ))}
                {folders && 
                folders.map(f => (
                    <li key={f.id} className="mod-tile">
                        <div className="mod-image">
                            <img src={f.image} alt="new folder"/>
                        </div>
                        {f.folder === "folder" ? 
                        <div className="tile-content">
                            <form>
                                <input 
                                type="text" 
                                placeholder="new folder"
                                name="folder"
                                value={folder}
                                onChange={e => setFolder(e.target.value)} 
                                />
                                <button type="button" onClick={() => updateFolder(folder, f.id)}>update</button>
                            </form>
                        </div>
                        : 
                        <div>
                            <p>{f.folder}</p>
                        </div>}
                    </li>
                ))}
            </ul>
            {isOpen && <PopUp handleClose={closePopup} npc={featured} updateNPC={(updatedNPC) => updateNPC(updatedNPC)} />}
        </div>
    </div>
    )
}