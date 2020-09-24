import { UPDATE_SHOP_DATA } from "./types"

export const update_shop_data = (collection) => {
    console.log(collection);
    return {
        type: UPDATE_SHOP_DATA,
        payload: collection
    }
}