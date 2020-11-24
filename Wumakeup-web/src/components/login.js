import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      class1: "yesAccount active",
      class2: "noAccount",
      registerForm: "active",
      loginForm: "",
      changeFormLeft: { left: "0%" },
      inputFormLeft: { left: "50%" }
    }
  }

  signChange = (className) => {
    switch (className) {
      case "yesAccount":
        this.state.class1 = (this.state.class1 === className) ? className + " active" : className;
        this.state.class2 = "noAccount active";
        this.state.registerForm = "";
        this.state.loginForm = "active";
        var newChangeFormLeft = { left: "50%" };
        var newInputFormLeft = { left: "0%" };

        this.setState({ changeFormLeft: newChangeFormLeft, inputFormLeft: newInputFormLeft });
        break;

      case "noAccount":
        this.state.class1 = "yesAccount active";
        this.state.class2 = (this.state.class2 === className) ? className + " active" : className;
        this.state.registerForm = "active";
        this.state.loginForm = "";
        var newChangeFormLeft = { left: "0%" };
        var newInputFormLeft = { left: "50%" };

        this.setState({ changeFormLeft: newChangeFormLeft, inputFormLeft: newInputFormLeft });
        break;

      default:
        return;
    }
  }

  render() {
    return (
      <main className="loginMain" id="container">
        <div className="loginWrap" style={this.state.styleLoginWrap}>
          <div className="changeForm" style={this.state.changeFormLeft}>
            <div className="doorIMG">
              <div className={this.state.class1}>
                {/* <h1>Welcome</h1> */}
                <button onClick={() => this.signChange("yesAccount")}>立即登入</button>
              </div>
              <div className={this.state.class2}>
                {/* <h1>No Account</h1> */}
                <button onClick={() => this.signChange("noAccount")}>立即註冊</button>
              </div>
            </div>
          </div>

          <div className="inputForm" style={this.state.inputFormLeft}>
            <form action="#" className={this.state.registerForm}>

              <h1>Register 註冊</h1>
              <div>
                <div className="inputWrap">
                  <label htmlFor="username">姓名</label>
                  <input type="text" name="username" id="username" placeholder="姓名" />
                </div>

                <div className="inputWrap">
                  <label htmlFor="account">帳號</label>
                  <input type="text" name="account" id="account" placeholder="帳號" />
                </div>

                <div className="inputWrap">
                  <label htmlFor="password">密碼</label>
                  <input type="password" name="password" id="password" placeholder="密碼" />
                </div>

                <div className="inputWrap">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" name="email" id="email" placeholder="E-mail" />
                </div>
              </div>

              <button>送出</button>
            </form>

            <form action="#" className={this.state.loginForm}>

              <h1>Login 登入</h1>

              {/* <div className="social-container">
                <a href="#" className="social">
                  <i className="fa fa-facebook"></i>
                </a>

                <a href="#" className="social">
                  <i className="fa fa-google"></i>
                </a>

                <a href="#" className="social">
                  <i className="fa fa-twitter"></i>
                </a>
              </div> */}
              <div>
                <div className="inputWrap">
                  <label htmlFor="account">帳號</label>
                  <input type="text" name="account" id="account" placeholder="帳號" />
                </div>

                <div className="inputWrap">
                  <label htmlFor="password">密碼</label>
                  <input type="password" name="password" id="password" placeholder="密碼" />
                </div>
              </div>

              <button>送出</button>
            </form>
          </div>
        </div>


        {/*<div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">

              <h1>歡迎回來!</h1>

              <p>已經是會員了嗎?</p>

              <button className="ghost" id="signIn">登入</button>
            </div>

            <div className="overlay-panel overlay-right">
              <h1>歡迎加入</h1>

              <p>加入會員，享會員優惠</p>

              <button className="ghost" id="signUp">註冊</button>
            </div>
          </div>
        </div>*/}
      </main>
    );
  }
}

export default Login;