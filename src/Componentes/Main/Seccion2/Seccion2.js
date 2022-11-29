import React from "react";
import new_in from '../../../public/img/new_in.png';
import tejidos from '../../../public/img/tejidos.png';


const Seccion2 = () => {
    return (
        <section className="seccion2-ofertas">
            <div className="new-in ofertas">
                <img src={new_in} alt="" className="this-img"/>
                <h4 className="oferta-titulo">New in!</h4>
                <p>Descubrí los nuevos diseños de esta temporada</p>
                <a href="/" className="oferta">Descubrir</a>
            </div>

            <div className="tej-temp ofertas">
                <img src={tejidos} alt="" className="this-img"/>
                <h4 className="oferta-titulo">Tejidos de Temporada</h4>
                <p>Encontrá los tejidos mas lindos, suaves y calentitos</p>
                <a href="/" className="oferta">Descubrir</a>
            </div>
        </section>
    )
}

export default Seccion2;