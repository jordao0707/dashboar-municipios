import React from 'react'
import "./Numerico.css";
const Numerico = ({ nome, valor }) => {
    return (
        <div className="in">
            <div>
                <span className="tituloDD">{nome}</span>
            </div>
            <span id = "val">{valor}</span>
        </div>
    );
}
export default Numerico;