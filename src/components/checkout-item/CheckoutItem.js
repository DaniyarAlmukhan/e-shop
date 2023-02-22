import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { CheckoutItemContainer, ImageContainer, Quantity } from './styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

  const handleClearItem = () => {
    clearItemFromCart(cartItem)
  }

  const handleAddItem = () => {
    addItemToCart(cartItem)
  }

  const handleRemoveItem = () => {
    removeItemFromCart(cartItem)
  }

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