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
			data: null,
		};

		this.imgPath = new IMGPath();
		this.ajax = new Ajax();
		this.createCard = new CreateCard();

		this.b = require.context("./images/banner", false, /\.(png|jpe?g|svg)$/);
		this.bg = require.context("./images/background", false, /\.(png|jpe?g|svg)$/);

		this.ajax.startListener("get", "/p/", this.u);
	}

	u = data => {
		this.setState({ data: data });
		console.log(data);
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
							{this.createCard.create(4, Card, this.state.data)}
						</div>
					</div>

					<nav className="kindNav">
						<ul>
							<li className="click">眼線</li>
							<li>眼影</li>
							<li>眼眉</li>
							<li>睫毛</li>
						</ul>
					</nav>

					<div className="grid" style={{ "--i": 4 }}>
						{this.createCard.create(8, Card, this.state.data)}
					</div>

					<div className="page">
						<Link to="">&lt;</Link>
						<Link to="" className="click">
							1
						</Link>
						<Link to="">2</Link>
						<Link to="">3</Link>
						<Link to="">&gt;</Link>
					</div>
				</div>
			</main>
		);
	}
}

export default Product;
