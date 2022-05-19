import React from "react";
import {useEffect, useState} from "react"
import ItemList from "./itemList";
import { getProducts } from "../productos";
function ItemListContainer () {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        getProducts()    
            .then((res) =>{
            setItems(res)
        })
        .catch((error) =>{console.log("Error log", error)})
}, [])
    return(
        <div key={items.id} className="fondo">
        <ItemList items={items}/>
        </div>
    )
    }
export default ItemListContainer 
