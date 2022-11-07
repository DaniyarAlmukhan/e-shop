import React from 'react'
import CategoryItem from '../category-item/CategoryItem'
import './Directory.scss'
const Directory = ({ categories }) => {
    return (
        <div className='directory-container'>
            {
                categories.map(item =>
                    <CategoryItem key={item.id} category={item} />
                )
            }
        </div>
    )
}

export default Directory