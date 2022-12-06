import React from "react";
import { NavLink } from "react-router-dom";


const LinksRedes = () => {
    return(
        <div className="redes-sociales redes-sociales-footer">
        <ul>
            <li>
                <NavLink to="/" className="facebook">
                    <i className="fa-brands fa-facebook">facebook</i>
                </NavLink>
            </li>
            <li>
                <NavLink to="/" className="mail">
                    <i className="fa-solid fa-envelope">mail</i>
                </NavLink>
            </li>
            <li>
                <NavLink to="/" className="instagram">
                    <i className="fa-brands fa-instagram-square">instagram</i>
                </NavLink>
            </li>
        </ul>
    </div>
    )
}

export default LinksRedes;