import React from 'react'
import { Button } from '../button/Button'
import CartItem from '../cart-item/CartItem'
import { useNavigate } from 'react-router-dom'
import { CartDropDownContainer, CartItems, EmptyMessage } from './styles'
import { selectCartItems } from '../../store/cart/cartSelector'
import { useSelector } from 'react-redux'


const CartDropdown = () => {
    const navigate = useNavigate()

    const cartItems = useSelector(selectCartItems);

    const handleCheckout = () => {
        navigate('/checkout')
    }

    return (
        <CartDropDownContainer>
            <CartItems>
                {cartItems.length 
                ? cartItems.map(item => <CartItem key={item.id} cartItem={item} />) 
                : <EmptyMessage>Your cart is empty</EmptyMessage>}
            </CartItems>
            <Button onClick={handleCheckout}>GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    )
}

export default CartDropdown