import React from 'react'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { addToCart, decreaseFromCart } from '../../actions/cart_actions';

function quantity({ item, increment, decrement }) {
    return (
        <div className="row quantity">
            <div className="col curP" onClick={() => {
                console.log('Decrement');
                decrement(item);
            }}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="col">
                {item.quantity}
            </div>
            <div className="col curP" onClick={() => {
                console.log('Incremebt');
                increment(item);
            }}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (item) => { dispatch(addToCart(item)) },
        decrement: (item) => { dispatch(decreaseFromCart(item)) }
    }
}

export default connect(null, mapDispatchToProps)(quantity);