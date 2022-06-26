import React from 'react'
import { Link } from 'react-router-dom'
import "../altPages/altPages.css"


export default function Faq() {
  return (
    <div>
      <div className='contenedorAltPages'>
        <div className='altPages__title'>
        <h1>F.A.Q. (Frequently Asked Questions)</h1>
        </div>
        <div className='altPages__article'>
        <h2>¿Quiénes somos?</h2>
            <p>Proin sollicitudin libero dignissim, faucibus orci id, auctor felis. Aliquam mattis, diam vel euismod elementum, metus magna commodo quam, vitae convallis libero lectus vitae est. Duis quis felis et lectus ornare posuere et sed nisi. Praesent porttitor eleifend condimentum. Donec sed mi nec ex placerat dignissim id sed enim. Para más informacion ver el apartado <Link to={'/Nosotros'}>Nosotros</Link></p>
        <h2>¿En cuantas cuotas podemos sacar los productos?</h2>
        <p> Ut nibh est, aliquam vitae dui non, bibendum faucibus sapien. Vivamus rutrum erat sed orci pretium suscipit at gravida erat. Phasellus posuere lacus a nunc tincidunt pulvinar. Pellentesque sed tellus quis nisl ultrices efficitur. Sed consequat quam vel egestas pretium. </p>
        <h2>¿A qué zonas hacen envíos?</h2>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla efficitur suscipit elit maximus commodo. Morbi et enim non massa cursus sodales. Praesent eleifend cursus eros, id congue nulla sollicitudin vitae. Ut dictum sit amet est eu cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
        </div>    
    </div>
    </div>
  )
}
