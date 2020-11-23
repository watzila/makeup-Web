import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footerTop w">
          <div className="footerTopInside">
            <div className="footerLeft">
              <span className="fa fa-instagram"></span>
              <span className="fa fa-facebook-square"></span>
              <span className="fa fa-twitter-square"></span>
            </div>
            <div className="footerRight">
              <div>
                <dl>購物說明
                <dd>付款方式</dd>
                  <dd>運送方式</dd>
                  <dd>退換貨問題</dd>
                </dl>
              </div>
              <div>
                <dl>客服資訊
                <dd>客服留言</dd>
                  <dd>會員權益聲明</dd>
                  <dd>
                    <a href="https://tw.memebox.com/Shop/Introduce/7378?t=3">聯絡我們</a>
                  </dd>
                </dl>
              </div>
              <div>
                <dl>常見問題</dl>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p className="">緩緩有限公司 版權所有 適合解析度 1920*1080</p>
        </div>
      </footer>
    );
  }
}

export default Footer;