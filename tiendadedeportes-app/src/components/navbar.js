import React from 'react';
import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';
import CartWidget from './cartWidget';
import './navbar.css'
function NavBar(){
    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    padding: 0 70px;
    color: white;
  `;
  const h2 = styled.h2`
  font-size: 1em;
  text-align: center;

  color: RGB(40, 42, 46);
  `
  
    return(
        <nav>
            <Title><a href='#'>Mi Deporte</a></Title>
            <Title> <a href='#'>Inicio</a></Title>
            <Title><a href='#'>Nosotros</a></Title>
            <Title><a href='#'>Ofertas</a></Title>
            <Title><a href='#'>FAQ</a></Title>
            <a href='#'><CartWidget /></a>
        </nav>
    )
}
export default NavBar