import React from 'react';
import Logo from '../../assets/img/pedroflix.png';
import './menu.css'
//import ButtonLink from './components/buttonlink';
import Button from '../button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} className="Logo" alt="pedroflix logo"/>
            </a>
            <Button as="a" href="/" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>

    );
}

export default Menu;