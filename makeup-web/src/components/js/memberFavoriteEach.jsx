import React, { Component } from "react";
//import "../css/memberBuy.css";
import IMGPath from './imgPath'; 

class MemberFavoriteEach extends Component {
	constructor(props) {
		super(props);
		// console.log(this.props.data);
		this.imgPath = new IMGPath();
    	this.p = require.context('../images/product', false, /\.(png|jpe?g|svg)$/);
	  }

	render() {
		return (
			<div>
				{/* 產品單項描述(第一項訂單) */}
				<div 
				onClick={(pid,kind) => this.props.data.prodDetail(this.props.data.product_id,this.props.data.kindB)}
				className="memberBuy">
					<div>
						<img 
						src={ this.imgPath.importAll(this.p)[`${this.props.data.img_0}`]}
						width="28%" alt="產品" />
						<div>
							{this.props.data == null ? "" : this.props.data.productName}<br/>
							<small>規格:
							{this.props.data == null ? "" : this.props.data.productColor}
							</small>
						</div>
					</div>
					<div>{this.props.data == null ? "" : this.props.data.quantity}</div>
					<div>${this.props.data == null ? "" : this.props.data.unitPrice}</div>
					<div >
						<button className="deleteBtn" 
					  	onClick={(event,pId) => this.props.data.onDelete(event,this.props.data.product_id)}
					  	> 刪除</button>

						 
					  </div>
				
				</div>

				<hr />
			</div>
		);
	}
}

export default MemberFavoriteEach;
