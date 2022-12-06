import React from "react";
import { Link } from 'react-router-dom'

import beba1 from '../../../public/img/beba1.png';
import bebe1 from '../../../public/img/bebe1.png';
// import accesorios1 from '../../../public/img/accesorios1.png';
import intro from '../../../public/img/img1.png';

export function Looks({imagen, titulo, link}) {
    return (
        <div className="look">
            <img src={imagen} alt="" className="look-img this-img"/>
            <h4 className="look-titulo">{titulo}</h4>
            <Link to={link} className="comprar"> Comprar </Link>
        </div>
    )
}

const Seccion1 = () => {
    return (
        <section className="seccion1-looks">
            <div className="intro-slide">
                <Link to={"/"}>
                    <img src={intro} alt="" className="this-img"/>
                </Link>
            </div>

            <Looks imagen={beba1} titulo="Look Beba" link="/bebe-nina"/>
            <Looks imagen={bebe1} titulo="Look Bebé" link="/bebe-nino"/>
            {/* <Looks imagen={accesorios1} titulo="Accesorios" link="/accesorios"/> */}
            
        </section>
    )
}

export default Seccion1;