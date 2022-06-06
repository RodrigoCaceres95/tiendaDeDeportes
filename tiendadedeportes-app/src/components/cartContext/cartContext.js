import {createContext, useState} from "react"
export const CartContext = createContext()
export const CartProvider = ({children}) =>{
    const [items, setItems] = useState([])
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
        setItems(items)
        console.log('El producto fue agregado exitosamente')
        console.log(items)
      }else{
        items[itemFound].quantity += Number(data.quantity)
        setItems(items)
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
      });
  
      
      if(itemFound !== false){
        items.splice(itemFound, 1)
        setItems(items)
      }else{
        console.log("Producto no encontrado")
      }
  
  
  
  
    }
  
    const clear = () =>[
      setItems([]) 
    ]
  
    const isInCart = (id) =>{
      const itemFound = items.find(item => item.id === id);
  
      if(itemFound){
        return true
      }else{
        return false
      }
    } 
  
    return(
      <CartContext.Provider value={[addItem, removeItem, clear, isInCart, items]}>
        {children}
      </CartContext.Provider>
    )
  
  }
  