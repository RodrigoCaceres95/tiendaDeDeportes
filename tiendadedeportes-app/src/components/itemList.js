import React from "react";
import Item from "./item"
function ItemList({items}) {
    
    return(
        <div>
            {items.map((iterar) => {
                return <Item key={iterar.id} name={iterar.name} img={iterar.img} precio={iterar.precio}/>
            })}
        </div>
    )
}
export default ItemList