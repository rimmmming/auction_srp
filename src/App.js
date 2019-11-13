import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./layout/header"; //공통 헤더
import Footer from "./layout/footer"; //공통 푸터
import Cart from "./page/cart"; //장바구니
import Listpage from "./page/lp"; //lp페이지

class App extends Component {
  state = {
    cartList: [],
    cartNumber: "0"
  };

  addCart = keyValue => {
    console.log(keyValue);
  };

  render() {
    return (
      <Router>
        <Route
          path="/"
          render={props => <Header cartNumber={this.state.cartList.length} />}
        />
        <Route
          path="/lp"
          render={props => <Listpage addCart={this.addCart} />}
        />
        <Route
          path="/cart"
          render={props => <Cart cartList={this.state.cartList} />}
        />
        <Route path="/" component={Footer} />
      </Router>
    );
  }
}

export default App;
