import React from "react";
import ItemCount from "./itemcount";
const Item = (item) =>{
    console.log(item)
   const { name, precio, marca, img, stock } = item;
   return(
    <div>
        <img src={img} alt={name} width="300px"/>
        <h3>{name}</h3>
        <h4>Marca: {marca}</h4>
        <p>{precio}</p>
        <ItemCount stock={stock} />
    </div>
   )
}
export default Item