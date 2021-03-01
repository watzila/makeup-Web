import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./css/header.css"
import "./css/headerCart.css"

import HeaderCart from "./js/headerCart"
import CreateCard from "./js/createCard" //創建商品卡
import Ajax from "./js/ajax"

import logo from "./images/logo icon.png"
//import IMGPath from "./js/imgPath"; //引入圖片
class Header extends Component {
	constructor(props) {
		super(props)

		this.state = {
			data: null,
			headerCartBoxStyle: null,
		}

		this.prevScrollpos = window.pageYOffset

		this.member = JSON.parse(sessionStorage.getItem("member"))

		//this.imgPath = new IMGPath();
		this.ajax = new Ajax()
		this.createCard = new CreateCard()

		if (sessionStorage.getItem("member")) {
			this.cId = JSON.parse(sessionStorage.getItem("member"))

			this.ajax.startListener("get", "/cart?cId=" + this.cId.customer_id, this.u)
		}

		this.updateCartInfo()

		window.addEventListener("keydown", function (event) {
			if (event.key === "Esc" || event.key === "Escape") {
				sessionStorage.clear()
			}
		})
	}

	//更新購物車數量顯示
	updateCartInfo = () => {
		this.ws = new WebSocket("ws://localhost:3002")

		this.ws.onopen = (event) => {
			console.log("connect success")
			this.ws.send(JSON.stringify({ who: "myHeader" }))
		}

		this.ws.onmessage = (event) => {
			var parseData = JSON.parse(event.data)
			console.log(parseData)

			if (parseData.info === "cartCheck") {
				this.ajax.startListener("get", "/cart?cId=" + this.cId.customer_id, this.u)
			}
		}
	}

	u = (data) => {
		// if (data == this.state.data) {
		//   console.log(2);
		//   return;
		// }

		let apple = {
			subtotal: null,
			onDelete: this.handleDelete,
		}

		for (var i = 0; i < data.length; i++) {
			Object.assign(data[i], apple)
		}

		this.setState({ data: data })

		console.log(data)
		// console.log(this.state.data);

		// 購物車加入購物車顯示
		// var bee = document.getElementById('headerCartBoxTop');
		// bee.className = 'headerCartBoxAdd';

		// setTimeout(() => {
		//   bee.className = 'headerCartBox';
		// }, 500);

		// console.log(this.state.data.length);
	}

	// 金額 小記subtotal “初始化”(複製cartList)
	init = () => {
		if (this.state.data != null) {
			// for (var i = 0; i < this.state.data.length; i++) {
			//   this.state.data[i].subtotal =
			//     this.state.data[i].quantity * this.state.data[i].unitPrice;
			// }
			// this.setState({});
		}
	}

	// 功能：商品金額小記subtotal隨著數量改變(複製cartList)
	// handleSubtotal = (obj) => {
	//   this.state.data[this.state.data.indexOf(obj)].subtotal =
	//     this.state.data[this.state.data.indexOf(obj)].quantity *
	//     this.state.data[this.state.data.indexOf(obj)].unitPrice;

	//   this.setState({});
	// };

	// 功能：商品刪除 (複製cartList)
	handleDelete = (idProduct) => {
		//  console.log("handleDelete clicked");
		console.log(idProduct)

		const newArray = this.state.data.filter((item) => item.product_id !== idProduct)
		//this.state.data = newArray;
		// console.log(newArray);

		// this.state.counters = newArray;
		// this.setState({});
		// console.log(JSON.parse(sessionStorage.getItem('member')).customer_id);

		this.setState({ data: newArray })

		this.ajax.startListener("post", "/delete", this.u, {
			c_id: JSON.parse(sessionStorage.getItem("member")).customer_id,
			p_id: idProduct,
		})
		this.ws.send(JSON.stringify({ who: "cartCheck2" }))
	}

	componentDidMount() {
		this.headerMove()
	}

	componentDidUpdate() {
		if (this.state.data != null) {
			if (this.state.data.length > 0) {
				var bee = document.getElementById("headerCartBoxTop")

				bee.className = "headerCartBox"
			}
		}
		// this.ajax.startListener('get', '/cart?cId=' + this.cId.customer_id, this.u);
		//console.log(1);
		// console.log(this.state.data.length);
		// 購物車空車的話 隱藏購物車欄位
	}

	// header特效
	headerMove = () => {
		window.onscroll = () => {
			var currentScrollPos = window.pageYOffset
			if (this.prevScrollpos > currentScrollPos) {
				document.querySelector(".header").style.top = "0"
			} else {
				document.querySelector(".header").style.top = "-230px"
			}
			this.prevScrollpos = currentScrollPos
		}
	}

	render() {
		return (
			<header className="header">
				<nav className="navbar">
					<div className="rightIcon">
						<Link to="/">
							<img src={logo} alt="logo" />
						</Link>
					</div>

					<div className="navBoxL">
						<Link to="/" className="dropdown">
							首頁
						</Link>
						<Link to="/about" className="dropdown">
							關於我們
						</Link>
						<a className="dropdown" style={{ cursor: "pointer" }}>
							客製化
							<div className="dropdown-content">
								<button
									onClick={() => {
										window.location.href = "/customp/乳液/pid=24"
									}}
								>
									乳液
								</button>
								<br />
								<button
									onClick={() => {
										window.location.href = "/customp/眼霜/pid=26"
									}}
								>
									眼霜
								</button>
								<br />
								<button
									onClick={() => {
										window.location.href = "/customp/化妝水/pid=23"
									}}
								>
									化妝水
								</button>
								<br />
								<button
									onClick={() => {
										window.location.href = "/customp/卸妝水/pid=25"
									}}
								>
									卸妝水
								</button>
								<br />
							</div>
						</a>

						<Link to="/p/全部/1" className="dropdown">
							商品
							<div className="dropdown-content">
								<button
									onClick={() => {
										window.location.href = "/p/底妝/1"
									}}
								>
									底妝類
								</button>
								<br />
								<button
									onClick={() => {
										window.location.href = "/p/唇彩/1"
									}}
								>
									唇妝類
								</button>
								<br />
								<button
									onClick={() => {
										window.location.href = "/p/眼彩/1"
									}}
								>
									眼妝類
								</button>
								<br />
								{/*<button onClick={() => {
										window.location.href = "/p/底妝/1";
									}}>其他保養類</button>
								<br />*/}
							</div>
						</Link>
						<Link to="/skintest" className="dropdown">
							膚質
						</Link>
					</div>

					<div className="navBoxR">
						<Link
							to={this.member != null ? "/member" : "/login"}
							onClick={this.aa}
							className="fa fa-user-circle"
						>
							{this.member != null ? this.member.nickname : ""}
						</Link>
						<div className="cartWrap">
							<Link to="/cart" className="fa fa-shopping-cart">
								<span className="cartQty">
									{this.state.data != null ? this.state.data.length : 0}
								</span>
							</Link>
							<table id="headerCartBoxTop">
								<tbody>
									{this.state.data != null
										? this.createCard.create(this.state.data.length, HeaderCart, this.state.data)
										: null}
								</tbody>
							</table>
						</div>
					</div>
				</nav>
			</header>
		)
	}
}

export default Header
