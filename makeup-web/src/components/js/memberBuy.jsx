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
      { nickname: JSON.parse(sessionStorage.getItem("member")).nickname }
    );
    // console.log(JSON.parse(sessionStorage.getItem("member")));
  }

  u = (data) => {
    this.setState({ data: data });
    // console.log(this.state.data.length);
  };

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
