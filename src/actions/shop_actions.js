import { UPDATE_SHOP_DATA, SHOP_DATA_REQUEST } from "./types"

export const update_shop_data = (collection) => {
    console.log(collection);
    return {
        type: UPDATE_SHOP_DATA,
        payload: collection
    }
}

export const requestShopData = () => {
    return {
        type: SHOP_DATA_REQUEST
    }
}