import React from "react";
// import ItemCount from "./itemcount";
import './itemListContainer.css'
const Item = (item) =>{
    console.log(item)
   const { name, precio, marca, img } = item;
   return(
        <div className="contenedor">
            <div className="card">
            <div className="imagen">
                <img width={300} src={img} alt={name}/>
            </div>
            <div className="info">
                <h3>{name}</h3>
                <h3>{precio}</h3>
            </div>
            </div>
        </div>
   )
}
export default Item