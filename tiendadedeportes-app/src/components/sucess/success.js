import React from 'react'
import Swal from 'sweetalert2';
export default function Success({text, purchaseId}) {
  return (
    Swal.fire({
        icon: 'success',
        title: text,
        text: purchaseId
    }
	))}