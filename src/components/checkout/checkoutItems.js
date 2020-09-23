import React from 'react'
import { connect } from 'react-redux';
import { CartItemSelector, CartTotalSelector } from '../../redux/selectors/cartItemSelector';
import CheckoutItem from './checkoutItem';
import StripeCheckout from '../../components/stripe/stripe';
import './checkoutItems.scss';

function checkoutItems({ items, total }) {
    return (
        <div className="my-5">
            {items.map((item, idx) => {
                return <CheckoutItem item={item} key={idx}/>
            })}
            <div className="total font-weight-bold fs-30 text-right">
                Total: ${total}
            </div>
            <div className="test-card">
                * Please use the test Credit card for payments * 
                <br />
                4242 4242 4242 4242
                Expiry: 01/21
                CVV: 123
            </div>
            <div className="stripe-btn">
                <StripeCheckout price={total}/>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        items: CartItemSelector(state),
        total: CartTotalSelector(state)
    }
}
export default connect(mapStateToProps)(checkoutItems);

