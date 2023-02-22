import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import { useNavigate } from 'react-router-dom'
import { CartDropDownContainer, CartItems } from './styles'


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const handleCheckout = () => {
        navigate('/checkout')
    }

    return (
        <CartDropDownContainer>
            <CartItems>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </CartItems>
            <Button onClick={handleCheckout}>GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    )
}

export default CartDropdown