import React from 'react'
import { CartItemContainer, ItemDetails } from './styles'

const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem

    return (
        <CartItemContainer>
            <img src={imageUrl} alt="imagerUrl" />
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='name'>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem