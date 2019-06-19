import React, { Component } from "react";
import { Wrapper, ImageBox, ItemInfo } from "./styles";

class CartItem extends Component {
  render() {
    const { game } = this.props;
    return (
      <Wrapper>
        <ImageBox>
          <img src={require(`../../assets/${game.image}`)} alt={game.name} />
        </ImageBox>
        <ItemInfo>
          <p>{game.name}</p>
          <p>R$ {game.price.toFixed(2)}</p>
        </ItemInfo>
      </Wrapper>
    );
  }
}

export default CartItem;
