import React, { useContext } from 'react'
import { CategoriesContext } from '../../context/categoriesContext'
import CategoryPreview from '../../components/category-preview/CategoryPreview'

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)

    return (
        <>
            {Object.keys(categoriesMap).map(title => 
                    <CategoryPreview key={title} title={title} products={categoriesMap[title]}/>
            )}
        </>
    )
}

export default CategoriesPreview