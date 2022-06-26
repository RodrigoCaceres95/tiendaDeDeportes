import React from "react"
export const MessageSuccess = ({purchaseId}) => {
    return(
        <div>
            <h1>Muchas gracias por su compra!</h1>
            <div>
                <p>
                    Enseguida le enviaremos un mail con el link de pago. Su id de transaccón es {purchaseId}
                </p>
            </div>
        </div>
    )
}
export default MessageSuccess