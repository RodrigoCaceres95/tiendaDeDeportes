import React from "react";
import itemCount from "./itemcount";
import imgFondo from '../img/background.jpg'
import ItemCount from "./itemcount";
function Greeting (props) {
    return(
        <div 
        style={{
            backgroundImage:`url(${imgFondo})` 
        }}>
            <h1>Selecciona la {props.name}</h1>
            <ItemCount />
        </div>
    )
}
export default Greeting 
