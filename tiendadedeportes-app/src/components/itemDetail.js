import React from "react"
import ItemCount from "./itemcount";
import './itemDetailContainer.css'
const ItemDetail = (detail) =>{
    console.log(detail)
    const { name, descripcion, tipo_camiseta, precio, escudo, marca, src, stock, articulo_color } = detail;
        return(
        <div className="contenedor">
            <img className="img" src={src} alt={name}/>
            <div className="detalles">
                <h3>{name}</h3>
                <ul className="lista_detalles">
                    <li>Marca: {marca}</li>
                    <li>Precio: {precio}</li>
                    <li>Tipo de Camiseta: {tipo_camiseta}</li>
                    <li>Tipo de Escudo: {escudo}</li>
                    <li>Color: {articulo_color} </li>
                    <li>Descripción: {descripcion}</li>
                </ul>
                <ItemCount stock={stock} />
            </div>
        </div>
       )
    }
export default ItemDetail