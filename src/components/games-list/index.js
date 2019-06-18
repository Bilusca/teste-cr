import React, { Component } from "react";
import { Container, Game } from "./styles";

import { connect } from "react-redux";

class GamesList extends Component {
  render() {
    const {
      gamesStore: { games }
    } = this.props;

    return (
      <Container>
        {games.map(game => (
          <Game key={game.id}>
            <div>
              <img src={require(`../../assets/${game.image}`)} alt="" />
            </div>
            <p>{game.name}</p>
            <p>R$ {game.price.toFixed(2)}</p>
          </Game>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  gamesStore: state.gamesStore
});

export default connect(mapStateToProps)(GamesList);
