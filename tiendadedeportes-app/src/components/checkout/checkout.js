import React, {useContext, useState} from "react";
import './checkout.css'
import { db } from "../firebaseConfig/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../cartContext/cartContext";
import { addDoc, collection } from "firebase/firestore";
import MessageSuccess from "../messageSuccess/messageSuccess";
const Checkout = () => {
    const {clear, items} = useContext(CartContext)
    const navigate =useNavigate()
    const [purchaseID, setPurchaseID] = useState("")
    const [newOrder, setNewOrder] = useState(false)
    // const [addItem, removeItem, clear, isInCart, items] = useContext(CartContext)
    const [client, setClient] = useState({
        nombre:"",
        apellido:"",
        email:""
      })   
    const handleOnChange = (event) =>{
        setClient({
            ...client,
            [event.target.name] : event.target.value
        })
    }
    const dataSent = (event) => {
        event.preventDefault()
        setNewOrder(true)
        const order = {
            client: client,
            items: items
        }
        const orderProcess = collection(db,'items')
        addDoc(orderProcess, order)
            .then(resp => setPurchaseID(resp.id))
            .catch(err => console.log(err))
            .finally(()=>{
                setNewOrder(false)
                setClient({nombre:"", apellido: "", email:""})
            })
            setTimeout(() => {
                navigate('/')
                clear()
            }, 5000);
    } 
    return(
        <>
        <div className="containercheckout">
            <h1>Checkout</h1>
            <div>
                {newOrder ? 
                <>
                (
                    {purchaseID && <MessageSuccess purchaseId={purchaseID}/>}
                    ) 
                </>
                :(
                    <>
                    <form className="formulario" onSubmit={dataSent} onChange={handleOnChange}>
                        <input type="name" placeholder="Nombre..."></input>
                        <input type="name" placeholder="Apellidos..."></input>
                        <input type="email" placeholder="e-mail..."></input>
                    <button className="boton" type="submit">Terminar Compra</button>
                    </form>
                    </>
                    )}
            </div>
        </div>
        </>) 
}
export default Checkout