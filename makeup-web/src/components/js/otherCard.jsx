import React, { Component } from "react";
import { Link } from "react-router-dom";
import IMGPath from "./imgPath"; //引入圖片

class OtherCard extends Component {
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
			//其他商品小卡
			<Link to={"/p/" + this.state.pID} className="downSellCar">
				{/*圖*/}
				<div className="otherCardIMG">
					<img src={this.imgPath.importAll(this.p)["A_01.jpg"]} alt="product" />
				</div>

				<div className="textWrap">
					{/*品名*/}
					<h3>濟州島火山泥鼻頭</h3>

					{/*其他*/}
					<div>
						<i>$250</i>
						<i>♡</i>
					</div>
				</div>
			</Link>
		);
	}
}

export default OtherCard;
