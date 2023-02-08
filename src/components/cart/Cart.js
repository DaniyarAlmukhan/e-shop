import React, { useContext } from 'react';
import './Cart.scss';
import CartItem from '../cart-item/CartItem';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../context/cartContext';

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const handleCartOpen = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' onClick={handleCartOpen} />
      <span className='item-count'>{cartItems.reduce((a, b) => a + b.quantity, 0)}</span>
    </div>
  )
}

export default Cart