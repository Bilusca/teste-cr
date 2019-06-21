import React, { Component } from "react";
import { Wrapper, InfoAndPrices, ImageBox } from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as CartCreators } from "../../store/ducks/cart";

import { toast } from "react-toastify";

import { formatBRLMoney } from "../../services/format-brl";

class Game extends Component {
  state = {
    hovered: false
  };

  addItemOnCart(game) {
    const { addItemOnCart, cart } = this.props;

    if (cart.items.findIndex(i => i.id === game.id) !== -1) {
      return toast.warn(
        `O jogo ${game.name} já foi adicionado ao seu carrinho.`
      );
    }

    addItemOnCart(game);
    toast.success(`O jogo ${game.name} foi adicionado com sucesso.`);
  }

  render() {
    const { game } = this.props;
    const { hovered } = this.state;

    return (
      <Wrapper
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        onClick={() => this.addItemOnCart(game)}
      >
        <ImageBox>
          <img src={require(`../../assets/${game.image}`)} alt={game.name} />
        </ImageBox>
        {hovered ? (
          <InfoAndPrices>
            <p>adicionar ao carrinho</p>
          </InfoAndPrices>
        ) : (
          <InfoAndPrices>
            <p>{game.name}</p>
            <p>{formatBRLMoney(game.price)}</p>
          </InfoAndPrices>
        )}
      </Wrapper>
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
)(Game);
