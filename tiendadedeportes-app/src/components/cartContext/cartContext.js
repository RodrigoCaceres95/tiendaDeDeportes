import React, {createContext, useState} from "react"
export const initialState = []
export const CartContext = createContext()
export const CartProvider = ({children}) =>{
    const [items, setItems] = useState(initialState)
    const cartAdd = (detail, number) => {
        const exist = items.find(x => x.id === detail.id)
        if (exist) {
            setItems(items.map(x => x.id === detail.id ? {...exist, qty: exist.qty + number} : x ))
        } else {
            setItems([...items, {...detail, qty: number}])
        }
        console.log(items)
    }
    return(
        <CartContext.Provider value={cartAdd}>
        {children}
        </CartContext.Provider>
    )
}