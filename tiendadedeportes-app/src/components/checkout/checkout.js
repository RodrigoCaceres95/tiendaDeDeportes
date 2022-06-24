import React, {useState} from "react";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebaseConfig";
import './checkout.css'
import { Link } from "react-router-dom";


const initialState = {
    client: [{
        name: '',
        lastname: '',
        email: ''},
    ],
    items: [{
        id: "",
        name: "",
        precio:"",
    }],
    date: "",
    total: "",
    
}
const Checkout = ({items, total}) => {
    const [values, setValues] = useState(initialState)
    const [purchaseId, setPurchaseId] = useState('')
    // const [addItem, removeItem, clear, isInCart, items] = useContext(CartContext)
    const today = new Date()
    
    const handleOnChange = (e) =>{
        const{value, name} = e.target
        setValues({
            client: {...values.client[0], [name]: value},
            items: items,
            total: Number(total),
            date: today
        })
    }
    const onSubmit = async(e) => {
        e.preventDefault()
        const docRef = await addDoc(collection(db, 'items'),{
            values,
        })
        console.log('document written with ID', docRef.id)
        setPurchaseId(docRef.id)
        setValues(initialState)
    }
    return(
        <div className="container">
            <h1>Checkout</h1>
            {purchaseId ? (
                <>
                <h1>Orden enviada</h1>
                <h3>Su numero de orden es: {purchaseId}</h3>
                <p>Le enviaremos un mail con su link de pago. Muchas gracias por su compra!</p>
                <h3>Necesita más items? Puede seguir comprando <Link to={'/'}>aquí</Link></h3>
                </>
            ):(

                <form className="formulario" onSubmit={onSubmit}>
                <input 
                name='nombre' 
                value={values.nombre}
                type='text' placeholder='Nombres'
                onChange={handleOnChange} >
                </input>
                <br></br>
                <input 
                name='apellidos' 
                value={values.apellidos} 
                type='text' placeholder='Apellidos'
                onChange={handleOnChange} >
                </input>
                <br></br>
                <input 
                name='email' 
                value={values.email} 
                type='email' placeholder='E-Mail'
                onChange={handleOnChange}>
                </input>
                <br></br>
                <button className="boton" type="submit">{""}Enviar{""}</button>
            </form>
                    ) 
                }
        </div>
    )
}
export default Checkout