import React from "react";
import new_in from '../../../public/img/new_in.png';
import tejidos from '../../../public/img/tejidos.png';
import { Link } from "react-router-dom";


export function Ofertas({imagen, titulo, descubri, link}) {
    return (
        <div className="ofertas">
            <img src={imagen} alt="" className="this-img"/>
            <h4 className="oferta-titulo">{titulo}</h4>
            <p>{descubri}</p>
            <Link to={link} className="oferta">Descubrir</Link>
        </div>
    )
}

const Seccion2 = () => {
    return (
        <section className="seccion2-ofertas">
            <Ofertas imagen={new_in} titulo="New in!" descubri="Descubrí los nuevos diseños de esta temporada" link="/"/>
            <Ofertas imagen={tejidos} titulo="Tejidos de Temporada" descubri="Encontrá los tejidos mas lindos, suaves y calentitos" link="/"/>
        </section>
    )
}

export default Seccion2;