import React, {createContext, useState} from "react"
export const initialState = []
export const CartContext = createContext()
export const CartProvider = ({children}) =>{
    const [items, setItems] = useState(initialState)
    const cartAdd = () => {
        const exist = items.find(x => x.id === detail.id)
        if (exist) {
            setItems(items.map(x => x.id === detail.id ? {...exist, qty: exist.qty + 1} : x ))
        } else {
            setItems([...items, {...detail, qty: 1}])
        }
        console.log(items)
    }
    return(
        <CartContext.Provider value={cartAdd}>
        {children}
        </CartContext.Provider>
    )
}
const cartRemove = () => {

}