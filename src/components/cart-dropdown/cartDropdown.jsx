import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cartItem';
import { CartItemSelector} from '../../redux/selectors/cartItemSelector';
import CustomButton from '../custom-button/custom-button.component';
import './cartDropdown.style.scss';

function cartDropdown({ items }) {
    console.log('Im rerendering!');
    return (
        <div className="cart-dropdown">
            {items.map(item => {
                return <CartItem key={item.id} {...item} />
            })}
            <div className="btn-container">
                <CustomButton> GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         items: CartItemSelector(state)
//     }
// }

const mapStateToProps = (state) => {
    return {
        items: state.cart.cartItems
    }
}

export default connect(mapStateToProps)(cartDropdown);