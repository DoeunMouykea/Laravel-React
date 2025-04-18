import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cartCount, setCartCount] = useState(0);

    const addToCart = async (productId, quantity) => {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/carts/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    product_id: productId,
                    quantity: quantity
                })
            });

            if (res.ok) {
                // Optionally parse the response
                setCartCount(prev => prev + quantity); // Update count
            } else {
                console.error('Failed to add to cart');
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <CartContext.Provider value={{ cartCount, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}
