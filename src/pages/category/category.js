import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollections } from "../../redux/selectors/shopSelector";
import "./category.style.scss";

function category({ items }) {
  const renderItems = () => {
    if (items && items.length > 0) {
      return (
        items && (
          <div className="category">
            {items.map((item) => {
              return <CollectionItem key={item.id} item={item} />;
            })}
          </div>
        )
      );
    } else {
      return <div>No items found here.</div>;
    }
  };
  return renderItems();
}

const mapStateToProps = (state, ownProps) => {
  const shop  = selectCollections(state);
  console.log(shop);
  const categoryObj = shop[ownProps.match.params.category];
  console.log(categoryObj);
  return { items: categoryObj.items };
};

export default connect(mapStateToProps)(category);
