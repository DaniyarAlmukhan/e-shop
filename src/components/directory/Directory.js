import React from 'react'
import DirectoryItem from '../directory-item/DirectoryItem'
import { DirectoryContainer } from './styles'

const Directory = ({ categories }) => {
    return (
        <DirectoryContainer>
            {categories.map(item => <DirectoryItem key={item.id} category={item} />)}
        </DirectoryContainer>
    )
}

export default Directory