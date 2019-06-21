import React, { Component } from "react";
import ShoppingCart from "../shopping-cart";
import { Wrapper } from "./styles";

class Menu extends Component {
  render() {
    return (
      <Wrapper>
        <ShoppingCart />
      </Wrapper>
    );
  }
}

export default Menu;
