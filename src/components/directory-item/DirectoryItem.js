import React from 'react'
import { DirectoryItemContainer, BackgroundImage, DirectoryItemBody } from './styles'
import { useNavigate } from 'react-router-dom'

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category

    const navigate = useNavigate();

    const navigateHandler = () =>{
        navigate(route)
    }

    return (
        <DirectoryItemContainer onClick={navigateHandler}>
            <BackgroundImage imageUrl={imageUrl}/>
            <DirectoryItemBody>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </DirectoryItemBody>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem