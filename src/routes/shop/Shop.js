import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { fetchCategoriesAsync } from '../../store/categories/categoryAction'

import CategoriesPreview from '../categories-preview/CategoriesPreview'
import Category from '../category/Category'

import './Shop.scss'

const Shop = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesAsync())
    }, [dispatch]);


    return (
        <Routes>
            <Route index element={<CategoriesPreview />}></Route>
            <Route path=":category" element={<Category />}></Route>
        </Routes>
    )
}

export default Shop