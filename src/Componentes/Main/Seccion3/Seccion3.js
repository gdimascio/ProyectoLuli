import React from "react";


const Seccion3 = () => {
    return (
        <section className="seccion3-misc">
            <span></span>
            <div className="misc talles">
                {/* <img src="" alt="Img-remera"> */}
                <i className="fa-solid fa-shirt"></i>
                <div className="misc-info">
                    <h4>Tabla de talles</h4>
                    <a href="#"><i className="fa-solid fa-chevron-right"></i>Ver tabla</a>
                </div>
            </div>
            <div className="misc cambios">
                {/* <img src="" alt="Img-dev"> */}
                <i className="fa-solid fa-arrows-rotate"></i>
                <div className="misc-info">
                    <h4>Cambios y devoluciones</h4>
                    <a href="#"><i className="fa-solid fa-chevron-right"></i>Ver condiciones</a>
                </div>
            </div>
            <div className="misc envios">
                {/* <img src="" alt="Img-envio"> */}
                <i className="fa-solid fa-boxes-stacked"></i>
                <div className="misc-info">
                    <h4>Envíos a todo el país</h4>
                    <a href="#"><i className="fa-solid fa-chevron-right"></i>Ver detalle</a>    
                </div>
            </div>
        </section>
    )
}

export default Seccion3;