import React, { Component } from "react";
import { Wrapper } from "./styles";

class CartItem extends Component {
  render() {
    const { game } = this.props;
    return (
      <Wrapper>
        <div>
          <img src={require(`../../assets/${game.image}`)} alt={game.name} />
        </div>
      </Wrapper>
    );
  }
}

export default CartItem;
