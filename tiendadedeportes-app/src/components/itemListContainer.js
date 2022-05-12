import React from "react";
import {useEffect, useState} from "react"
import imgFondo from '../img/background.jpg';
import {prod} from "./productos";
import ItemList from "./itemList";
function ItemListContainer () {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        setTimeout(() => {
        const data = new Promise((resolve, reject)=> {
        resolve(prod)
    });
    data.then((data) =>{
        setItems(data)
    })
    data.catch((err) =>{
        console.log(err)
    })
}, [])
    }, 2000);
    return(
        <>
            <ItemList items={items}/>
        </>
    )
    }
export default ItemListContainer 
