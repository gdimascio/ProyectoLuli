import React from "react";
// import { Link } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

import beba1 from '../../../public/img/beba1.png';
import bebe1 from '../../../public/img/bebe1.png';
import accesorios1 from '../../../public/img/accesorios1.png';
import intro from '../../../public/img/img1.png';

const Seccion1 = () => {
    return (
        <section className="seccion1-looks">

            <div className="intro-slide">
                <a href="/">
                    <img src={intro} alt="" className="this-img"/>
                </a>
            </div>

            <div className="look-beba look">
                <img src={beba1} alt="" className="look-img this-img"/>
                <h4 className="look-titulo">Look Beba</h4>


                {/* <NavLink to="/" className="comprar-beba comprar">
                    Comprar
                </NavLink> */}


                <a href="/" className="comprar-beba comprar">Comprar</a>
            </div>

            <div className="look-bebe look">
                <img src={bebe1} alt="" className="look-img this-img"/>
                <h4 className="look-titulo">Look Bebé</h4>
                <a href="/" className="comprar-bebe comprar">Comprar</a>
            </div>
            <div className="look-bebe look">
                <img src={accesorios1} alt="" className="look-img this-img"/>
                <h4 className="look-titulo">Accesorios</h4>
                <a href="/" className="comprar-accesorios comprar">Comprar</a>
            </div>
        </section>
    )
}

export default Seccion1;