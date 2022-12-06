import React from "react";
import Conjuntos from "../Conjuntos/Conjuntos";
import beba1 from '../../../public/img/beba1.png';
import beba2 from '../../../public/img/beba2.png';
import { NavLink } from "react-router-dom";


const Nina = () => {
    return(
        <section>
            {/* <h1>Niña</h1> */}

            <div className="conjuntos">

                <NavLink to={"/bebe-nina"}>< Conjuntos modelo="Vestido Begonia" precio="$4.500,00" imagen={beba1}/></NavLink>
                <NavLink to={"/bebe-nina"}>< Conjuntos modelo="Enterito Magnolia" precio="$4.500,00" imagen={beba2}/></NavLink>
                <NavLink to={"/bebe-nina"}>< Conjuntos modelo="Enterito Grisina" precio="$4.500,00" imagen={beba1}/></NavLink>
                <NavLink to={"/bebe-nina"}>< Conjuntos modelo="Vestido Gardenia" precio="$4.500,00" imagen={beba2}/></NavLink>
                <NavLink to={"/bebe-nina"}>< Conjuntos modelo="Vestido Verbena" precio="$4.500,00" imagen={beba1}/></NavLink>
                <NavLink to={"/bebe-nina"}>< Conjuntos modelo="Enterito Lotus" precio="$4.500,00" imagen={beba2}/></NavLink>

            </div>
        </section>
    )
}
export default Nina;