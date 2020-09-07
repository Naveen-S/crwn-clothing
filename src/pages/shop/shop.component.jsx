import React, { Component } from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import shopData from '../../data';

export default class ShopPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collections: shopData
        }
    }
    
    render() {
        return (
            <div>
                SHOP PAGE
                {this.state.collections.map(collection => {
                    return <CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
                }) }
            </div>
        )
    }
}
