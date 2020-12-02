import React, { Component } from "react";
import MemberFavoriteEach from "./memberFavoriteEach";
import Ajax from "./ajax";
import CreatCard from "./createCard";
//import "../css/memberBuy.css";

class MemberFavorite extends Component {
	constructor() {
		super();
		this.state = {
			data: null,
		};
		this.ajax = new Ajax();
		this.creatCard = new CreatCard();
		this.ajax.startListener("post", `/memberfavorite/`, this.u, {
			cId: JSON.parse(sessionStorage.getItem("member")).customer_id,
		});
		// console.log(JSON.parse(sessionStorage.getItem("member")));
	}
	u = data => {
		let apple = {
			onDelete: this.onDelete,
			prodDetail: this.prodDetail,
		};

		for (var i = 0; i < data.length; i++) {
			Object.assign(data[i], apple);
		}

		this.setState({ data: data });
		console.log(data);
	};

	onDelete = (event, pId) => {
		event.stopPropagation();
		const newArray = this.state.data.filter(item => item.product_id !== pId);
		this.state.data = newArray;
		this.setState({});
		this.ajax.startListener("post", "/deletefavo", this.u, {
			cId: JSON.parse(sessionStorage.getItem("member")).customer_id,
			pId: pId,
		});
	};

	prodDetail = (pid, kind) => {
		console.log(pid, kind);
		// const newArray = this.state.data.filter(
		//   (item) => item.product_id !== e
		// );
		// this.state.data = newArray;
		// this.setState({});
		window.location.href = `http://localhost:3000/pd/${kind}/pid=${pid}`;
	};

	render() {
		return (
			<div className="userForm">
				<div className="memberBuy" style={{ textAlign: "center" }}>
					<div className="kindName">品名</div>
					<div className="smallTot">單價</div>
				</div>
				<hr />
				{/* 產品單項描述(第一項訂單) */}

				{this.state.data == null
					? ""
					: this.creatCard.create(this.state.data.length, MemberFavoriteEach, this.state.data)}
			</div>
		);
	}
}

export default MemberFavorite;
