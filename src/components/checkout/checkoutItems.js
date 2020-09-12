import React from 'react'
import { connect } from 'react-redux';
import { CartItemSelector, CartTotalSelector } from '../../redux/selectors/cartItemSelector';
import CheckoutItem from './checkoutItem';
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

