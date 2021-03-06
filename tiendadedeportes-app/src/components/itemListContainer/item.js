import React from "react";
// import ItemCount from "./itemcount";
import './itemListContainer.css'
const Item = (item) =>{
   const { name, img } = item;
   return(
        <div className="contenedor">
            <div className="card">
            <div className="imagen">
                <img width={300} src={img} alt={name}/>
            </div>
            <div className="info">
                <h3 className="info_name">{name}</h3>
            </div>
            </div>
        </div>
   )
}
export default Item