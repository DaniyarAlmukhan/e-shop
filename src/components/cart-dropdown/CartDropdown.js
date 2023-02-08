import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import './CartDropdown.scss'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import { useNavigate } from 'react-router-dom'


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const handleCheckout = () => {
        navigate('/checkout')
    }

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button onClick={handleCheckout}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown