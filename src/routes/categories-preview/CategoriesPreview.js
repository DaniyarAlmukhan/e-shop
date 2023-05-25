import React from 'react'
import CategoryPreview from '../../components/category-preview/CategoryPreview'
import { useSelector } from 'react-redux'
import { selectCategoriesMap } from '../../store/categories/categorySelector'
import Spinner from '../../components/spinner/Spinner'
import { selectCategoriesIsLoading } from '../../store/categories/categorySelector'

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <>
            {isLoading ?
                <Spinner /> :
                (Object.keys(categoriesMap).map(title =>
                    <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
                ))}
        </>
    )
}

export default CategoriesPreview