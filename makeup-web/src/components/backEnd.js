import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

<<<<<<< HEAD
import ProdList from './js/back/prodList';
import ProdDetail from './js/back/prodDetail';
import ProdPutNew from './js/back/prodPutNew';
import MemberList from './js/back/memberList';
import MemberSearch from './js/back/memberSearch';
import MemberOrderDetail from './js/back/memberOrderDetail';
import MemberDetail from './js/back/memberDetail';
import MemberOrderList from './js/back/memberOrderList';

import OrderList from './js/back/orderList';
=======
import ProdList from "./js/back/prodList";
import ProdDetail from "./js/back/prodDetail";
import ProdPutNew from "./js/back/prodPutNew";
import MemberList from "./js/back/memberList";
import MemberSearch from "./js/back/memberSearch";
import MemberDetail from "./js/back/memberDetail";
import MemberOrderList from "./js/back/memberOrderList";

import BackOrderList from "./js/back/backOrderList";
import BackOrderDetail from "./js/back/backOrderDetail";
>>>>>>> 3cbe59edd050a90eaf008d8d35b19dbd151f2bdd

import IMGPath from './js/imgPath'; //引入圖片

import './css/Backstage.css';
import './css/form.css';
import './css/table.css';
import './css/bootstrap.css';
class BackEnd extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      data: null,
    };
    this.imgPath = new IMGPath();
    //this.avater = require.context("../images/index", true, /\.(png|jpe?g|svg)$/);
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <div className="container-fluid ">
            <div className="row">
              <div className="side col-2 pt-3 pb-3 gray-Link d-flex flex-column align-items-center ">
                <span className="side-collapse-btn d-inlin-block ml-auto">
                  <i className="fa fa-caret-left" />
                </span>
                <div>
                  {/*<img
                    className="sideLogo"
                    src={this.imgPath.importAll(this.avater)['logo.png']}
                    alt="avater"
                  />*/}
                </div>
                <ul className="pt-3 nav flex-column">
                  <li className="nav-item">
                    <div data-toggle="collapse" role="button">
                      <Link className="prod" to={'/'}>
                        <h5 className="text-dark">
                          <i className="fa fa-home" aria-hidden="true"></i>
                          首頁
                        </h5>
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      data-toggle="collapse"
                      href="#sideNavmember"
                      role="button"
                      aria-expanded="false"
                      aria-controls="sideNavprod"
                    >
                      <button className="prod">
                        <h5 className="text-dark">
                          <i
                            className="fa fa-chevron-circle-right"
                            aria-hidden="true"
                          ></i>
                          會員管理
                        </h5>
                      </button>
                    </div>
                    <div className="collapse side-nav-bar" id="sideNavmember">
                      <div className="d-flex flex-column align-items-end">
                        <Link
                          className="search sideNavItem"
                          to={'/backend/member'}
                        >
                          會員清單
                        </Link>
                        <Link
                          className="search sideNavItem"
                          to={'/backend/member/search/detail'}
                        >
                          detail
                        </Link>
                        <Link
                          className="search sideNavItem"
                          to={'/backend/member/orderdetail'}
                        >
                          Odetail
                        </Link>
                        <Link
                          className="search sideNavItem"
                          to={'/backend/member/orderdetail/list'}
                        >
                          list
                        </Link>
                        <Link
                          className="search sideNavItem"
                          to={'/backend/member/search'}
                        >
                          search
                        </Link>
                      </div>
                    </div>
                  </li>

<<<<<<< HEAD
                  <li className="nav-item">
                    <div
                      href="#sideNavOrder"
                      data-toggle="collapse"
                      role="button"
                    >
                      <button className="prod">
                        <h5 className="text-dark">
                          <i className="fa fa-table" aria-hidden="true"></i>
                          訂單管理
                        </h5>
                      </button>
                    </div>
                    <div className="collapse side-nav-bar" id="sideNavOrder">
                      <div className="d-flex flex-column align-items-end">
                        <Link className="sideNavItem" to={'/backend/order'}>
                          order
                        </Link>
                        <Link
                          className="sideNavItem"
                          to={'/backend/manageorder'}
                        >
                          manageorder
                        </Link>
                      </div>
                    </div>
                  </li>
=======
									<li className="nav-item">
										<div href="#sideNavOrder" data-toggle="collapse" role="button">
											<Link to={"/backend/order"} className="prod">
												<h5 className="text-dark">
													<i className="fa fa-table" aria-hidden="true"></i>
													訂單管理
												</h5>
											</Link>
										</div>
										{/*<div className="collapse side-nav-bar" id="sideNavOrder">
											<div className="d-flex flex-column align-items-end">
												<Link className="sideNavItem" to={"/backend/order"}>
													order
												</Link>
												<Link className="sideNavItem" to={"/backend/manageorder"}>
													manageorder
												</Link>
											</div>
										</div>*/}
									</li>
>>>>>>> 3cbe59edd050a90eaf008d8d35b19dbd151f2bdd

                  <li className="nav-item">
                    <div
                      data-toggle="collapse"
                      role="button"
                      href="#sideNavprod"
                      aria-expanded="false"
                      aria-controls="sideNavprod"
                    >
                      <button className="prod">
                        <h5 className="text-dark">
                          <i className="fa fa-th-large" />
                          商品管理
                        </h5>
                      </button>
                    </div>
                    <div className="collapse side-nav-bar" id="sideNavprod">
                      <div className="d-flex flex-column align-items-end">
                        <Link
                          className="search sideNavItem"
                          to={'/backend/prod'}
                        >
                          商品清單
                        </Link>

                        <Link
                          className="putNew sideNavItem"
                          to={'/backend/prod/new'}
                        >
                          新增商品
                        </Link>
                        {/*<Link className="putNew sideNavItem" to={"/backend/prod/putonlist"}>
                          PPutOnList
                        </Link>
                        <Link
                          className="putNew sideNavItem"
                          to={'/backend/prod/search/detail'}
                        >
                          PDetail
												</Link>*/}
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <h5 className="text-dark">
                      <i className="fa fa-tag" />
                      折扣活動
                    </h5>
                  </li>
                </ul>
              </div>
              <Route exact path="/backend/member" component={MemberList} />
              <Route
                exact
                path="/backend/member/search/detail"
                component={MemberDetail}
              />
              <Route
                exact
                path="/backend/member/orderdetail/list"
                component={MemberOrderList}
              />
              <Route
                exact
                path="/backend/member/search"
                component={MemberSearch}
              />

<<<<<<< HEAD
              <Route exact path="/backend/order" component={OrderList} />
              <Route
                exact
                path="/backend/:member/orderdetail"
                component={MemberOrderDetail}
              />
=======
							<Route exact path="/backend/order" component={BackOrderList} />
							<Route exact path="/backend/:member/orderdetail" component={BackOrderDetail} />
>>>>>>> 3cbe59edd050a90eaf008d8d35b19dbd151f2bdd

              <Route path="/backend/prod" exact component={ProdList} />
              <Route path="/backend/prod/detail" exact component={ProdDetail} />
              <Route path="/backend/prod/new" exact component={ProdPutNew} />
            </div>
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

export default BackEnd;
