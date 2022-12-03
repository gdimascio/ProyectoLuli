import React from "react";
// import { NavLink } from "react-router-dom";

const Header = () => {
    return(
    <header>
        <div className="redes-sociales">
            <ul>
                <li>
                    {/* <NavLink to="/" className="facebook">
                        <i className="fa-brands fa-facebook">facebook</i>
                    </NavLink> */}
                    <a href="/" className="facebook">
                        <i className="fa-brands fa-facebook">facebook</i>
                    </a>
                </li>
                <li>
                    <a href="/" className="instagram">
                        <i className="fa-brands fa-instagram-square">instagram</i>
                    </a>
                </li>
            </ul>
        </div>

        <div className="titulo">
            <h1 className="titulo1">SCHÜTTERLE</h1>
            <h3 className="titulo2">- PEQUEÑAS COSTURAS-</h3>
            <h5 className="titulo3">BEBÉS 0 A 18 MESES</h5>
        </div>

        {/* <a href="/" className="cart-menu" onclick="display_menu()"><i className="fa-solid fa-bag-shopping"></i></a> */}

        <nav className="navbar">
                <li><a href="/">HOME</a></li>
                <li><a href="/bebe-nina">BEBÉ NIÑA</a></li>
                <li><a href="/bebe-nino">BEBÉ NIÑO</a></li>
                <li><a href="/accesorios">ACCESORIOS</a></li>
                {/*TODO*/}
                {/* <li><a href="/">SALE</a></li> */}
        </nav>

        {/* <a href="javascript:void(0);" className="burger-menu" onclick="display_menu('_burger-links')"><i className="fas fa-bars"></i></a> */}

        <div className="burger-links" id="_burger-links">
            <li><a href="/">HOME</a></li>
            <li><a href="/bebe-nina">BEBÉ NIÑA</a></li>
            <li><a href="/bebe-nino">BEBÉ NIÑO</a></li>
            <li><a href="/accesorios">ACCESORIOS</a></li>
            {/* TODO*/}
            {/*<li><a href="/">SALE</a></li> */}
        </div>
    </header>
    )
}

export default Header;