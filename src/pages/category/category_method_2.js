// Unclear lecture no: 139

import React from "react";
import { connect } from "react-redux";
import { getCategoryItem } from '../../redux/selectors/shopSelector';
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./category.style.scss";

function category(props) {
  console.log(props);
  return <div> category here</div>

}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    // console.log(getCategoryItem(ownProps.match.params.category)(state));
  return { items:  getCategoryItem(ownProps.match.params.category)(state)};
};
export default connect(mapStateToProps)(category);
