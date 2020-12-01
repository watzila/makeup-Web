import React, { Component } from "react";
import Card from "./js/card";
import CreateCard from "./js/createCard"; //創建商品卡
import Ajax from "./js/ajax";
import IMGPath from "./js/imgPath"; //引入圖片
import "./css/product.css";
import { Link } from "react-router-dom";

class Product extends Component {
	constructor() {
		super();
		this.state = {
			data: null, //當前頁數資料
			allData: null, //所有產品資料
			fData: null, //我的最愛資料
		};

		this.imgPath = new IMGPath();
		this.ajax = new Ajax();
		this.createCard = new CreateCard();

		this.b = require.context("./images/banner", false, /\.(png|jpe?g|svg)$/);
		this.bg = require.context("./images/background", false, /\.(png|jpe?g|svg)$/);

		if (sessionStorage.getItem("member")) {
			this.ajax.startListener(
				"get",
				`/myLove?cId=${JSON.parse(sessionStorage.getItem("member")).customer_id}`,
				this.u2
			);
		} else {
			this.ajax.startListener("get", "/p", this.u);
		}
	}

	//我的最愛資料更新
	u2 = data => {
		this.setState({ fData: data });
		this.ajax.startListener("get", "/p", this.u);
		//console.log(data);
	};

	//所有產品資料更新
	u = data => {
		let newData = [],
			i = 0;

		//我的最愛資料合併到所有產品資料
		if (this.state.fData != null) {
			for (let l = 0; l < data.length; l++) {
				data[l].addLove = this.addLove;
				for (let k = 0; k < this.state.fData.length; k++) {
					if (this.state.fData[k].product_id === data[l].product_id) {
						data[l].f = this.state.fData[k];
						continue;
					}
				}
			}
		}

		//所有產品資料資料拆分8個為一組
		do {
			let d = [];
			for (let j = 0; j < 8; j++) {
				if (data[j + i]) {
					d.push(data[j + i]);
				} else {
					break;
				}
			}
			newData.push(d);
			i += 8;
		} while (i < data.length);

		this.setState({ data: newData[this.props.match.params.page - 1], allData: newData });

		//頁數按鈕初始化
		document.querySelector(
			`.page a:nth-of-type(${this.props.match.params.page * 1 + 1})`
		).className = "click";

		console.log(this.state.data);
	};

	//加入、移除最愛
	addLove = (event, pid) => {
		event.preventDefault();
		let newFData = this.state.fData;
		let newData = this.state.data;

		let num = pid % 8 ? (pid % 8) - 1 : 7;
		let index = newFData.map(item => item.product_id).indexOf(pid);

		if (sessionStorage.getItem("member")) {
			let cId = JSON.parse(sessionStorage.getItem("member")).customer_id;
			let newLove = { customer_id: cId, product_id: pid };
			if (index === -1) {
				newFData.push(newLove);
				newData[num].f = newLove;
			} else {
				newFData.splice(index, 1);
				delete newData[pid - 1].f;
			}
			this.ajax.startListener("get", `/addLove?pId=${pid}&cId=${cId}`, this.u);
			this.setState({ fData: newFData });
			this.setState({ data: newData });
		}
	};

	//換頁
	changePage = (page, which) => {
		console.log(page, which);
		if (page < 0 || page > this.state.allData.length - 1) return;
		this.setState({ data: this.state.allData[page] });

		for (let i = 0; i <= this.state.allData.length; i++) {
			let allA = document.querySelectorAll(".page a");
			allA[i].className = null;
		}
		document.getElementById(which).className = "click";
	};

	//頁碼生成
	createPageNumber = () => {
		let pageNumber = this.state.allData.map((item, index) => {
			return (
				<Link
					to={"/p/" + (index + 1)}
					key={index}
					id={"page_" + index}
					onClick={() => {
						this.changePage(index, "page_" + index);
					}}
				>
					{index + 1}
				</Link>
			);
		});

		return pageNumber;
	};

	//商品篩選
	search = (event, kind = "") => {
		let kindNav = document.querySelectorAll(".kindNav li");

		if (kind !== "") {
			this.ajax.startListener("get", "/p?kind=" + kind, this.u);
		} else {
			this.ajax.startListener("get", "/p", this.u);
		}

		for (let el of kindNav) {
			el.className = "";
		}

		event.target.className = "click";
	};

	render() {
		return (
			<main className="productMain">
				<div className="productBanner">
					<img src={this.imgPath.importAll(this.b)["productBanner1.jpg"]} alt="banner" />
				</div>

				<div className="w productPage">
					<img src={this.imgPath.importAll(this.bg)["productBG1.png"]} alt="bg" />

					<div className="hotItems">
						<div className="title">
							<span></span>
							<h3>暢銷商品</h3>
							<span></span>
						</div>

						<div className="grid" style={{ "--i": 4 }}>
							{this.state.data != null
								? this.createCard.create(4, Card, this.state.allData[0])
								: null}
						</div>
					</div>

					<nav className="kindNav">
						<ul>
							<li
								className="click"
								onClick={event => {
									this.search(event);
								}}
							>
								全部
							</li>
							<li
								onClick={event => {
									this.search(event, "底妝");
								}}
							>
								底妝
							</li>
							<li
								onClick={event => {
									this.search(event, "唇彩");
								}}
							>
								唇彩
							</li>
							<li
								onClick={event => {
									this.search(event, "眼彩");
								}}
							>
								眼彩
							</li>
							{/*<li>睫毛</li>*/}
						</ul>
					</nav>

					<div className="grid" style={{ "--i": 4 }}>
						{this.state.data != null
							? this.createCard.create(this.state.data.length, Card, this.state.data)
							: null}
					</div>

					<div className="page">
						<Link
							to={
								"/p/" +
								(this.props.match.params.page > 1 ? this.props.match.params.page * 1 - 1 : 1)
							}
							onClick={() => {
								this.changePage(
									this.props.match.params.page * 1 - 2,
									"page_" + (this.props.match.params.page * 1 - 2)
								);
							}}
						>
							&lt;
						</Link>
						{this.state.allData != null ? this.createPageNumber() : null}
						<Link
							to={
								"/p/" +
								(this.props.match.params.page <
								(this.state.allData != null ? this.state.allData.length : null)
									? this.props.match.params.page * 1 + 1
									: this.state.allData != null
									? this.state.allData.length
									: null)
							}
							onClick={() => {
								this.changePage(
									this.props.match.params.page,
									"page_" + this.props.match.params.page
								);
							}}
						>
							&gt;
						</Link>
					</div>
				</div>
			</main>
		);
	}
}

export default Product;
