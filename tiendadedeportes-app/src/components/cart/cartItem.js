import React, {useContext} from 'react'
import {CartContext} from '../cartContext/cartContext'
import {Link} from 'react-router-dom'
import './cart.css'


const CartItem = ({data}) => {
  const [addItem, removeItem, clear, isInCart, items] = useContext(CartContext)
  return (

    <tr className='tabla'>
      <td scope='col'>{data.name}</td>
      <td scope='col'>{data.quantity}</td>
      <td scope='col'>${data.precio}</td>
      <td scope='col'>${data.precio * data.quantity}</td>
      <td scope='col'>
        <Link to="/del">
          <button className='cartboton' onClick={() =>removeItem(data.id)}>
            Eliminar
          </button>
        </Link>
      </td>

    </tr>
  )
}



export default CartItem