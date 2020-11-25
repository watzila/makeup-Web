import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import ManageOrder from './components/manageOrder';
import Home from './components/home';
import Header from './components/header';
import Login from './components/login';
//import Member from './components/member';
import About from './components/about';
import Product from './components/product';
import Detail from './components/detail';
import CartList from './components/cartList';
import Order from './components/order';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        {/*<Route exact path="/login" component={Member} />*/}
        <Route exact path="/backend/manageorder" component={ManageOrder} />
        <Route exact path="/about" component={About} />
        <Route exact path="/p" component={Product} />
        <Route exact path="/p/:kind/:pid" component={Detail} />
        <Route exact path="/cart" component={CartList} />
        <Route exact path="/order" component={Order} />
        <Route path="/" component={Footer} />
      </BrowserRouter>
    );
  }
}

export default App;
