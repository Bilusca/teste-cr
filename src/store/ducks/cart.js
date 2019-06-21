/**
 * TYPES
 */
export const Types = {
  ADD_ITEM: "@cart/ADD_ITEM",
  REMOVE_ITEM: "@cart/REMOVE_ITEM"
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
        total: [...state.items, action.payload.item].reduce(
          (accumulator, item) => accumulator + item.price,
          0
        ),
        shipping:
          [...state.items, action.payload.item].reduce(
            (accumulator, item) => accumulator + item.price,
            0
          ) > 250
            ? 0
            : [...state.items, action.payload.item].length * 10
      };
    case Types.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(game => game.id !== action.payload.item.id),
        total: state.items
          .filter(game => game.id !== action.payload.item.id)
          .reduce((accumulator, item) => accumulator + item.price, 0),
        shipping:
          state.items
            .filter(game => game.id !== action.payload.item.id)
            .reduce((accumulator, item) => accumulator + item.price, 0) > 250
            ? 0
            : state.items.filter(game => game.id !== action.payload.item.id)
                .length * 10
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
  }),
  removeItemOnCart: item => ({
    type: Types.REMOVE_ITEM,
    payload: {
      item
    }
  })
};
