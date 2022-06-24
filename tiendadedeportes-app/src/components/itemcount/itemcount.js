import React, { useState } from 'react';
import './itemcount.css'
import {Link} from 'react-router-dom'
 function ItemCount({stock, onAdd}){
    const initial = 1
    const [number, setCount] = useState(initial)
    return(
        <div className='botonesgral'>
            <h2 className='number'>{number}</h2>
                <button className='boton' onClick={()=> {if(number > initial){setCount(number-1)}}}>(-)</button>
                <Link to={'/category/Cart'}>
                <button className='boton'onClick={()=>onAdd(number)}>Agregar al carrito</button>
                </Link>
                <button className='boton' onClick={()=>{if(number < stock)setCount(number+1)}}>(+)</button>
        </div>
    )
}
 export default ItemCount