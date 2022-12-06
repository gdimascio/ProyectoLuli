import React from 'react'

export default function Conjuntos({ modelo, precio, imagen}) {
    return (
        <div className="conjunto" id="conjunto-nina">
                <img src={imagen} alt="imagen?" />
                <h3>{modelo}</h3>
                <span></span>
                <h5>{precio}</h5>
        </div>
    )
}

