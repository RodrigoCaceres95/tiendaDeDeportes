import * as React from 'react';
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

    return(
        <nav>
            <Link to={'/'}>
            <Title>Mi Deporte</Title>
            </Link>
            <Link to={'/Nosotros'}>
            <Title>Nosotros</Title>
            </Link>
            <Link to={'/Categorias'}>
            <Title>Categorías</Title>
            </Link>
            <Link to={'/FaQ'}>
            <Title>FAQ</Title>
            </Link>
            <Link to={'/category/Cart'}>
            <CartWidget/>
            </Link>
        </nav>
    )
}
export default NavBar