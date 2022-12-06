import React from "react";
import Conjuntos from "../Conjuntos/Conjuntos";
import bebe1 from '../../../public/img/bebe1.png';
import bebe2 from '../../../public/img/bebe2.png';
import { NavLink } from "react-router-dom";


const Nino = () => {
    return(
        <section>
            {/* <h1>Niño</h1> */}

            <div className="conjuntos">

                <NavLink to={"/bebe-nino"}>< Conjuntos modelo="Vestido Begonia" precio="$4.500,00" imagen={bebe1}/></NavLink>
                <NavLink to={"/bebe-nino"}>< Conjuntos modelo="Enterito Magnolia" precio="$4.500,00" imagen={bebe2}/></NavLink>
                <NavLink to={"/bebe-nino"}>< Conjuntos modelo="Enterito Grisina" precio="$4.500,00" imagen={bebe1}/></NavLink>
                <NavLink to={"/bebe-nino"}>< Conjuntos modelo="Vestido Gardenia" precio="$4.500,00" imagen={bebe2}/></NavLink>
                <NavLink to={"/bebe-nino"}>< Conjuntos modelo="Vestido Verbena" precio="$4.500,00" imagen={bebe1}/></NavLink>
                <NavLink to={"/bebe-nino"}>< Conjuntos modelo="Enterito Lotus" precio="$4.500,00" imagen={bebe2}/></NavLink>

            </div>
        </section>
    )
}
export default Nino;