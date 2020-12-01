import React, { Component } from "react";
import { Link } from "react-router-dom";
import IMGPath from "./imgPath"; //引入圖片

class Card extends Component {
	constructor(props) {
		super(props);

		//console.log(props.data);
		this.imgPath = new IMGPath();
		this.p = require.context("../images/product", false, /\.(png|jpe?g|svg)$/);
	}

	render() {
		return (
			//產品卡
			<Link
				to={
					"/p/" +
					(this.props.data != null ? this.props.data.kindA : "") +
					"/pid=" +
					(this.props.data != null ? this.props.data.product_id : "")
				}
				className="customCard"
			>
				<span
					className="love"
					onClick={event =>
						this.props.data.addLove != null
							? this.props.data.addLove(event, this.props.data.product_id)
							: null
					}
				>
					{this.props.data.f != null ? "♥" : "♡"}
				</span>
				<div className="cardinside">
					{/*圖片*/}
					<div className="previewIMG">
						<img
							src={
								this.imgPath.importAll(this.p)[this.props.data != null ? this.props.data.img_0 : ""]
							}
							alt="product"
						/>
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
