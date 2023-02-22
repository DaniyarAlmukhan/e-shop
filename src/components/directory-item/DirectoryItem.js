import React from 'react'
import { DirectoryItemContainer, BackgroundImage, DirectoryItemBody } from './styles'

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category

    return (
        <DirectoryItemContainer>
            <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
            <DirectoryItemBody>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </DirectoryItemBody>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem