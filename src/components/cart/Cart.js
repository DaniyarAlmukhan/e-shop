import React from 'react';
import { CartIconContainer, ItemCount, ShoppingIcon} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cartSelector';
import { setIsCartOpen } from '../../store/cart/cartAction';

const Cart = () => {

  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const handleCartOpen = () => dispatch(setIsCartOpen(!isCartOpen)) 

  return (
    <CartIconContainer>
      <ShoppingIcon className='shopping-icon' onClick={handleCartOpen} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default Cart