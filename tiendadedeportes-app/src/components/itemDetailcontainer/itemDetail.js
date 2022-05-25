import React, {useContext} from "react"
import ItemCount from "../itemcount";
import { CartContext } from "../cartContext/cartContext";
import './itemDetailContainer.css'
const ItemDetail = ({detail}) =>{

    const onAdd = () => {
        return (
            <CartContext.Provider>
                {({cartAdd}) =>(
                    <></>
                )}
            </CartContext.Provider>);
    }
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