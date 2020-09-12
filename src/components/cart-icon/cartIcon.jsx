import React from 'react'
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCart } from '../../actions/cart_actions';
import { CartQuantitySelector } from '../../redux/selectors/cartItemSelector';
import './cartIcon.scss';

function cartIcon({toggleCart, itemCount}) {
    return (
        <div className="cart-container" onClick={() => {
            toggleCart();
        }}>
            <ShoppingIcon className="cart-icon" />
            <span className="item-count"> {itemCount} </span>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     console.log('Im called');
//     return {
//         itemCount: state.cart.itemCount
//     }
// }

// With reselect
const mapStateToProps = (state) => {
    return {
        itemCount: CartQuantitySelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCart: () => {dispatch(toggleCart())}
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);