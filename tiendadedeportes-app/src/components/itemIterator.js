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
                marca={iterar.marca}
                escudo={iterar.escudo}
                stock={iterar.stock}
                articulo_color={iterar.articulo_color}/>
                )
            })}
        </div>
    )
}
export default ItemIterator