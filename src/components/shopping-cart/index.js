import React, { Component, Fragment } from "react";
import { Container, NoItens, CartTitle, ItemsList, Totals } from "./styles";
import CartIcon from "../../assets/cart-icon.svg";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as CartCreators } from "../../store/ducks/cart";
import { actionCreators as MenuCreators } from "../../store/ducks/menu";
import CartItem from "../cart-item";
import { formatBRLMoney } from "../../services/format-brl";

import { toast } from "react-toastify";

class ShoppingCart extends Component {
  finishCart() {
    const { resetCart, closeMenu } = this.props;

    resetCart();
    closeMenu();
    toast.success(`Sua compra foi finalizada com sucesso.`);
  }

  render() {
    const { cart, closeMenu } = this.props;

    return (
      <Container>
        <CartTitle>
          <button onClick={() => closeMenu()}>X</button>
          <strong>Carrinho</strong>{" "}
          {cart.items.length > 0 && <span>({cart.items.length} itens)</span>}
        </CartTitle>
        {cart.items.length > 0 ? (
          <Fragment>
            <ItemsList>
              {cart.items.map(game => (
                <CartItem key={game.id} game={game} />
              ))}
            </ItemsList>
            <Totals>
              <div>
                <span>subtotal</span>
                <span>{formatBRLMoney(cart.total)}</span>
              </div>
              <div>
                <span>frete</span>
                <span>{formatBRLMoney(cart.shipping)}</span>
              </div>
              <div>
                <span>total</span>
                <span style={{ fontSize: "20px" }}>
                  {formatBRLMoney(cart.total + cart.shipping)}
                </span>
              </div>
              <button onClick={() => this.finishCart()}>
                finalizar compra
              </button>
            </Totals>
          </Fragment>
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
  bindActionCreators({ ...CartCreators, ...MenuCreators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
