import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component';
import { addToCart } from '../../actions/cart_actions';
import './collection-item.style.scss';

function CollectionItem({ item, addToCart }) {
    const { name, imageUrl, price } = item;
    return (
        <div className="collection-item">
            <div className="image"
                style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="collection-footer">
                <span className="name"> {name} </span>
                <span className="price"> {price} </span>
            </div>
            <div className="collection-item-btn">
                <CustomButton inverted={true} onClick={() => {
                    addToCart(item);
                }}> Add to Cart </CustomButton>
            </div>
        </div>
    )
}

export const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => dispatch(addToCart(item))
    }
}

export default connect(null, mapDispatchToProps)(CollectionItem);