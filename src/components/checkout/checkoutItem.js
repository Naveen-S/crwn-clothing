import React from 'react'
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Quantity from './quantity';
import { removeFromCart } from '../../actions/cart_actions';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './checkoutItem.scss'

function checkoutItem({ item, remove }) {
    const { imageUrl, name, price } = item;
    return (
        <div className="row my-5 text-center">
            <div className="col-4">
                <img className="checkout-image" src={imageUrl} alt="someimage" />
            </div>
            <div className="col m-auto">
                {name}
            </div>
            <div className="col m-auto">
                <Quantity item={item}/>                
            </div>
            <div className="col m-auto">
                {`$ ${price}`}
            </div>
            <div className="col curP m-auto" onClick={() => {
                console.log(item);
                remove(item);
            }}>
                <FontAwesomeIcon icon={faTimes} />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (item) => { dispatch(removeFromCart(item)) }
    }
}

export default connect(null, mapDispatchToProps)(checkoutItem);
