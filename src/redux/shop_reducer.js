import { UPDATE_SHOP_DATA, SHOP_DATA_REQUEST } from "../actions/types";

  const shop_reducer = (state = {loading: false, collection: {}}, action) => {
      switch(action.type) {
          case(UPDATE_SHOP_DATA) : {
            console.log("in update shop");
              return {
                loading: false,
                collection: {...action.payload}
              }
          }
          case(SHOP_DATA_REQUEST): {
              return {
                loading: true
              }
          }
          default: {
              return state;
          }
      }
  }

  export default shop_reducer;