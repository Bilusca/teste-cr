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
        open: true
      };
    case Types.CLOSE_MENU:
      return {
        open: false
      };
    default:
      return state;
  }
}

/**
 * ACTION CREATORS
 */
export const actionCreators = {
  openMenu: () => ({
    type: Types.OPEN_MENU
  }),
  closeMenu: () => ({
    type: Types.CLOSE_MENU
  })
};
