import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/pedroflix.png';
import './menu.css'
//import ButtonLink from './components/buttonlink';
import Button from '../button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} className="Logo" alt="pedroflix logo"/>
            </Link>
            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>

    );
}

export default Menu;