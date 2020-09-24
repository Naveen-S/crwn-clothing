import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.style.scss';

function CollectionPreview({title, items, routeName, ...otherProps}) {
    return (
        <div className="collection-preview">
            <h1 className="title" onClick={() => {
                console.log(otherProps);
                otherProps.history.push(`${routeName}`)
                
            }}> {title.toUpperCase()} </h1>
            <div className="preview">
                {
                    items
                    .filter((item, idx) => idx < 4)
                    .map(item => {
                        return (
                            <CollectionItem key={item.id} item={item}  />
                            );
                    })
                }
            </div>
        </div>
    )
}

export default withRouter(CollectionPreview);