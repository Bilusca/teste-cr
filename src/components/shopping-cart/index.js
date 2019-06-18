import React, { Component } from "react";
import { Container, NoItens, CartTitle, ItemsList } from "./styles";
import CartIcon from "../../assets/cart-icon.svg";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as CartCreators } from "../../store/ducks/cart";
import CartItem from "../cart-item";

class ShoppingCart extends Component {
  render() {
    const { cart } = this.props;

    return (
      <Container>
        <CartTitle>
          <strong>Carrinho</strong>{" "}
          {cart.items.length > 0 && <span>({cart.items.length} itens)</span>}
        </CartTitle>
        {cart.items.length > 0 ? (
          <ItemsList>
            {cart.items.map(game => (
              <CartItem key={game.id} game={game} />
            ))}
          </ItemsList>
        ) : (
          <NoItens>
            <img src={CartIcon} alt="Ícone do carrinho de compras" />
            <span>
              Até o momento, <br /> o seu carrinho está vazio
            </span>
          </NoItens>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cartStore
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
