import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.style.scss';

export default function CollectionItem({name, imageUrl, price}) {
    return (
        <div className="collection-item">
            <div className="image"
                style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name"> {name} </span>
                <span className="price"> {price} </span>
            </div>
            <div className="collection-item-btn">
                <CustomButton inverted = {true}> Add to Cart </CustomButton>
            </div>
        </div>
    )
}
