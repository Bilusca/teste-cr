import React from "react";
import { mount } from "enzyme";

import Game from "../../components/game";

it("sould render the game component", () => {
  const wrapper = mount(<Game />);

  expect(wrapper.find("img").exists()).toBe(true);
});
