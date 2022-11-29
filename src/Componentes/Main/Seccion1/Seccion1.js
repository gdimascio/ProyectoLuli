import React from "react";
import beba1 from '../../../public/img/beba1.png';
import bebe1 from '../../../public/img/bebe1.png';
import accesorios1 from '../../../public/img/accesorios1.png';

const Seccion1 = () => {
    return (
        <section className="seccion1-looks">
            <div className="look-beba look">
                <img src={beba1} alt="" className="look-img this-img"/>
                <h4 className="look-titulo">Look Beba</h4>
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