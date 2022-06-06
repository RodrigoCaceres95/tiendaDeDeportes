import React from "react";
import {useEffect, useState} from "react"
import ItemDetail from "./itemDetail"
import { useParams } from "react-router-dom";
import './itemDetailContainer.css';
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import {db} from '../firebaseConfig/firebaseConfig'
function ItemDetailContainer () {
    const {id} = useParams()
    const [detail, setDetail] = useState({});
    useEffect(()=>{
        const itemCollection = async() =>{
        const q = query(collection(db, "products"), where(documentId(), '==', id));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        console.log(docs)
        setDetail(docs[0]);};
        itemCollection()
    }, [id])
    let initial = 1;
    return(
        <div className="body">
        <ItemDetail
            detail={detail}
            initial={initial}/>
        </div>
    )
    }
export default ItemDetailContainer 