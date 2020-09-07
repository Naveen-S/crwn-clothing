import React from 'react'
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCart } from '../../actions/cart_actions';
import './cartIcon.scss';

function cartIcon({toggleCart}) {
    return (
        <div className="cart-container" onClick={() => {
            toggleCart();
        }}>
            <ShoppingIcon className="cart-icon" />
            <span className="item-count"> 0 </span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCart: () => {dispatch(toggleCart())}
    };
}
export default connect(null, mapDispatchToProps)(cartIcon);