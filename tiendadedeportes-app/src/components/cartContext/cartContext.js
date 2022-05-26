import React, {createContext, useState} from "react"
export const initialState = []
export const CartContext = createContext()
export const CartProvider = ({children}) =>{
    const addItem = (id, name, precio, img, quantity) => {
        const newProduct = {
            id: id,
            name: name,
            precio: precio,
            img: img,
            quantity: quantity
        }
        const itemFound = items.find(item => item.id == id);
        if(!itemFound){
            initialState.push(newProduct)
            setItems(initialState)
            console.log(items)
        }else{
            console.log('Producto ya encontrado en el carrito.')    
        }
    }
      
    const removeItem = (itemId) => {
      
        let itemFound = false
          
        items.forEach((item, index, arr) => {
            if(item.id == itemId){
              itemFound = index
        }
        });
        if(itemFound){
            const newArray = initialState.splice(itemFound, 1)
            setItems(newArray)
        }else{
            console.log("Producto no encontrado")
        }}
        const clear = () =>[
          setItems([]) 
        ]
    const isInCart = (id) =>{
        const itemFound = items.find(item => item.id == id);
      
        if(itemFound){
        return true
        }else{
        return false
        }
    } 
    const [items, setItems] = useState(initialState)
    return(
        <CartContext.Provider value={addItem}>
        {children}
        </CartContext.Provider>
    )
}