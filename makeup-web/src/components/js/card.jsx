import React, { Component } from "react";
import { Link } from "react-router-dom";
import IMGPath from "./imgPath"; //引入圖片

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pID: this.props.pID,
		};
		//console.log(props.data);
		this.imgPath = new IMGPath();
		this.p = require.context("../images/product", false, /\.(png|jpe?g|svg)$/);
	}

	render() {
		return (
			//產品卡
			<Link to={"/p/" + this.state.pID} className="card">
				<span className="love">♡</span>
				<div className="cardinside">
					{/*圖片*/}
					<div className="previewIMG">
						<img src={this.imgPath.importAll(this.p)["homeProduct1.jpg"]} alt="product" />
					</div>

					{/*簡介*/}
					<div className="productInfo">
						<div className="productName">
							<h5>{this.props.data != null ? this.props.data.productName : ""}</h5>
						</div>
						<i>
							<span>$</span>
							<span>{this.props.data != null ? this.props.data.unitPrice : ""}</span>
							<span>元</span>
						</i>
						{/*<button>add cart</button>*/}
					</div>
				</div>
			</Link>
		);
	}
}

export default Card;
