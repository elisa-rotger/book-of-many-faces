import "./Portfolio.css";

export default function Portfolio(props) {
    return (
    <div className="wrap">
        <div className="search-bar">
            <span>search:</span>
            {/* TODO */}
            <input />
        </div>
        <div className="tab-content">
        <ul className="tiles">
            {props.npcs &&
            props.npcs.filter(n => n.game_id === props.currentGame).map(n => (
                <li key={n.id} className="mod-tile">
                    <div className="mod-image">
                        <img src={n.image} alt="description of the character"/>
                    </div>
                    <div className="tile-content">
                        <p>{n.firstname} {n.lastname}</p>
                    </div>
                </li>
            ))}
        </ul>
        </div>
    </div>
    )
}