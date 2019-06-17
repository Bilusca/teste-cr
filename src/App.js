import React, { Component, Fragment } from "react";
import MOCKED_DATA from "./products.json";

import Global from "./styles/global";
import { Container, Content, Aside } from "./styles/components";

import Topbar from "./components/topbar";
import GamesList from "./components/games-list";

class App extends Component {
  componentDidMount() {
    console.dir(MOCKED_DATA);
  }

  render() {
    return (
      <Fragment>
        <Global />
        <Container>
          <Content>
            <Topbar />
            <GamesList data={MOCKED_DATA} />
          </Content>
          <Aside />
        </Container>
      </Fragment>
    );
  }
}

export default App;
