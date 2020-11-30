import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MemberSearchList from './components/memberSearchList';
import MemberSearch from './components/memberSearch';
import MemberOrderDetail from './components/memberOrderDetail';
import MemberDetail from './components/memberDetail';
import MemberOrderList from './components/memberOrderList';

import ManageOrder from './components/manageOrder';
import OrderSearchList from './components/orderSearchList';

import ProdSearchList from './components/prodSearchList';
import ProdSearch from './components/prodSearch';
import ProdPutNew from './components/prodPutNew';
import ProdPutOnList from './components/prodPutOnList';
import ProdDetail from './components/prodDetail';
import ProdSimpleUpdate from './components/prodSimpleUpdate';
import ProdCopyUpdate from './components/prodCopyUpdate';

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
        <Route exact path="/backend/order" component={OrderSearchList} />

        <Route exact path="/backend/prod" component={ProdSearchList} />
        <Route exact path="/backend/prod/search" component={ProdSearch} />
        <Route exact path="/backend/prod/putnew" component={ProdPutNew} />
        <Route exact path="/backend/prod/putonlist" component={ProdPutOnList} />
        <Route
          exact
          path="/backend/prod/search/detail"
          component={ProdDetail}
        />
        <Route
          exact
          path="/backend/prod/pudate/simple"
          component={ProdSimpleUpdate}
        />
        <Route
          exact
          path="/backend/prod/pudate/copy"
          component={ProdCopyUpdate}
        />
        <Route exact path="/backend/member" component={MemberSearchList} />
        <Route
          exact
          path="/backend/member/search/detail"
          component={MemberDetail}
        />
        <Route
          exact
          path="/backend/member/orderdetail"
          component={MemberOrderDetail}
        />
        <Route
          exact
          path="/backend/member/orderdetail/list"
          component={MemberOrderList}
        />
        <Route exact path="/backend/member/search" component={MemberSearch} />

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
