import React from "react";
import {useEffect, useState} from "react"
import { prod } from "./productos";
import ItemIterator from "./itemIterator"
import {useParams} from "react-router-dom"
function getDetail() {
    const data = new Promise((resolve)=> {
        setTimeout(() => {
            resolve(prod);
        }, 2000);
    });
    return data;
}
function ItemDetailContainer () {
    const [details, setDetails] = useState([]);
    let id = useParams()
    let camisetaid = id.id
    console.log(camisetaid)
    useEffect(()=>{
        getDetail()    
            .then((res) =>{
            setDetails(res)
        })
        .catch((error) =>{console.log("Error log", error)})
}, [camisetaid])
    return(
        <>
            <ItemIterator details={details}/>
        </>
    )
    }
export default ItemDetailContainer 