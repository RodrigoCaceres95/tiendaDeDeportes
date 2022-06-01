import React, {useContext, useState} from "react"
import ItemCount from "../itemcount";
import { CartContext } from "../cartContext/cartContext";
import './itemDetailContainer.css'
const ItemDetail = ({detail}) =>{
    const [addItem] = useContext(CartContext)
    const [cart, setCart] = useState(0)
    // const { name, descripcion, tipo_camiseta, precio, escudo, marca, img, stock, articulo_color } = detail;
    const sendToAddItem = {
        id: detail.id,
        name: detail.name,
        precio: detail.precio,
        img: detail.img,
        quantity: cart,
      }
      const onAdd = (number) => {
        setCart(number);
        sendToAddItem.quantity = Number(number)
        addItem(sendToAddItem)
      };
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