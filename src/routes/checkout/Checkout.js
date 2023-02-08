import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'

import './Checkout.scss'

const Checkout = () => {
    const { cartItems, cartTotalPrice } = useContext(CartContext)

    return (
        <div className='checkout-container'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />)}

            <span className='total' > TOTAL: ${cartTotalPrice}</span>
        </div >
    )
}

export default Checkout