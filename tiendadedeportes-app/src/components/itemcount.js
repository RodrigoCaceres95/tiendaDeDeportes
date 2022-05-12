import React, { useState } from 'react';
import styled from 'styled-components';

 function ItemCount({stock}){
    const initial = 1
    const [onAdd, setCount] = useState(initial)
    return(
        <div>
            <h2>{onAdd}</h2>
                <button onClick={()=> {if(onAdd > initial){setCount(onAdd-1)}}}>(-)</button>
                <button>Agregar al carrito</button>
                <button onClick={()=>{if(onAdd < stock)setCount(onAdd+1)}}>(+)</button>
        </div>
    )
}
 export default ItemCount