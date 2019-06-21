import React, { Component } from "react";
import { Wrapper, ImageBox, ItemInfo, RemoveItem } from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as CartCreators } from "../../store/ducks/cart";

import { toast } from "react-toastify";

import { formatBRLMoney } from "../../services/format-brl";

class CartItem extends Component {
  state = {
    hovered: false
  };

  removeItemOnCart(game) {
    const { removeItemOnCart } = this.props;

    removeItemOnCart(game);
    toast.success(`O jogo ${game.name} foi removido com sucesso.`);
  }

  render() {
    const { game } = this.props;
    const { hovered } = this.state;
    return (
      <Wrapper
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        onClick={() => this.removeItemOnCart(game)}
      >
        <ImageBox>
          <img src={require(`../../assets/${game.image}`)} alt={game.name} />
        </ImageBox>
        <ItemInfo>
          <p>{game.name}</p>
          <p>{formatBRLMoney(game.price)}</p>
        </ItemInfo>
        {hovered && (
          <RemoveItem>
            <span>x</span>
          </RemoveItem>
        )}
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartCreators, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
