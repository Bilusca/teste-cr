/**
 * TYPES
 */
export const Types = {
  OPEN_MENU: "@menu/OPEN_MENU",
  CLOSE_MENU: "@menu/CLOSE_MENU"
};

/**
 * STORE
 */
const INITIAL_STATE = {
  open: false
};

export default function menuStore(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_MENU:
      return {
        open: action.payload.open
      };
    case Types.CLOSE_MENU:
      return {
        open: action.payload.open
      };
    default:
      return state;
  }
}

/**
 * ACTION CREATORS
 */
export const actionCreators = {
  openMenu: open => ({
    type: Types.CHANGE_FILTER,
    payload: {
      open
    }
  }),
  closeMenu: open => ({
    type: Types.CHANGE_FILTER,
    payload: {
      open
    }
  })
};
