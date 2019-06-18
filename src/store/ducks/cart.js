/**
 * TYPES
 */
export const Types = {
  ADD_ITEM: "@cart/ADD_ITEM"
};

/**
 * STORE
 */
const INITIAL_STATE = {
  items: [],
  total: 0,
  shipping: 0
};

export default function cartStore(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload.item],
        total: state.total + action.payload.item.price,
        shipping: state.shipping + 10
      };
    default:
      return state;
  }
}

/**
 * ACTION CREATORS
 */
export const actionCreators = {
  addItemOnCart: item => ({
    type: Types.ADD_ITEM,
    payload: {
      item
    }
  })
};
