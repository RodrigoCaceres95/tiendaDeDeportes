import React from 'react';
import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';
function NavBar(){
    const Nav = styled.nav`
        height: 80;
        display: flex;
        justify-content: space-evenly;
        padding: 0.5rem;
    `;
    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: RGB(40, 42, 46);
  `;
  const h2 = styled.h2`
  font-size: 1em;
  text-align: center;
  color: RGB(40, 42, 46);
  `
  
    return(
        <Nav>
            <Title>Mi Deporte</Title>
            <Title>Inicio</Title>
            <Title>Nosotros</Title>
            <Title>Ofertas</Title>
            <Title>FAQ</Title>
        </Nav>
    )
}
export default NavBar