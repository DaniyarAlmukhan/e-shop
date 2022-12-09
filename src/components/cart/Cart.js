import React from 'react';
import './Cart.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../context/cartContext';
import { useContext } from 'react';

const Cart = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const handleCartOpen = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' onClick={handleCartOpen} />
      <span className='item-count'>0</span>
    </div>
  )
}

export default Cart