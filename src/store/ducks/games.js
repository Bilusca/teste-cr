import MOCKED_DATA from "../../products.json";

/**
 * TYPES
 */
export const Types = {
  CHANGE_FILTER: "@games/CHANGE_FILTER",
  RESET_FILTER: "@games/RESET_FILTER"
};

/**
 * STORE
 */
const INITIAL_STATE = {
  games: MOCKED_DATA,
  filter: null
};

export default function gamesStore(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CHANGE_FILTER:
      const { filter } = action.payload;

      return {
        games: state.games.sort((gameA, gameB) => {
          if (filter === "score") {
            if (gameA[filter] < gameB[filter]) {
              return 1;
            } else if (gameA[filter] > gameB[filter]) {
              return -1;
            }
          } else {
            if (gameA[filter] > gameB[filter]) {
              return 1;
            } else if (gameA[filter] < gameB[filter]) {
              return -1;
            }
          }
        }),
        filter: action.payload.filter
      };
    case Types.RESET_FILTER:
      return INITIAL_STATE;
    default:
      return state;
  }
}

/**
 * ACTION CREATORS
 */
export const actionCreators = {
  changeFilter: filter => ({
    type: Types.CHANGE_FILTER,
    payload: {
      filter
    },
    resetFilter: () => ({
      type: Types.RESET_FILTER
    })
  })
};
