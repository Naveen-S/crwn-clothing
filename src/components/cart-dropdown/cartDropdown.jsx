import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/cartItem';
import { CartItemSelector } from '../../redux/selectors/cartItemSelector';
import CustomButton from '../custom-button/custom-button.component';
import { toggleCart } from '../../actions/cart_actions';
import './cartDropdown.style.scss';

function cartDropdown({ items, history, toggleCart }) {
    console.log('Im rerendering!');
    return (
        <div className="cart-dropdown">
            {
                items.length > 0 ? items.map(item => {
                    return <CartItem key={item.id} {...item} />
                }) :
                    <span className="empty-cart">
                        Cart is empty!
                </span>
            }
            <div className="btn-container">
                <CustomButton onClick={() => {
                    history.push('/checkout');
                    toggleCart();
                }}> GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: CartItemSelector(state)
    }
}

// const mapStateToProps = (state) => {
//     return {
//         items: state.cart.cartItems
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCart: () => {dispatch(toggleCart())}
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(cartDropdown));