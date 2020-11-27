import React, { Component } from "react";
//import "../css/memberBuy.css";
import product1 from "../images/product/A_01.jpg";
// import product2 from "../images/product/A_02.jpg";

class MemberFavoriteEach extends Component {
	constructor(props) {
		super(props);
		// console.log(this.props.data);
	  }
	render() {
		return (
			<div>
			
				{/* 產品單項描述(第一項訂單) */}
				<div className="memberBuy">
					<div>
						<img src={product1} width="28%" alt="產品" />
						<div>
						{this.props.data == null ? "" : this.props.data.productName} <br />
							<small>規格:
							{this.props.data == null ? "" : this.props.data.productColor}
							</small>
						</div>
					</div>
					<div>{this.props.data == null ? "" : this.props.data.quantity}</div>
					<div>${this.props.data == null ? "" : this.props.data.unitPrice}

					</div>
				</div>
				<hr />
			</div>
		);
	}
}

export default MemberFavoriteEach;
