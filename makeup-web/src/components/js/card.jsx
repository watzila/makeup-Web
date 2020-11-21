import React, { Component } from "react";
import { Link } from "react-router-dom";
import productIMG from "../images/product1.jpg";

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "極上粉嫩保濕粉底霜",
			pID: this.props.pID,
		};
		//console.log(props.data);
	}

	render() {
		return (
			//產品卡
			<Link to={"/p/" + this.state.pID} className="card">
				<span className="love">♡</span>

				<div className="cardinside">
					{/*圖片*/}
					<div className="previewIMG">
						<img src={productIMG} alt="product" />
					</div>

					{/*簡介*/}
					<div className="productInfo">
						<div className="productName">
							<h5>{this.state.title}</h5>
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
