import React from "react";
import ItemDetail from "./itemDetail";
function ItemIterator({ details }) {
    console.log(details)
    return(
        <div>
            {details.map((iterar) => {
                return( 
                <ItemDetail key={iterar.id} 
                name={iterar.name} 
                src={iterar.src[0]} 
                descripcion={iterar.descripcion}
                tipo_camiseta={iterar.tipo_camiseta} 
                precio={iterar.precio}
                escudo={iterar.escudo}
                stock={iterar.stock}/>
                )
            })}
        </div>
    )
}
export default ItemIterator