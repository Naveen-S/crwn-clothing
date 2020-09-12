import React from 'react'
import CheckoutHeader from '../../components/checkout/checkoutHeader';
import CheckoutItems from '../../components/checkout/checkoutItems';
import './checkout.scss';

export default function checkout() {
    return (
        <div className="container">
            <CheckoutHeader />
            <CheckoutItems />
        </div>
    )
}
