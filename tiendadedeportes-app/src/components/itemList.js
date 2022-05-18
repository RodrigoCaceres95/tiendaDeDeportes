import React from "react";
import {prod} from './productos'
import { Link } from "react-router-dom";
import Item from "./item"
function ItemList({ items }) {
    console.log(items)
    return(
        <div style={{display: "flex"}}>
            {items.map((iterar) => {
                return( 
                <div key={prod.id}>
                <Link to={`/detail/${iterar.id}`}>
                <Item key={iterar.id} 
                name={iterar.name} 
                img={iterar.img} 
                precio={iterar.precio}
                stock={iterar.stock}/>
                </Link>
                </div>
                )
            })}
        </div>
    )
}
export default ItemList