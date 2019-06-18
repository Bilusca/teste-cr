import React, { Component } from "react";
import { Wrapper, InfoAndPrices, ImageBox } from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as CartCreators } from "../../store/ducks/cart";

import { toast } from "react-toastify";

class Game extends Component {
  state = {
    hovered: false
  };

  addItemOnCart(item) {
    const { addItemOnCart, cart } = this.props;

    if (cart.items.findIndex(i => i.id === item.id) !== -1) {
      return toast.warn("Este item já foi adicionado.");
    }

    addItemOnCart(item);
    toast.success("Item adicionado com sucesso.");
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
            <p>R$ {game.price.toFixed(2)}</p>
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
