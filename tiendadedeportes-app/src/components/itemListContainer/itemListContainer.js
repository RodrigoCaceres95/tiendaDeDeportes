import React from "react";
import {useEffect, useState, useContext} from "react"
import ItemList from "./itemList";
import { getProducts } from "../productos";
// import {db} from '../firebaseConfig/firebaseConfig'
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig/firebaseConfig";
import { useParams } from "react-router-dom";
import { CartContext } from "../cartContext/cartContext";


function ItemListContainer() {
    const [items, setItems] = useState([]);
    const { setAllItem } = useContext(CartContext);
  
    const { categoryID } = useParams()
  
    useEffect(() => {
      const itemCollection = async () => {
        const q = query(collection(db, "camisetas"));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setItems(docs);
        setAllItem(docs);
        if (categoryID === undefined) {
          setItems(docs);
        } else {
          setItems(docs.filter((elem) => elem.category === categoryID));
        }
      };
      itemCollection();
    }, [categoryID, setAllItem]);
    return(
        <div key={items.id} className="fondo">
        <ItemList items={items}/>
        </div>
    )
    }
export default ItemListContainer 
