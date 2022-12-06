import React from "react";
import { Link } from "react-router-dom";


export function Misc({titulo, link, ver}) {
    return (
        <div className="misc">
            {/* <img src="" alt="Img-remera"> */}
            {/* <i className="fa-solid fa-shirt"></i> */}
            <div className="misc-info">
                <h4>{titulo}</h4>
                <Link to={link}><i className="fa-solid fa-chevron-right">{ver}</i></Link>
            </div>
        </div>
    )
}

const Seccion3 = () => {
    return (
        <section className="seccion3-misc">
            <span></span>
            <div>
                <Misc titulo="Tabla de talles" link="/" ver="Ver tabla"/>
                <Misc titulo="Cambios" link="/" ver="Ver condiciones"/>
                <Misc titulo="Envíos a todo el país" link="/" ver="Ver detalle"/>
            </div>
        </section>
    )
}

export default Seccion3;