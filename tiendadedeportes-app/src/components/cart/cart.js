import React, {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../cartContext/cartContext'
import Swal from "sweetalert2"
import CartItem from './cartItem'
import './cart.css'
const Cart = props => {

  const {clear, items} = useContext(CartContext)
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
    
  }, [items]);

  

  return (
    <>
      {
      show?
        <div className='containerCart'>
          <h1 >Carrito de compras</h1>
          <div >
            <table>
              <thead>
                <tr >
                  <th scope='col' >Articulo</th>
                  <th scope='col' >Cantidad</th>
                  <th scope='col' >Precio unitario</th>
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
          <Link to={'/'}>
          <button className='cartboton clear' onClick={()=> clear(  Swal.fire({icon:'warning',title:'Atención',text:'Todos los items fueron borrados'}))}>
            Vaciar carrito
          </button>
        </Link>
        <Link to='/checkout'><button className='cartboton'>Terminar mi compra</button>
        </Link>
        </div>
      :
        <div className='containerCart'>
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