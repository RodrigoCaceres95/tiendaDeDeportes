import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <div className='containerFooter'>
        <div>
        <h2>Mi Deporte</h2>
        </div>
        <div className='footerList'>
        <ul>
            <li>Archivo</li>
            <li>Nosotros</li>
            <li>Telefono: 388-4349281</li>
            <a rel='noreferrer' target={'_blank'} href='https://github.com/RodrigoCaceres95'>
                Github
            </a>
        </ul>
        </div>
    </div>
  )
}
