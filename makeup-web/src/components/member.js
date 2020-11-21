import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import User from "./js/user";
import ChangePassword from "./js/changePassword";
import "./css/member.css";
import head from "./images/member/人頭.png";

class Member extends Component {
  constructor() {
    super();
    this.state = {
      classes: "action"
    }
  }

  click(className) {
    console.log(className)
    this.setState({ classes: (className === "action") ? "null" : "action" });
  }

  render() {
    return (
      <div className="memberMain">
        <article>
          {/*<img src={head} alt="head" />*/}
          <BrowserRouter>
            <Route exact path="" component={User} />
            <Route exact path="/member/edit/:account" component={ChangePassword} />
          </BrowserRouter>
        </article>

        <nav>
          <div className="member">
            <img src={head} width="20%" alt="人像" />

            <div>
              <Link to="/member/edit">編輯個人檔案</Link>
              <hr />
            </div>
          </div>

          <ul>
            <li id="aa" onClick={() => this.click(this.state.classes)} className="user">
              <i className="fa fa-user-circle-o"></i>
              我的帳號

              <div className={this.state.classes}>
                <Link to="/member/edit/personal" className="user">
                  <i className="fa fa-user-circle-o"></i>
                  個人檔案
                </Link>

                <Link to="" className="address">
                  <i className="fa fa-address-card"></i>
                  購買地址
                </Link>

                <Link to="" className="marker">
                  <i className="fa fa-map-marker"></i>
                  地址
                </Link>

                <Link to="" className="lock">
                  <i className="fa fa-lock"></i>
                  更正密碼
                </Link>
              </div>
            </li>
            <li>
              <Link to="" className="facebook">
                <i className="fa fa-th-list"></i>
                購買清單
              </Link>
            </li>

            <li>
              <Link to="" className="facebook">
                <i className="fa fa-usd"></i>
                虛擬幣
              </Link>
            </li>

            <li>
              <Link to="" className="facebook">
                <i className="fa fa-heart"></i>
                收藏
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Member;
