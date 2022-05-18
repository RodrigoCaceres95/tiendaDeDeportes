import React from "react";
import {useEffect, useState} from "react"
import { prod } from "./productos";
import axios from 'axios'
import ItemIterator from "./itemIterator"
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
    useEffect(()=>{
        axios('./productos/1')
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