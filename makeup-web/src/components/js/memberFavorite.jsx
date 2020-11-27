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
      nickname: JSON.parse(sessionStorage.getItem("member")).nickname,
    });
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
          <div className="smallTot">單價</div>
        </div>
        {/* 產品單項描述(第一項訂單) */}
        {this.state.data == null
          ? ""
          : this.creatCard.create(
              this.state.data.length,
              MemberFavoriteEach,
              this.state.data
            )}

      </div>
    );
  }
}

export default MemberFavorite;
