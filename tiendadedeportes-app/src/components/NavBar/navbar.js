import React, {useContext} from 'react';
import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';
import CartWidget from '../cartWidget';
import './navbar.css'
import { CartContext } from "../cartContext/cartContext";
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
            <Link to={'/'}>
            <Title>Mi Deporte</Title>
            </Link>
            <Link to={'/'}>
            <Title> Inicio</Title>
            </Link>
            <Link to={'/category/Nosotros'}>
            <Title>Nosotros</Title>
            </Link>
            <Link to={'/category/Ofertas'}>
            <Title>Ofertas</Title>
            </Link>
            <Link to={'category/FaQ'}>
            <Title>FAQ</Title>
            </Link>
            <Link to={'/category/Cart'}>
            <CartWidget/>
            </Link>
        </nav>
    )
}
export default NavBar