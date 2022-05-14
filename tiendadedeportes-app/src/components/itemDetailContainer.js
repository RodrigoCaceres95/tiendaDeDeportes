import React from "react";
import {useEffect, useState} from "react"
import { detalleBoca } from "./detalle_CamisetaBoca";
import ItemIterator from "./itemIterator"
function getDetail() {
    const data = new Promise((resolve)=> {
        setTimeout(() => {
            resolve(detalleBoca);
        }, 2000);
    });
    return data;
}
function ItemDetailContainer () {
    const [details, setDetails] = useState([]);
    useEffect(()=>{
        getDetail()    
            .then((res) =>{
            setDetails(res)
        })
        .catch((error) =>{console.log("Error log", error)})
}, [])
    return(
        <>
            <ItemIterator details={details}/>
        </>
    )
    }
export default ItemDetailContainer 