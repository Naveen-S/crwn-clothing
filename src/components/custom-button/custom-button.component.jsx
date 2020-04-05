import React from 'react'
import './custom-button.style.scss';

export default function CustomButton({ children, isGoogleSignIn, ...OtherProps}) {
    return (
        <button className={`${isGoogleSignIn ? 'google-signin': ''} custom-button`} {...OtherProps}> {children} </button>
    )
}
