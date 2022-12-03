import React from "react";
// import { Link, NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    return(
    <footer> 
        <div className="redes-sociales redes-sociales-footer">
            <ul>
                <li>
                    {/* <NavLink to="/" className="facebook">
                        <i className="fa-brands fa-facebook">facebook</i>
                    </NavLink> */}
                    <a href="/" className="facebook">
                        <i className="fa-brands fa-facebook">facebook</i>
                    </a>
                </li>
                <li>
                    <a href="/" className="mail">
                        <i className="fa-solid fa-envelope">mail</i>
                    </a>
                </li>
                <li>
                    <a href="/" className="instagram">
                        <i className="fa-brands fa-instagram-square">instagram</i>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
    )
}
export default Footer;