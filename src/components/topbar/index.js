import React, { Component } from "react";
import { Header } from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as GameCreators } from "../../store/ducks/games";

class Topbar extends Component {
  changeFilter(e) {
    const { changeFilter } = this.props;

    changeFilter(e.target.value);
  }

  render() {
    return (
      <Header>
        <h3>Games</h3>
        <select onChange={e => this.changeFilter(e)}>
          <option value="">Filtre sua busca</option>
          <option value="score">Mais populares</option>
          <option value="price">Preço</option>
          <option value="name">Ordem alfabética</option>
        </select>
      </Header>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(GameCreators, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Topbar);
