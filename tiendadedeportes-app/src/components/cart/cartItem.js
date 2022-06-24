import React, {useContext} from 'react'
import {CartContext} from '../cartContext/cartContext'
import {Link} from 'react-router-dom'
import './cart.css'


const CartItem = ({data}) => {
  const {removeItem} = useContext(CartContext)
  return (

    <tr className='tabla'>
      <th scope='col'>{data.name}</th>
      <th scope='col'>{data.quantity}</th>
      <th scope='col'>${data.precio}</th>
      <th scope='col'>${data.precio * data.quantity}</th>
      <th scope='col'>
        <Link to="/">
          <button className='cartboton' onClick={() =>removeItem(data.id)}>
            Eliminar
          </button>
        </Link>
      </th>

    </tr>
  )
}



export default CartItem