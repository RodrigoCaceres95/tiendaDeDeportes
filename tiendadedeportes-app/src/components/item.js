import React from "react";

const Item = ({item}) =>{
   const { name, precio, marca, image } = item;
   return(
    <div>
        <img src={image} alt={name}/>
        <h4>{name}</h4>
        <h6>Marca: {marca}</h6>
        <p>{precio}</p>
    </div>
   )
}
export default Item