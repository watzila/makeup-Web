import React, { Component } from "react";
import MemberBuyEach from "./memberBuyEach";
import Ajax from "./ajax";
import CreatCard from "./createCard";
//import "../css/memberBuy.css";


class MemberBuy extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
    this.ajax = new Ajax();
    this.creatCard = new CreatCard();
    this.ajax.startListener(
      "post",
      `/memberbuy/`,
      this.u,
      { cId: JSON.parse(sessionStorage.getItem("member")).customer_id }
    );
    // console.log(JSON.parse(sessionStorage.getItem("member")));
  }

  u = (data) => {
    let apple = {
      onCheck: this.onCheck,
    };
    for (var i = 0; i < data.length; i++) {
      Object.assign(data[i], apple);
    }
    this.setState({ data: data });
    // console.log(data);
  };

  onCheck = (oId)=>{
    console.log(oId);
    this.ajax.startListener('post', '/searchOrder', this.u, {
      id: JSON.parse(sessionStorage.getItem('member')).customer_id
    });
    window.location.href=`http://localhost:3000/order`;
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
        <hr/>
        {this.state.data == null
          ? ""
          : this.creatCard.create(
              this.state.data.length,
              MemberBuyEach,
              this.state.data
            )}
      </div>
    );
  }
}

export default MemberBuy;
