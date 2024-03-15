import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
	return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
  
	const [cartItems, setCartItems] = useState([]);
	const addToCart = (product) => {
	
		setCartItems((currentItems) => {
			const itemExists = currentItems.find((item) => item.id === product.id);
			if (itemExists) {
			
				return currentItems.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			} else {
			
				return [...currentItems, { ...product, quantity: 1 }];
			}
		});
	};
	return (
		<CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};
