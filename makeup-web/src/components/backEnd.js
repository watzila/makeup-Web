import React, { Component } from "react";
import ProdSearchList from "./js/back/prodSearchList";
import IMGPath from "./js/imgPath"; //引入圖片
import "./css/Backstage.css";
import "./css/bootstrap.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

//my-nav-item-selected 當該nav-item被選取時套用此className
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
                      <Link className="prod" to={"/"}>
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
                          <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
													會員管理
												</h5>
                      </button>
                    </div>
                    <div className="collapse side-nav-bar" id="sideNavmember">
                      <div className="d-flex flex-column align-items-end">
                        <Link className="search sideNavItem" to={"/backend/member"}>
                          會員管理
												</Link>
                        <Link className="search sideNavItem" to={"/backend/member/search/detail"}>
                          detail
												</Link>
                        <Link className="search sideNavItem" to={"/backend/member/orderdetail"}>
                          Odetail
												</Link>
                        <Link
                          className="search sideNavItem"
                          to={"/backend/member/orderdetail/list"}
                        >
                          list
												</Link>
                        <Link className="search sideNavItem" to={"/backend/member/search"}>
                          search
												</Link>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      data-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="sideNavprod"
                    >
                      <Link className="prod" to={"/backend/order"}>
                        <h5 className="text-dark">
                          <i className="fa fa-table" aria-hidden="true"></i>
													訂單管理
												</h5>
                      </Link>
                    </div>
                    <div className="collapse side-nav-bar" id="sideNavOrder">
                      <div className="d-flex flex-column align-items-end">
                        <Link className="search sideNavItem" to={"/backend/manageorder"}>
                          manageorder
												</Link>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      data-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="sideNavprod"
                    >
                      <Link className="prod" to={"/backend/prod"}>
                        <h5 className="text-dark">
                          <i className="fa fa-th-large" />
													商品管理
												</h5>
                      </Link>
                    </div>
                    <div className="collapse side-nav-bar" id="sideNavprod">
                      <div className="d-flex flex-column align-items-end">
                        <Link className="search sideNavItem" to={"/backend/prod/search"}>
                          PSearch
												</Link>
                        <Link className="putNew sideNavItem" to={"/backend/prod/putnew"}>
                          PPutNew
												</Link>
                        <Link className="putNew sideNavItem" to={"/backend/prod/putonlist"}>
                          PPutOnList
												</Link>
                        <Link className="putNew sideNavItem" to={"/backend/prod/search/detail"}>
                          PDetail
												</Link>
                        <Link className="putNew sideNavItem" to={"/backend/prod/pudate/simple"}>
                          PSimUpdate
												</Link>
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
              <Route path="/backend" exact component={ProdSearchList} />
            </div>
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

export default BackEnd;
