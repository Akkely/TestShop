import React from 'react';
import { useCart } from '../common/CartContext'; // Importera useCart hook
// import{ cartItems } from'../components/ProductItemLarge';

function CartView() {
  const { cartItems } = useCart(); // Använd useCart för att få tillgång till cartItems

  // Beräkna det totala priset för varukorgen
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div>
      <h2>Min Varukorg</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - {item.quantity} st x {item.price} kr = {item.quantity * item.price} kr
            </li>
          ))}
        </ul>
      ) : (
        <p>Varukorgen är tom</p>
      )}
      <h3>Totalt: {totalPrice} kr</h3>
    </div>
  );
}

export default CartView;
