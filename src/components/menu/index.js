import React, { Component } from "react";
import ShoppingCart from "../shopping-cart";
import { Wrapper } from "./styles";

import { connect } from "react-redux";

class Menu extends Component {
  render() {
    const {
      menu: { open }
    } = this.props;

    return (
      <Wrapper open={open} className={open ? "show" : "hide"}>
        <ShoppingCart />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menuStore
});

export default connect(mapStateToProps)(Menu);
