import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';
import './css/headerCart.css';
//import logo from "./images/logo_huan-huan_緩緩_logo_bl.png"
import HeaderCart from './js/headerCart';
import CreateCard from './js/createCard'; //創建商品卡
import Ajax from './js/ajax';
import IMGPath from './js/imgPath'; //引入圖片

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      headerCartBoxStyle: null,
    };

    this.prevScrollpos = window.pageYOffset;

    this.member = JSON.parse(sessionStorage.getItem('member'));

    this.imgPath = new IMGPath();
    this.ajax = new Ajax();
    this.createCard = new CreateCard();

    this.cId =
      sessionStorage.getItem('member') != null
        ? JSON.parse(sessionStorage.getItem('member'))
        : '';

    this.ajax.startListener('get', '/cart?cId=' + this.cId.customer_id, this.u);
  }

  // (複製cartList)

  u = (data) => {
    // if (data == this.state.data) {
    //   console.log(2);
    //   return;
    // }

    let apple = {
      subtotal: null,
      onDelete: this.handleDelete,
    };

    for (var i = 0; i < data.length; i++) {
      Object.assign(data[i], apple);
    }

    this.setState({ data: data });

    // console.log(data);
    // console.log(this.state.data);

    // setTimeout(() => {
    // this.init();
    // }, 100);

    // console.log(this.state.data.length);
  };

  // 金額 小記subtotal “初始化”(複製cartList)
  init = () => {
    if (this.state.data != null) {
      // for (var i = 0; i < this.state.data.length; i++) {
      //   this.state.data[i].subtotal =
      //     this.state.data[i].quantity * this.state.data[i].unitPrice;
      // }
      // this.setState({});
    }
  };

  // 功能：商品金額小記subtotal隨著數量改變(複製cartList)
  // handleSubtotal = (obj) => {
  //   this.state.data[this.state.data.indexOf(obj)].subtotal =
  //     this.state.data[this.state.data.indexOf(obj)].quantity *
  //     this.state.data[this.state.data.indexOf(obj)].unitPrice;

  //   this.setState({});
  // };

  // 功能：商品刪除 (複製cartList)
  handleDelete = (idProduct) => {
    //  console.log("handleDelete clicked");
    console.log(idProduct);

    const newArray = this.state.data.filter(
      (item) => item.product_id !== idProduct
    );
    this.state.data = newArray;
    // console.log(newArray);

    // this.state.counters = newArray;
    // this.setState({});
    // console.log(JSON.parse(sessionStorage.getItem('member')).customer_id);

    this.setState({});

    this.ajax.startListener('post', '/delete', this.u, {
      c_id: JSON.parse(sessionStorage.getItem('member')).customer_id,
      p_id: idProduct,
    });
  };

  componentDidMount() {
    this.headerMove();
  }

  componentDidUpdate() {
    if (this.state.data != null) {
      if (this.state.data.length > 0) {
        var bee = document.getElementById('headerCartBoxTop');

        bee.className = 'headerCartBox';
      }
    }
    // this.ajax.startListener('get', '/cart?cId=' + this.cId.customer_id, this.u);
    // console.log(1);
    // console.log(this.state.data.length);
    // 購物車空車的話 隱藏購物車欄位
  }

  // header特效
  headerMove = () => {
    window.onscroll = () => {
      var currentScrollPos = window.pageYOffset;
      if (this.prevScrollpos > currentScrollPos) {
        document.querySelector('.header').style.top = '0';
      } else {
        document.querySelector('.header').style.top = '-230px';
      }
      this.prevScrollpos = currentScrollPos;
    };
  };

  cartQty = () => {
    if (this.state.data != null) {
      return this.state.data.length;
    }
  };

  render() {
    return (
      <header className="header">
        {/*<div className="rightIcon">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>*/}
        <nav className="navbar">
          <div className="navBoxL">
            <Link to="/about">關於我們</Link>
            <Link to="/b">限時特價</Link>
            <Link to="/p/1">商品</Link>
            <Link to="/skintest">活動</Link>
          </div>

          <div className="navBoxR">
            <Link
              to={this.member != null ? '/member' : '/login'}
              onClick={this.aa}
              className="fa fa-user-circle"
            >
              {this.member != null ? this.member.nickname : ''}
            </Link>
            <div className="cartWrap">
              <Link to="/cart" className="fa fa-shopping-cart">
                <span className="cartQty">{this.cartQty()}</span>
              </Link>
              <table id="headerCartBoxTop">
                <tbody>
                  {this.state.data != null
                    ? this.createCard.create(
                        this.state.data.length,
                        HeaderCart,
                        this.state.data
                      )
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
