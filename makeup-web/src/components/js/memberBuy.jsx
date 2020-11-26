import React, { Component } from "react";
//import "../css/memberBuy.css";
import product1 from "../images/product/A_01.jpg";
import product2 from "../images/product/A_02.jpg";
import Ajax from "./ajax";//和伺服連線
class MemberBuy extends Component {
	constructor(){
		super();
	this.state = {
		data:null
	};
	this.ajax = new Ajax();
	this.ajax.startListener("post", `/member/memberbuy/${JSON.parse(sessionStorage.getItem("member")).nickname}`, this.u, {nickname:JSON.parse(sessionStorage.getItem("member")).nickname});
	console.log(JSON.parse(sessionStorage.getItem("member")))
	}

	u = (data) => {
		this.setState({ data: data });
		// console.log(data);
	  }

	render() {
		return (
			<div className="memberBuyOut">
				<div className="memberBuy" style={{ textAlign: "center" }}>
					<div>品名</div>
					<div className="smallTot">數量</div>
					<div className="smallTot">小計</div>
					<div>出貨狀態</div>
				</div>
				{/* 產品單項描述(第一項訂單) */}
				<div className="memberBuy">
					<div>
						<img src={product1} width="28%" alt="產品" />
						<div>
							{this.state.data == null ? "" : this.state.data[0].quantity} <br />
							<small>規格:無</small>
						</div>
					</div>
					<div>{this.state.data == null ? "" : this.state.data[0].quantity}</div>
					<div>$450</div>
					<div>已出貨</div>
				</div>
				{/* 總金額&訂單詳情按鈕 */}
				<div className="totalAndBuylist">
					訂單總金額:$510
					<button>查看訂單詳情</button>
				</div>
				<hr />

				{/* 產品單項描述(第二項訂單) */}
				<div className="memberBuy">
					<div>
						<img src={product2} width="28%" alt="產品" />
						<div>
							控油烘焙蜜粉 <br />
							<small>規格:無</small>
						</div>
					</div>
					<div>1</div>
					<div>$450</div>
					<div>已出貨</div>
				</div>
				{/* 總金額&訂單詳情按鈕 */}
				<div className="totalAndBuylist">
					訂單總金額:$510
					<button>查看訂單詳情</button>
				</div>
				<hr />
			</div>
		);
	}
}

export default MemberBuy;
