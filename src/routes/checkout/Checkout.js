import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import { CheckoutContainer, CheckoutHeader, CheckoutTotal } from './styles'

const Checkout = () => {
    const { cartItems, cartTotalPrice } = useContext(CartContext)

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <div className="block">
                    <span>Product</span>
                </div>
                <div className="block">
                    <span>Description</span>
                </div>
                <div className="block">
                    <span>Quantity</span>
                </div>
                <div className="block">
                    <span>Price</span>
                </div>
                <div className="block">
                    <span>Remove</span>
                </div>
            </CheckoutHeader>

            {cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />)}

            <CheckoutTotal className='total' > TOTAL: ${cartTotalPrice}</CheckoutTotal>
        </CheckoutContainer >
    )
}

export default Checkout