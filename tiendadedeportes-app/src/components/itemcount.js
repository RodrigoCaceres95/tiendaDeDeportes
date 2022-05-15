import React, { useState } from 'react';
import './itemcount.css'

 function ItemCount({stock}){
    const initial = 1
    const [onAdd, setCount] = useState(initial)
    return(
        <div className='contenedor'>
            <h2>{onAdd}</h2>
                <button className='boton' onClick={()=> {if(onAdd > initial){setCount(onAdd-1)}}}>(-)</button>
                <button className='boton'>Agregar al carrito</button>
                <button className='boton' onClick={()=>{if(onAdd < stock)setCount(onAdd+1)}}>(+)</button>
        </div>
    )
}
 export default ItemCount