import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from "jquery";

import ProdList from "./js/back/prodList";
import ProdDetail from "./js/back/prodDetail";
import ProdPutNew from "./js/back/prodPutNew";
import MemberList from "./js/back/memberList";
import MemberDetail from "./js/back/memberDetail";
import BackOrderListMember from "./js/back/backOrderListMember";

import BackOrderList from "./js/back/backOrderList";
import BackOrderDetail from "./js/back/backOrderDetail";

import IMGPath from "./js/imgPath"; //引入圖片

import "./css/Backstage.css";
import "./css/form.css";
import "./css/table.css";
import "./css/bootstrap.css";
class BackEnd extends Component {
	constructor(prop) {
		super(prop);
		this.state = {
			data: null,
		};
		this.imgPath = new IMGPath();
		this.p = require.context("./images", false, /\.(png|jpe?g|svg)$/);
	}

	sideCollapse = () => {
		$("#sidebar").toggleClass("unvisible");
		if ($("#sidebar").hasClass("nuvisible")) {
			$("#collapseBtn i").removeClass("fa fa-caret-right");
			$("#collapseBtn i").addClass("fa fa-caret-left");
		} else {
			$("#collapseBtn i").removeClass("fa fa-caret-left");
			$("#collapseBtn i").addClass("fa fa-caret-right");
		}
	};

	render() {
		return (
			<main>
				<BrowserRouter>
					<div className="container-fluid ">
						<div className="row">
							<div
								id="sidebar"
								className="side col-2 pt-3 pb-3 gray-Link d-flex flex-column align-items-center "
							>
								<span
									id="collapseBtn"
									className="side-collapse-btn d-inlin-block ml-auto"
									onClick={this.sideCollapse}
								>
									<i className="fa fa-caret-left" />
								</span>
								<div>
									<img
										src={this.imgPath.importAll(this.p)[`花.png`]}
										width="100"
										height="100"
										alt="cart_product"
									/>
									{/*<img
                    className="sideLogo"
                    src={this.imgPath.importAll(this.avater)['logo.png']}
                    alt="avater"
                  />*/}
								</div>
								<ul className="pt-3 nav flex-column">
									{/*<li className="nav-item">
                    <div data-toggle="collapse" role="button">
                      <Link className="prod" to={'/'}>
                        <h5 className="text-dark">
                          <i className="fa fa-home" aria-hidden="true"></i>
                          首頁
                        </h5>
                      </Link>
                    </div>
                  </li>*/}
									<li className="nav-item">
										<div
											data-toggle="collapse"
											href="#sideNavmember"
											role="button"
											aria-expanded="false"
											aria-controls="sideNavprod"
										>
											<Link to={"/backend/member/1"} className="prod">
												<h5 className="text-dark">
													<i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
													會員管理
												</h5>
											</Link>
										</div>
									</li>
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
												<Link className="search sideNavItem" to={"/backend/prod/1"}>
													商品清單
												</Link>

												<Link className="putNew sideNavItem" to={"/backend/prod/new"}>
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
									{/*<li className="nav-item">
                    <h5 className="text-dark">
                      <i className="fa fa-tag" />
                      折扣活動
                    </h5>
                  </li>*/}
								</ul>
							</div>
							<Route exact path="/backend/member/:page([0-9])" component={MemberList} />
							<Route exact path="/backend/:member/memberdetail" component={MemberDetail} />

							<Route exact path="/backend/:memberId/memberorder" component={BackOrderListMember} />

							<Route exact path="/backend/order" component={BackOrderList} />
							<Route exact path="/backend/:member/orderdetail" component={BackOrderDetail} />

							<Route path="/backend/prod/:page([0-9])" exact component={ProdList} />
							<Route path="/backend/prod/detail/:pid" exact component={ProdDetail} />
							<Route path="/backend/prod/new" exact component={ProdPutNew} />
						</div>
					</div>
				</BrowserRouter>
			</main>
		);
	}
}

export default BackEnd;
