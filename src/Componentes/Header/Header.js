import React from "react";
// import { NavLink } from "react-router-dom";
import LinksRedes from "../LinksRedes/LinksRedes";
import Navbar from '../Navbar/Navbar.js';
// import { Container, Nav} from "react-bootstrap";
// import { Navbar} from "react-bootstrap";

const Header = () => {
    return(
    <header>
        <LinksRedes />

        <div className="titulo">
            <h1 className="titulo1">SCHÜTTERLE</h1>
            <h3 className="titulo2">- PEQUEÑAS COSTURAS-</h3>
            <h5 className="titulo3">BEBÉS 0 A 18 MESES</h5>
        </div>

        < Navbar />

    </header>
    )
}

export default Header;