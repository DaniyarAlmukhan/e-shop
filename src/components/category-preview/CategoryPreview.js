import React from 'react'
import ProductCard from '../product-card/ProductCard'
import { CategoryPreviewContainer, CategoryTitle, Preview } from './styles'

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <CategoryTitle to={title}>{title.toUpperCase()}</CategoryTitle>
            </h2>
            <Preview>
                {products
                    .filter((_, index) => index < 4)
                    .map(product => <ProductCard key={product.id} product={product} />
                )}
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview