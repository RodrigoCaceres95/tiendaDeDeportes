import React from "react";
import {useEffect, useState} from "react"
import { prod } from "./productos";
import ItemList from "./itemList";
function getProducts() {
    const data = new Promise((resolve)=> {
        resolve(prod);
    });
    return data;
}
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
        <>
            <ItemList items={items}/>
        </>
    )
    }
export default ItemListContainer 
