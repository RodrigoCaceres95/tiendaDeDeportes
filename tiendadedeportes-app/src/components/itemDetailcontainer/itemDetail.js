import React from "react"
import ItemCount from "../itemcount";
import './itemDetailContainer.css'
const ItemDetail = ({detail}) =>{
    const onAdd = (number) => {
        console.log(`Has añadido ${number} prendas de este producto a tu carrito`)
        window.removeEventListener('onClick')
    }
    console.log(detail)
    // const { name, descripcion, tipo_camiseta, precio, escudo, marca, img, stock, articulo_color } = detail;
        return(
        <div className="contenedor">
            <img src={detail.img} alt={detail.name}/>
            <div className="detalles">
                <h3>{detail.name}</h3>
                <ul className="lista_detalles">
                    <li>Marca: {detail.marca}</li>
                    <li>Precio: {detail.precio}</li>
                    <li>Tipo de Camiseta: {detail.tipo_camiseta}</li>
                    <li>Tipo de Escudo: {detail.escudo}</li>
                    <li>Color: {detail.articulo_color} </li>
                    <li>Descripción: {detail.descripcion}</li>
                </ul>
                <ItemCount
                onAdd={onAdd} 
                stock={detail.stock} />
            </div>
        </div>
       )
    }
export default ItemDetail