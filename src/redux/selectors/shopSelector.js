import _ from 'lodash';
import { createSelector } from "reselect";

const shopSelector = state => state.shop;

// Dummy selector
export const selectCollections = createSelector(shopSelector, shop => shop.collection);

export const collectionSelector = createSelector(selectCollections, (shop) => {
    console.log(shop);
    return _.values(shop);
})

// Couldn't wrap my head around it
// export const selectCollection = createSelector(
//   selectCollections,
//   (shopItems, categoryName) => {
//       console.log(categoryName);
//     return shopItems[categoryName];
//   }
// );
