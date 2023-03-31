import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cartSelector'
import { Button, BUTTON_TYPE_CLASSES } from '../button/Button'
import { ProductCardContainer, Footer } from './styles'
import { addItemToCart } from '../../store/cart/cartAction'


const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer >
    )
}

export default ProductCard