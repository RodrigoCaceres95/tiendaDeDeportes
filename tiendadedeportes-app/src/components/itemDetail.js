import React from "react"
import ItemCount from "./itemcount";
const ItemDetail = (detail) =>{
    console.log(detail)
    const { name, descripcion, tipo_camiseta, precio, escudo, marca, src, stock } = detail;
        return(
        <div>
            <img src={src} alt={name} width="300px"/>
            <h3>{name}</h3>
            <h4>Marca: {marca}</h4>
            <h4>{precio}</h4>
            <p>{descripcion}</p>
            <p>Tipo de Camiseta: {tipo_camiseta}</p>
            <p>Tipo de Escudo: {escudo}</p>
            <ItemCount stock={stock} />
        </div>
       )
    }
export default ItemDetail