import _ from 'lodash';
import { createSelector } from "reselect";

const shopSelector = state => state.shop;

// Dummy selector
export const dummySelector = createSelector(shopSelector, shop => shop);

export const collectionSelector = createSelector(shopSelector, (shop) => {
    return _.values(shop);
})
export const getCategoryItem = (categoryName) => {
    createSelector(dummySelector, (shopItems) => {
        shopItems.find(item =>  item.routeName === categoryName)
    })
}