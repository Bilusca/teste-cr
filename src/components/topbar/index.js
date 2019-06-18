import React, { Component } from "react";
import { Header } from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as GameCreators } from "../../store/ducks/games";

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
    return (
      <Header>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(GameCreators, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Topbar);
