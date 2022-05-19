import React from "react";
import ItemDetail from "./itemDetail";
function ItemIterator({ details }) {
    console.log(details)
    return(
        <div>
            {details.map((iterar) => {
                return( 
                    <div key={iterar.id}>
                <ItemDetail  
                name={iterar.name} 
                img={iterar.img} 
                descripcion={iterar.descripcion}
                tipo_camiseta={iterar.tipo_camiseta} 
                precio={iterar.precio}
                marca={iterar.marca}
                escudo={iterar.escudo}
                stock={iterar.stock}
                articulo_color={iterar.articulo_color}/>
                </div>
                )
            })}
        </div>
    )
}
export default ItemIterator