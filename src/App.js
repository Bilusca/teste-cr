import React, { Component, Fragment } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer autoClose={3000} />
      </Fragment>
    );
  }
}

export default App;
