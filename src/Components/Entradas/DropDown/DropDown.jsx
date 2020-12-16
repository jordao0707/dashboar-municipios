import React from 'react'
import './DropDown.css'
const DropDown = ({ nome, lista }) => {
    return (
        <div className="in">
            <div>
                <span className="title">{nome}</span>
            </div>
            <select className="dd">
                {lista.map(
                    op => {
                        return (
                            <option key={op}>{op}</option>
                        )
                    })}
            </select>
        </div>
    );
}
export default DropDown;