import React from 'react'
import './checkoutHeader.scss';

export default function checkoutHeader() {
    const headerItems = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];
    return (
        <div className="row font-weight-bold text-center"> 
            {
                headerItems.map((item, idx) => {
                        return (
                            <div className={ item === "Product"? 'col-4': 'col' } key={idx}>
                                {item}
                            </div>
                        )
                    } 
                )
            }
        </div>
    )
}
