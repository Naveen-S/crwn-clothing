import React from 'react'
import './custom-button.style.scss';

export default function CustomButton({ children, inverted, isGoogleSignIn, ...OtherProps }) {
    return (
        <button className=
        {
            `${ inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-signin' : ''} custom-button`
        } 
            {...OtherProps} > 
            
            {children} 
            </button>
    )
}
