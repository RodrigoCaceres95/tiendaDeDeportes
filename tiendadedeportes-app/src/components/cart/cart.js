import React, {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../cartContext/cartContext'
import CartItem from './cartItem'
import './cart.css'

const Cart = props => {

  const [addItem, removeItem, clear, isInCart, items] = useContext(CartContext)
  const [show,setShow] = useState(false)
  const [total,settotal] = useState(0)
  useEffect(() => {
    setTimeout(() => {      
      if(items.length>0){
        setShow(true)
      }
      let partial = 0
      items.forEach(item => {
        partial = partial + (item.precio*item.quantity)
      });
      settotal(partial)
    }, 1000);
    
  }, []);

  

  return (
    <>
      {
      show?
        <div className='container'>
          <h1 >Carrito de compras</h1>
          <div >
            <table>
              <thead>
                <tr >
                  <th scope='col' >Articulo</th>
                  <th scope='col' >Cantidad</th>
                  <th scope='col' >Precio por unidad</th>
                  <th scope='col' >Precio Total</th>
                  <th scope='col' >Eliminar del carito</th>
                </tr>
              </thead>
              <tbody>
                {items.map((value) => {
                return (
                  <CartItem key={value.id} data={value} />
                  );
                })}
              </tbody>
            </table>
            <div>
              Total a pagar ${total}
            </div>
          </div>
          <Link to={'/clear'}>
          <button className='cartboton clear' onClick={()=> clear()}>
            Vaciar carrito
          </button>
        </Link>
        <Link to='/checkout'><button className='cartboton'>Terminar mi compra</button>
        </Link>
        </div>
      :
        <div className='container'>
          <h1>Oops! Parece que no has agregado ningún item</h1>
          <div>

          <Link to="/"><h1>
              Ir a la pagina Principal
              </h1>
              </Link>
          </div>
          
        </div>
      }
      
    </>
  )
}



export default Cart