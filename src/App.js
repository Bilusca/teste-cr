import React, { Component, Fragment } from "react";

import Global from "./styles/global";
import { Container, Content, Aside } from "./styles/components";

import Topbar from "./components/topbar";
import GamesList from "./components/games-list";
import ShoppingCart from "./components/shopping-cart/index.js";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Global />
        <Container>
          <Content>
            <Topbar />
            <GamesList />
          </Content>
          <Aside>
            <ShoppingCart />
          </Aside>
        </Container>
      </Fragment>
    );
  }
}

export default App;
