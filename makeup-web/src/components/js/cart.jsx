import React, { Component } from 'react';
import IMGPath from './imgPath'; //引入圖片

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: this.props.count,
      count: this.props.data.quantity,
      subtotal: this.props.data.subtotal,
    };

    this.imgPath = new IMGPath();
    this.p = require.context('../images/product', false, /\.(png|jpe?g|svg)$/);
    console.log(this.p);
  }

  // 當點擊增加或減少數量的按鈕時，回父層去改變數量，並且執行handleChange，讓子層的數量也更新(this.state.count)，讓其顯示在畫面上
  // handleChange = (obj) => {
  //   this.setState({ count: obj.quantity });
  //   // console.log(obj.quantity);
  // };

  render() {
    // console.log(this.props.count);
    // console.log(this.props.data.product_id);
    // console.log(this.props.subtotal);

    return (
      <tr className="productItem">
        <td className="productName">
          <div>
            <img
              src={this.imgPath.importAll(this.p)[`${this.props.data.img_0}`]}
              width="100"
              height="100"
              alt="cart_product"
            />
          </div>
          <div>
            <a href="#">{this.props.data.productName}</a>
            <p>{this.props.data.productColor}</p>
            <i className="fa fa-tags" aria-hidden="true"></i>
            <small>預計11/24開始出貨</small>
          </div>
        </td>

        <td className="productQuantity">
          <div
            onClick={() => {
              this.props.data.onDecrement(this.props.data);
              // this.handleChange(this.props.data);
            }}
            className="btnDecrease"
          >
            -
          </div>

          <input type="text" value={this.props.data.quantity} readOnly />

          <div
            onClick={() => {
              this.props.data.onIncrement(this.props.data);
              // this.handleChange(this.props.data);
            }}
            className="btnIncrease"
          >
            +
          </div>
        </td>
        <td>{this.props.data.unitPrice}</td>
        <td>{this.props.data.subtotal}</td>
        <td className="tdDelete">
          <div
            onClick={() => this.props.data.onDelete(this.props.data.cart_id)}
            className="btnDelete"
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </div>
        </td>
      </tr>
    );
  }
  //      handleIncrement = (product) => {
  //     this.setState({count: this.state.count + 1})
  //     console.log(this.state.count);
  // }
}

export default Cart;
