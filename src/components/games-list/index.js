import React, { Component } from "react";
import { Container } from "./styles";
import Game from "../game";

import { connect } from "react-redux";

class GamesList extends Component {
  render() {
    const {
      gamesStore: { games }
    } = this.props;

    return (
      <Container>
        {games.map(game => (
          <Game key={game.id} game={game} />
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  gamesStore: state.gamesStore
});

export default connect(mapStateToProps)(GamesList);
