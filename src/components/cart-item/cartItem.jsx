import React from 'react'
import './cartItem.scss';

export default function cartItem({ name, imageUrl, price, quantity }) {
    return (
        <div className="cart-item">
            <div className="image-container">
                <img className="image" src={`${imageUrl}`} alt="image" />
            </div>
            <div className="other-details">
                <h3>{name}</h3>
                <h3> {quantity} x {`$${price}`}</h3>
            </div>
        </div>
    )
}
