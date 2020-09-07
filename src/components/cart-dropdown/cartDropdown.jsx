import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import './cartDropdown.style.scss';

export default function cartDropdown() {
    return (
        <div className="cart-dropdown">
            <div>
                Items goes here
            </div>
            <CustomButton> GO TO CHECKOUT</CustomButton>
        </div>
    )
}
