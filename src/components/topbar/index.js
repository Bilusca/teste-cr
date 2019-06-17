import React, { Component } from "react";
import { Header } from "./styles";

class Topbar extends Component {
  render() {
    return (
      <Header>
        <h3>Games</h3>
        <select>
          <option value="">Mais populares</option>
        </select>
      </Header>
    );
  }
}

export default Topbar;
