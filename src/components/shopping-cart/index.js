import React, { Component } from "react";
import { Container, NoItens, CartTitle } from "./styles";
import CartIcon from "../../assets/cart-icon.svg";

class ShoppingCart extends Component {
  render() {
    return (
      <Container>
        <CartTitle>
          <span>Carrinho</span>
        </CartTitle>
        <NoItens>
          <img src={CartIcon} alt="Ícone do carrinho de compras" />
          <span>
            Até o momento, <br /> o seu carrinho está vazio
          </span>
        </NoItens>
      </Container>
    );
  }
}

export default ShoppingCart;
