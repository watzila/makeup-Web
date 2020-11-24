import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import User from "./js/user";
import ChangePassword from "./js/changePassword";
import "./css/member.css";
import head from "./images/member/人頭.png";
import product from "./images/product/A_01.jpg"

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
          <div style={{display:"none"}}>
            <BrowserRouter>
              <Route path="/login" component={User} />
              <Route path="/login/edit/:account" component={ChangePassword} />
            </BrowserRouter>
          </div>
          <div>
            <nav className="firstNav">
              <ul>
                <li>全部</li>
                <li>待付款</li>
                <li>待出貨</li>
                <li>完成</li>
                <li>取消</li>
              </ul>
            </nav>
            <div>
              <section className="ctxtActive"
              >
                {/* 產品單項描述 */}
                <div className = "memberBuy">
                  <img src={product} width="20%" alt="產品" />
                  <span>控油烘焙蜜粉 <br/>
                  <small>規格:無</small>
                  </span>
                  <span>$450-單價</span>
                  <hr/>
                </div>
                {/* 總金額&訂單詳情按鈕 */}
                <div className="totalAndBuylist">
                訂單金額:$510 (+60運費)
                <button>查看訂單詳情</button>
                </div>
                
              </section>
            </div>
            
            
          </div>
        </article>

        <nav>
          <div className="member">
            <img src={head} width="20%" alt="人像" />

            {/*<div>*/}
            {/*<Link to="/member/edit">編輯個人檔案</Link>*/}
            {/*</div>*/}
          </div>

          <ul>
            <hr />
            <li id="aa" onClick={() => this.click(this.state.classes)} className="user">
              <i className="fa fa-user-circle-o"></i>
              我的帳號

              <div className={this.state.classes}>
                <Link to="/login" className="user">
                  <i className="fa fa-user-circle-o"></i>
                  個人檔案
                </Link>

                {/*<Link to="" className="address">
                  <i className="fa fa-address-card"></i>
                  購買地址
                </Link>

                <Link to="" className="marker">
                  <i className="fa fa-map-marker"></i>
                  地址
                </Link>*/}

                <Link to="/login/edit/apple" className="lock">
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
            <li>
              <Link to="/backEnd/manageorder" className="facebook">
                <i className="fa fa-heart"></i>
                後台
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Member;
