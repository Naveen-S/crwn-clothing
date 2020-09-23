import React from "react";
import {connect} from 'react-redux';
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import {collectionSelector} from '../../redux/selectors/shopSelector';

function CollectionOverview({shop}) {
  return (
    <div>
      {shop.map((collection) => {
        return (
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
    return {shop: collectionSelector(state)};
}
export default connect(mapStateToProps)(CollectionOverview);