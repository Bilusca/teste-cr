import React, { Component } from "react";
import { Header } from "./styles";
import CartIcon from "../../assets/cart-icon.svg";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as GameCreators } from "../../store/ducks/games";
import { actionCreators as MenuCreators } from "../../store/ducks/menu";

class Topbar extends Component {
  state = {
    filter: "score"
  };

  componentDidMount() {
    this.changeFilter(this.state.filter);
  }

  changeFilter(value) {
    const { changeFilter } = this.props;

    this.setState({ filter: value });

    changeFilter(value);
  }

  render() {
    const { items, openMenu } = this.props;

    return (
      <Header>
        <button onClick={() => openMenu(true)}>
          <img src={CartIcon} alt="Ícone do carrinho de compras" />
          {items > 0 && <span>{items}</span>}
        </button>
        <h3>Games</h3>
        <select onChange={e => this.changeFilter(e.target.value)}>
          <option value="score">Mais populares</option>
          <option value="price">Preço</option>
          <option value="name">Ordem alfabética</option>
        </select>
      </Header>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartStore.items.length
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...GameCreators, ...MenuCreators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topbar);
