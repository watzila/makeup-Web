import { Link } from 'react-router-dom';
import React, { Component } from "react";
import IMGPath from './imgPath'; 

class MemberBuyEach extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.data);
    this.imgPath = new IMGPath();
    this.p = require.context('../images/product', false, /\.(png|jpe?g|svg)$/);
  }
  render() {
    return (
      <div>
        <div className="memberBuy">
          <div>
            <img 
						src={ this.imgPath.importAll(this.p)[`${this.props.data.img_0}`]}
            width="28%" alt="產品" />
            <div>
            <div className="memberBuyOrderId" >訂單編號:{this.props.data == null ? "" : this.props.data.order_id} </div>
              <br />
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
          <div>{this.props.data == null ? "" : this.props.data.orderStatus}</div>
        </div>
        {/* 總金額&訂單詳情按鈕 ===========總金額 */}
        <div className="totalAndBuylist">
          訂單總金額:${this.props.data == null ? "" :  this.props.data.unitPrice*this.props.data.quantity}
          <button
					  onClick={(oId) => this.props.data.onCheck(this.props.data.order_id)}
          > 查看訂單詳情</button>
        </div>
        <hr />
      </div>
    );
  }
}

export default MemberBuyEach;
