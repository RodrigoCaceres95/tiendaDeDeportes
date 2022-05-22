import React from "react";
import {useEffect, useState} from "react"
import ItemDetail from "./itemDetail"
import { useParams } from "react-router-dom";
import {getDetail} from "../productos";
import './itemDetailContainer.css';
// import ItemIterator from "./itemIterator"
function ItemDetailContainer () {
    const [detail, setDetail] = useState({});
    const {id} = useParams()
    console.log(id.id)
    useEffect(()=>{
        getDetail(id)    
            .then((res) =>{
            setDetail(res)
        })
        .catch((error) =>{console.log("Error log", error)})
        console.log(detail)
    }, [])
    return(
        <div className="body">
        <ItemDetail detail={detail}/>
        </div>
    )
    }
export default ItemDetailContainer 