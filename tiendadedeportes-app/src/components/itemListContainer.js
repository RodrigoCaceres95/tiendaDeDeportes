import React from "react";
import imgFondo from '../img/background.jpg'
function Greeting (props) {
    return(
        <div 
        style={{
            backgroundImage:`url(${imgFondo})` 
        }}>
            <h1>Hola {props.name}</h1>
        </div>
    )
}
export default Greeting 
