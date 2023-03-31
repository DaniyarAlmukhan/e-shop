import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cartSelector';
import { CheckoutItemContainer, ImageContainer, Quantity } from './styles';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cartAction';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleClearItem = () => dispatch(clearItemFromCart(cartItems, cartItem))

  const handleAddItem = () => dispatch(addItemToCart(cartItems, cartItem))

  const handleRemoveItem = () => dispatch(removeItemFromCart(cartItems, cartItem))


  return (
    <CheckoutItemContainer>
      <ImageContainer >
        <img src={imageUrl} alt="" />
      </ImageContainer>
      <span className='name'>{name}</span>
      <Quantity>
        <div className="arrow" onClick={handleRemoveItem}>&#10094;</div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={handleAddItem}>&#10095;</div>
      </Quantity>
      <span className='price'>{price}</span>
      <div className="remove-button" onClick={handleClearItem}>&#10005;</div>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem