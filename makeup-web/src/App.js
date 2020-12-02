import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header";
import Login from "./components/login";
import Member from "./components/member";
import About from "./components/about";
import Product from "./components/product";
import Detail from "./components/detail";
import Detail2 from "./components/detail2";
import CartList from "./components/cartList";
import Order from "./components/order";
import SkinTest from "./components/skinTest";
import Footer from "./components/footer";

import BackEnd from "./components/backEnd";
class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route path="/" component={Header} />
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route path="/member" component={Member} />
				<Route path="/backend" component={BackEnd} />
				<Route exact path="/about" component={About} />
				<Route exact path="/p/:kind/:page([0-9])" component={Product} />
				<Route exact path="/customp/:kind/:pid" component={Detail} />
				<Route exact path="/pd/:kind/:pid" component={Detail2} />
				<Route exact path="/cart" component={CartList} />
				<Route exact path="/order" component={Order} />
				<Route exact path="/skintest" component={SkinTest} />
				<Route path="/" component={Footer} />
			</BrowserRouter>
		);
	}
}

export default App;
