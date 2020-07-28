import React from 'react';
import Button from './../Button';
import logo from './../../Assets/Images/logo-vanflix.png';
import './Menu.css';

const Menu = () =>{
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logo} alt="VanFlix Logo"/>
            </a>
            
            <Button href="/" className="ButtonLink">
                {/* {props.children} */}
                Novo Vídeo 
            </Button>
        </nav>
    )
}

export default Menu;