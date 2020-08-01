import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import logo from '../../Assets/Images/logo-vanflix.png';
import './Menu.css';

const Menu = () => (
  <nav className="Menu">
    <Link to="/">
      <img className="Logo" src={logo} alt="VanFlix Logo" />
    </Link>

    <Button href="/cadastro/video" className="ButtonLink">
      {/* {props.children} */}
      Novo Vídeo
    </Button>
  </nav>
);

export default Menu;
