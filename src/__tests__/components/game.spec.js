import React from "react";
import { mount } from "enzyme";

import Game from "../../components/game";
import MOCKED_DATA from "../../products.json";
import { Provider } from "react-redux";
import createStore from "redux-mock-store";

import { actionCreators as CartCreators } from "../../store/ducks/cart";

const mockStore = createStore();

const INITIAL_STATE = {
  games: MOCKED_DATA,
  filter: null
};

const store = mockStore(INITIAL_STATE);

it("sould render the game component", () => {
  const game = {
    id: 312,
    name: "Super Mario Odyssey",
    price: 197.88,
    score: 100,
    image: "super-mario-odyssey.png"
  };

  const wrapper = mount(
    <Provider store={store}>
      <Game game={game} />
    </Provider>
  );

  expect(store.getActions()).toContainEqual(CartCreators.addItemOnCart(game));
});
