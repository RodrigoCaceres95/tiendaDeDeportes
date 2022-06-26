import {createContext, useState} from "react"
import Swal from "sweetalert2"
export const CartContext = createContext()
export const CartProvider = ({children}) =>{
    const [items, setAllItem] = useState([])
    const addItem = (data) => {

      let itemFound = undefined

      const newProduct = {
        id: data.id,
        name: data.name,
        precio: data.precio,
        img: data.img,
        quantity: Number(data.quantity)
      }
  
      items.forEach((item,index)=>{
        if(item.id === data.id){
          itemFound = index
        }
      })
      
  
      if(itemFound === undefined){
        items.push(newProduct)
        setAllItem(items)
        console.log('El producto fue agregado exitosamente')
        console.log(items)
      }else{
        items[itemFound].quantity += Number(data.quantity)
        setAllItem(items)
        console.log('Se ha modificado el producto')
        console.log(items)
      }
    }
  
    const removeItem = (itemId) => {
     
      let itemFound = false
      
      items.forEach((item, index) => {
        if(item.id === itemId){
          itemFound = index
        }
        if(itemFound !== false){
          items.splice(itemFound, 1)
          setAllItem(items)
          Swal.fire({
            icon: 'warning',
            title: 'Atención',
            text: 'El item que seleccionaste fue borrado'
          }) 
        }else{
          console.log("Producto no encontrado")
        }
      });
    }
    const clear = () =>[
      setAllItem([])
    ]
    const isInCart = (id) =>{
      const itemFound = items.find(item => item.id === id);
  
      if(itemFound){
        return true
      }else{
        return false
      }
    } 
    const datos = {addItem, removeItem, clear, isInCart, items}
    return(
      <CartContext.Provider value={datos}>
        {children}
      </CartContext.Provider>
    )
  
  }
  