import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cartSelector'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import { CheckoutContainer, CheckoutHeader, CheckoutTotal } from './styles'

const Checkout = () => {

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

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

            <CheckoutTotal className='total' > TOTAL: ${cartTotal}</CheckoutTotal>
        </CheckoutContainer >
    )
}

export default Checkout