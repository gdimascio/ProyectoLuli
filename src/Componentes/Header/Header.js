import React from "react";




const Header = () => {
    return(
    <header>
        <div className="redes-sociales">
            <ul>
                <li><a href="/" className="facebook"><i className="fa-brands fa-facebook"></i></a></li>
                <li><a href="/" className="instagram"><i className="fa-brands fa-instagram-square"></i></a></li>
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
                <li><a href="/">BEBÉ NIÑA</a></li>
                <li><a href="/">BEBÉ NIÑO</a></li>
                <li><a href="/">ACCESORIOS</a></li>
                <li><a href="/">SALE</a></li>
        </nav>

        {/* <a href="javascript:void(0);" className="burger-menu" onclick="display_menu('_burger-links')"><i className="fas fa-bars"></i></a> */}

        <div className="burger-links" id="_burger-links">
            <li><a href="/">HOME</a></li>
            <li><a href="/">BEBÉ NIÑA</a></li>
            <li><a href="/">BEBÉ NIÑO</a></li>
            <li><a href="/">ACCESORIOS</a></li>
            <li><a href="/">SALE</a></li>
        </div>

    </header>

    )
}

export default Header;