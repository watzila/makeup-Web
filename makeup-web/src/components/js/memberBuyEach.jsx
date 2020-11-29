import { Link } from 'react-router-dom';
import React, { Component } from "react";
import product1 from "../images/product/A_01.jpg";

class MemberBuyEach extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.data);
  }
  render() {
    return (
      <div>
        <div className="memberBuy">
          <div>
            <img src={product1} width="28%" alt="產品" />
            <div>
              {this.props.data == null ? "" : this.props.data.productName}
              <br />
              <small>
                規格:
                {this.props.data == null ? "" : this.props.data.productColor}
              </small>
            </div>
          </div>
          <div>{this.props.data == null ? "" : this.props.data.quantity}</div>
          <div>
            ${this.props.data == null ? "" : this.props.data.unitPrice}
          </div>
          <div>已出貨</div>
        </div>
        {/* 總金額&訂單詳情按鈕 ===========總金額 */}
        <div className="totalAndBuylist">
          訂單總金額:${this.props.data == null ? "" :  this.props.data.unitPrice*this.props.data.quantity}
          <button> <Link to="/orderList">查看訂單詳情</Link></button>
        </div>
        <hr />
      </div>
    );
  }
}

export default MemberBuyEach;
