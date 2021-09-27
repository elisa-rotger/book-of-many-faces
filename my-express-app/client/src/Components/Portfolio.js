import React, { useState } from "react";

export default function Portfolio(props) {
    return (
    <div>
        Hi!
        <ul>
            {props.npcs &&
            props.npcs.map(n => (
                <li key={n.id}>
                    name: {n.firstname} {n.lastname}
                </li>
            ))}
        </ul>
    </div>
    )
}