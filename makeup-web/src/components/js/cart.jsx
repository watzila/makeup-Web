import React, { Component } from "react";

class Cart extends Component {
	state = {
		count: this.props.count,
		subtotal: this.props.subtotal,
	};

	// 當點擊增加或減少數量的按鈕時，回父層去改變數量，並且執行handleChange，讓子層的數量也更新(this.state.count)，讓其顯示在畫面上
	handleChange = obj => {
		this.setState({ count: obj.count });
		// console.log(e);
	};

	render() {
		// console.log(this.props.count);
		// console.log(this.props.subtotal);

		return (
			<tr className="productItem">
				<td className="productName">
					<div>
						<img
							src="https://hinetcdn.waca.ec/uploads/shops/800/products/78/thumb_cache/75_784a212efaa02430b77c15abda4cabce.jpg"
							width="80"
							height="80"
							alt=""
						/>
					</div>
					<div>
						<a href="https://dorene.com.tw/product/detail/303450">
							秋季禮遇 ▌新手肌本保養3件組新手肌本保養3件組新手肌本保養3件組
						</a>
						<p>單一規格</p>
						<i className="fa fa-tags" aria-hidden="true"></i>
						<small>預計11/24開始出貨</small>
					</div>
				</td>

				<td className="productQuantity">
					<div
						onClick={() => {
							this.props.onDecrement(this.props.obj);
							this.handleChange(this.props.obj);
						}}
						className="btnDecrease"
					>
						-
					</div>

					<input type="text" value={this.state.count} readOnly />

					<div
						onClick={() => {
							this.props.onIncrement(this.props.obj);
							this.handleChange(this.props.obj);
						}}
						className="btnIncrease"
					>
						+
					</div>
				</td>
				<td>{this.props.unitPrice}</td>
				<td>{this.props.subtotal}</td>
				<td>
					<div onClick={() => this.props.onDelete(this.props.id)} className="btnDelete">
						<i className="fa fa-trash" aria-hidden="true"></i>
					</div>
				</td>
			</tr>
		);
	}
	//      handleIncrement = (product) => {
	//     this.setState({count: this.state.count + 1})
	//     console.log(this.state.count);
	// }
}

export default Cart;
