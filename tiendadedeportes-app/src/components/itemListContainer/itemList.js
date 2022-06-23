import React from "react";
import { Link } from "react-router-dom";
import './itemListContainer.css'
import Item from "./item"
function ItemList({ items }) {
    console.log(items)
    return(
        <div className="padre">
            {items.map((iterar) => {
                return( 
                    <div key={items.id}>
                    <Link className="links" to={`/${iterar.category}/${iterar.id}`}>
                        <Item key={iterar.id} 
                        name={iterar.name} 
                        img={iterar.img} 
                        precio={iterar.precio}/>
                    </Link>
                    </div>
                )
            })}
        </div>
    )
}
export default ItemList