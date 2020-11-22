import React, { Component } from "react";
import { Link } from "react-router-dom";
import IMGPath from "./imgPath"; //引入圖片

class HotCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "濟州島火山泥鼻頭",
			price: 280,
			pID: this.props.pID,
		};

		this.imgPath = new IMGPath();
		this.p = require.context("../images/product", false, /\.(png|jpe?g|svg)$/);
	}

	render() {
		return (
			//熱銷小卡
			<Link to={"/p/" + this.state.pID} className="topSellCar">
				<div className="cardIMG">
					<img src={this.imgPath.importAll(this.p)["homeProduct1.jpg"]} alt="product" />
				</div>
				{/*星星*/}
				<div className="star">
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star"></span>
					<span className="fa fa-star"></span>
					<small>9則評論</small>
				</div>
				{/*星星 end*/}
				<span>{this.state.title}</span>

				<div className="addCardBtn">
					<button>加入購物車 | ${this.state.price}</button>
				</div>
			</Link>
		);
	}
}

export default HotCard;
