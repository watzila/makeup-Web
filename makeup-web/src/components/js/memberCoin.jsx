import React, { Component } from "react";
import MemberCoinEach from "./memberCoinEach"
import Ajax from "./ajax";
import CreatCard from "./createCard";
//import "../css/memberCoin.css";

class MemberCoin extends Component {
	constructor(){
		super();
		this.state = {
		  data: null,
		};
		this.ajax = new Ajax();
		this.creatCard = new CreatCard();
		this.ajax.startListener(
		  "post",
		  `/membercoin/`,
		  this.u,
		  { cId: JSON.parse(sessionStorage.getItem("member")).customer_id }
		);
		// console.log(JSON.parse(sessionStorage.getItem("member")));
	  }
	
	  u = (data) => {
		this.setState({ data: data });
		// console.log(this.state.data.length);
	  };

	render(){
	return (
		<div className="memberCoinOut">
			<div className="coin">
				<div className="title">項目</div>
				<div className="title">時間</div>
				<span>賺取星幣</span>
			</div>
			<hr />
			{this.state.data == null
          ? ""
          : this.creatCard.create(
              this.state.data.length,
              MemberCoinEach,
              this.state.data
            )}
			
		</div>
	);}
}
export default MemberCoin;
