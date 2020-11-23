import React, { Component } from "react";
import { Link } from "react-router-dom";
import IMGPath from "./imgPath"; //引入圖片

class OtherCard extends Component {
	constructor(props) {
		super(props);

		this.imgPath = new IMGPath();
		this.p = require.context("../images/product", false, /\.(png|jpe?g|svg)$/);
	}

	render() {
		return (
			//其他商品小卡
			<Link
				to={
					"/p/" +
					(this.props.data != null ? this.props.data.kindA : "") +
					"/pid=" +
					(this.props.data != null ? this.props.data.product_id : "")
				}
				className="downSellCar"
			>
				{/*圖*/}
				<div className="otherCardIMG">
					<img
						src={
							this.imgPath.importAll(this.p)[this.props.data != null ? this.props.data.img_0 : ""]
						}
						alt="product"
					/>
				</div>

				<div className="textWrap">
					{/*品名*/}
					<h3>{this.props.data != null ? this.props.data.productName : ""}</h3>

					{/*其他*/}
					<div>
						<i>${this.props.data != null ? this.props.data.unitPrice : ""}</i>
						<i>♡</i>
					</div>
				</div>
			</Link>
		);
	}
}

export default OtherCard;
