import React, { Component } from "react";
import { Container, Game } from "./styles";

class GamesList extends Component {
  state = {
    games: []
  };

  render() {
    return (
      <Container>
        {this.props.data.map(game => (
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

export default GamesList;
