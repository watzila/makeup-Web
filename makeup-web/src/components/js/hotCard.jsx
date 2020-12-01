import React, { Component } from "react";
import { Link } from "react-router-dom";
import IMGPath from "./imgPath"; //引入圖片

class HotCard extends Component {
	constructor(props) {
		super(props);

		this.imgPath = new IMGPath();
		this.p = require.context("../images/product", false, /\.(png|jpe?g|svg)$/);
	}

	render() {
		return (
			//熱銷小卡
			<Link
				to={
					"/customp/" +
					(this.props.data != null ? this.props.data.kindA : "") +
					"/pid=" +
					(this.props.data != null ? this.props.data.product_id : "")
				}
				className="topSellCar"
			>
				<div className="cardIMG">
					<img
						src={
							this.imgPath.importAll(this.p)[this.props.data != null ? this.props.data.img_0 : ""]
						}
						alt="product"
					/>
				</div>
				{/*星星*/}
				<div className="star">
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star"></span>
					<span className="fa fa-star"></span>
					{/*<small>9則評論</small>*/}
				</div>
				{/*星星 end*/}
				<h3>{this.props.data != null ? this.props.data.productName : ""}</h3>

				<div className="addCardBtn">
					<button>加入購物車 | ${this.props.data != null ? this.props.data.unitPrice : ""}</button>
				</div>
			</Link>
		);
	}
}

export default HotCard;
