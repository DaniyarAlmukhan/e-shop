import React from 'react'
import CategoryPreview from '../../components/category-preview/CategoryPreview'
import { useSelector } from 'react-redux'
import { selectCategoriesMap } from '../../store/categories/categorySelector'

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)

    return (
        <>
            {Object.keys(categoriesMap).map(title => 
                    <CategoryPreview key={title} title={title} products={categoriesMap[title]}/>
            )}
        </>
    )
}

export default CategoriesPreview