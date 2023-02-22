import React, { useContext } from 'react'
import Button from '../button/Button'
import { CartContext } from '../../context/cartContext'
import { ProductCardContainer, Footer } from './styles'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addItemToCart(product)
    }

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </Footer>
            <Button buttonType='inverted' onClick={handleAddToCart}>Add to cart</Button>
        </ProductCardContainer >
    )
}

export default ProductCard