import React from "react";
import Item from "./item"
import ItemCount from "./itemcount";
function ItemList({ items }) {
    console.log(items)
    return(
        <div style={{display: "flex"}}>
            {items.map((iterar) => {
                return( 
                <Item key={iterar.id} 
                name={iterar.name} 
                img={iterar.img} 
                precio={iterar.precio}
                stock={iterar.stock}/>
                )
            })}
        </div>
    )
}
export default ItemList