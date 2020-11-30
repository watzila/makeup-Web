import React, { Component } from 'react';
import IMGPath from './imgPath'; //引入圖片

class OrderList extends Component {
  constructor(props) {
    super(props);

    this.imgPath = new IMGPath();
    this.p = require.context('../images/product', false, /\.(png|jpe?g|svg)$/);
    console.log(this.p);
  }

  render() {
    return (
      <tr className="productItem">
        <td className="productName">
          <div>
            <img
              src={this.imgPath.importAll(this.p)[`${this.props.data.img_0}`]}
              width="80"
              height="80"
              alt=""
            />
          </div>
          <div>
            <a href="#">{this.props.data.productName}</a>
            <p>{this.props.data.productColor}</p>
            <i className="fa fa-tags" aria-hidden="true"></i>
            <small>預計11/24開始出貨</small>
          </div>
        </td>

        <td className="productQuantity">{this.props.data.quantity}</td>
        <td>{this.props.data.unitPrice}</td>
        <td>{this.props.data.subtotal}</td>
        <td></td>
      </tr>
    );
  }
}

export default OrderList;
