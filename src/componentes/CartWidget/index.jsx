import React from "react";
import Badge from 'react-bootstrap/Badge';

export const CartWidget = () => {
    return (
         <i className="bi bi-cart-fill">
            <Badge bg="secondary">5</Badge>
         </i> );
}
 
export default CartWidget;