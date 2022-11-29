import React from "react";
import './Footer.css';
// import 'https://proy-luli.netlify.app/public/css/style.css';
// import {Route, Routes} from "react-router-dom";
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    return(
    <footer> 
        <div className="redes-sociales redes-sociales-footer">
            <ul>
                <li>
                    <a href="/" className="facebook"><FontAwesomeIcon icon="fa-brands fa-facebook"/>
                        Facebook
                    </a>
                </li>

                <li>
                    <a href="/" className="mail"><FontAwesomeIcon icon="fa-solid fa-envelope"/>
                        Mail
                    </a>
                </li>

                <li>
                    <a href="/" className="instagram"><FontAwesomeIcon icon="fa-brands fa-instagram-square"/>
                        instagram
                    </a>
                </li>
            </ul>
        </div>
    </footer>
    )
}

export default Footer;