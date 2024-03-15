
import React from 'react';
import { useCart } from '../common/CartContext';

function Cart() {
	const { cartItems } = useCart();

  return (
    <div>
      <h2>Varukorg</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.title} - {item.quantity} st
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Cart;
