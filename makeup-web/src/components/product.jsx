import React, { Component } from "react";
import Card from "./js/card";
import CreateCard from "./js/createCard"; //創建商品卡
import Ajax from "./js/ajax";
import IMGPath from "./js/imgPath"; //引入圖片
import "./css/product.css";
import { Link } from "react-router-dom";

class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null, //當前頁數資料
			allData: null, //所有產品資料
			fData: null, //我的最愛資料
			hotData: null, //暢銷產品資料

			aa: true,
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
			if (this.props.match.params.kind === "全部") {
				this.ajax.startListener("get", "/p", this.u);
			} else {
				this.ajax.startListener("get", "/p?kind=" + this.props.match.params.kind, this.u);
			}
		}
	}

	//我的最愛資料更新
	u2 = data => {
		this.setState({ fData: data });
		if (this.props.match.params.kind === "全部") {
			this.ajax.startListener("get", "/p", this.u);
		} else {
			this.ajax.startListener("get", "/p?kind=" + this.props.match.params.kind, this.u);
		}
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

		//console.log(data);
		this.setState({ data: newData[0], allData: newData });

		if (this.state.aa) {
			this.hotProduct(data);
		}
		//頁數按鈕初始化
		document.querySelector(`.page a:nth-of-type(${2})`).className = "click";
		if (this.props.match.params.kind != "全部") {
			window.scrollTo(0, 1700);
		} else {
			window.scrollTo(0, 0);
		}
	};

	//加入、移除最愛
	addLove = (event, pid) => {
		event.preventDefault();
		let newFData = this.state.fData;
		let newData = this.state.data;

		//let num = pid % 8 ? (pid % 8) - 1 : 7;
		let index = newFData.map(item => item.product_id).indexOf(pid);
		let index2 = newData.map(item => item.product_id).indexOf(pid);

		if (sessionStorage.getItem("member")) {
			let cId = JSON.parse(sessionStorage.getItem("member")).customer_id;
			let newLove = { customer_id: cId, product_id: pid };
			if (index === -1) {
				newFData.push(newLove);
				newData[index2].f = newLove;
			} else {
				newFData.splice(index, 1);
				delete newData[index2].f;
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
					to={"/p/" + this.props.match.params.kind + "/" + (index + 1)}
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

	//隨機取商品做暢銷
	hotProduct = data => {
		let allData = data;
		let hotData = [];

		console.log(data);
		for (let i = 0; i < 4; i++) {
			let num = Math.floor(Math.random() * allData.length);
			//console.log(allData[num]);
			hotData.push(allData[num]);
			allData.splice(num, 1);
		}
		//console.log(hotData);
		this.setState({ hotData: hotData, aa: false });
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
							{this.state.hotData != null
								? this.createCard.create(4, Card, this.state.hotData)
								: null}
						</div>
					</div>

					<nav className="kindNav">
						<ul>
							<li
								className={this.props.match.params.kind === "全部" ? "click" : ""}
								onClick={() => {
									window.location.href = "/p/全部/1";
								}}
							>
								全部
							</li>
							<li
								className={this.props.match.params.kind === "底妝" ? "click" : ""}
								onClick={() => {
									window.location.href = "/p/底妝/1";
								}}
							>
								底妝
							</li>
							<li
								className={this.props.match.params.kind === "唇彩" ? "click" : ""}
								onClick={() => {
									window.location.href = "/p/唇彩/1";
								}}
							>
								唇彩
							</li>
							<li
								className={this.props.match.params.kind === "眼彩" ? "click" : ""}
								onClick={() => {
									window.location.href = "/p/眼彩/1";
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
								this.props.match.params.kind +
								"/" +
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
								this.props.match.params.kind +
								"/" +
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
