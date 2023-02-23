import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { CartIconContainer, ItemCount, ShoppingIcon} from './styles';

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const handleCartOpen = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <CartIconContainer>
      <ShoppingIcon className='shopping-icon' onClick={handleCartOpen} />
      <ItemCount>{cartItems.reduce((a, b) => a + b.quantity, 0)}</ItemCount>
    </CartIconContainer>
  )
}

export default Cart