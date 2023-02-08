import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const foundItem = cartItems.find(item => item.id === productToAdd.id)

    if (foundItem) {
        return cartItems.map(item => item.id === productToAdd.id ?
            { ...item, quantity: item.quantity + 1 }
            : item
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const foundItem = cartItems.find(item => item.id === cartItemToRemove.id)

    if (foundItem.quantity === 1) return cartItems.filter(item => item.id !== cartItemToRemove.id)

    return cartItems.map(item => item.id === cartItemToRemove.id ?
        { ...item, quantity: item.quantity - 1 }
        : item
    )
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(item => item.id !== cartItemToClear.id)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartTotalPrice: () => { },
    clearItemFromCart: () => { },
    removeItemFromCart: () => { }
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);

    useEffect(() => {
        setCartTotalPrice(cartItems.reduce((total, item) => total + item.quantity * item.price, 0))
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, cartItems, cartTotalPrice, clearItemFromCart }

    return <CartContext.Provider value={value} >{children}</CartContext.Provider>
}