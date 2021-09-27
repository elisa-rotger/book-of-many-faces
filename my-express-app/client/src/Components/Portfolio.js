import "./Portfolio.css";

export default function Portfolio(props) {
    return (
    <div className="wrap">
        <div>title</div>
        <div className="tab-content">
        <ul className="tiles">
            {props.npcs &&
            props.npcs.map(n => (
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