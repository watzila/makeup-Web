import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OrderList from './js/orderList';
import CreateCard from './js/createCard'; //創建商品卡
import Ajax from './js/ajax';
import './css/order.css';

class Order extends Component {
  constructor() {
    super();

    this.state = {
      customerId: {
        id: JSON.parse(sessionStorage.getItem('member')).customer_id,
      },
      data: null,
    };

    this.ajax = new Ajax();
    this.createCard = new CreateCard();

    this.ajax.startListener('post', '/searchOrder', this.u, this.state.orderId);

    setTimeout(() => {
      this.init();
    }, 100);
  }

  u = (data) => {
    this.setState({ data: data });
    console.log(this.state.data);
  };

  // 金額 小記subtotal “初始化”
  init = () => {
    if (this.state.data != null) {
      for (var i = 0; i < this.state.data.length; i++) {
        this.state.data[i].subtotal =
          this.state.data[i].quantity * this.state.data[i].unitPrice;
      }
      this.setState({});
    }
  };

  //地址
  address = () => {
    let d = this.state.data[0];
    let newAddress = d.shipping_city + d.shipping_district + d.address;
    return newAddress;
  };

  render() {
    return (
      <section id="order" className="w">
        <div className="container">
          {/*  cartSummary_start  */}
          <div className="cartSummary collapse-list">
            <input
              className="collapse-open"
              type="checkbox"
              id="collapseCheckbox"
            />
            <label className="collapse-btn" htmlFor="collapseCheckbox">
              <h1>完成訂購</h1>訂單編號：
              <span>
                {' '}
                {this.state.data != null ? this.state.data[0].order_id : ''}
              </span>
              <h4>購物車明細(點擊)</h4>
            </label>

            <div className="cartTableBox collapse-painel">
              <table className="cartTable collapse-inner">
                <thead>
                  <tr>
                    <th>品名</th>
                    <th>數量</th>
                    <th>單價</th>
                    <th>小計</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data != null
                    ? this.createCard.create(
                        this.state.data.length,
                        OrderList,
                        this.state.data
                      )
                    : null}
                  <tr className="discountText">
                    <td colSpan="3">
                      <p>全館活動</p>
                      <a href="#" alt="">
                        全館 滿 $ <span>2,500</span> 元 免運費
                      </a>
                    </td>
                    <td colSpan="2">尚未符合</td>
                  </tr>
                  <tr className="subtotal">
                    <td colSpan="3">小計</td>
                    <td colSpan="2">$1,950</td>
                  </tr>
                  <tr className="shipment">
                    <td colSpan="3">運費</td>
                    <td colSpan="2">前往下一步驟計算</td>
                  </tr>
                  <tr className="totalMoney">
                    <td colSpan="3">
                      <p>總金額</p>
                      <p>(TWD)</p>
                    </td>
                    <td colSpan="2">$1,950</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/*  cartSummary_end  */}

          {/*  panelOrderInfo_start  */}
          <div id="panelOrder">
            <div className="panelOrderBox">
              <h1>訂單狀態</h1>
              <hr />
              <div className="panelOrderStatus">
                <div className="colLeft">
                  <div>
                    <div className="panelOrderTitle">購買日期</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      {this.state.data != null
                        ? this.state.data[0].orderDate
                        : ''}
                    </div>
                  </div>
                  <div>
                    <div className="panelOrderTitle">訂單編號</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      {this.state.data != null
                        ? this.state.data[0].order_id
                        : ''}
                    </div>
                  </div>
                </div>
                <div className="colRight">
                  <div>
                    <div className="panelOrderTitle">處理狀態</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      {this.state.data != null
                        ? this.state.data[0].orderStatus
                        : ''}
                    </div>
                  </div>
                  <div>
                    <div className="panelOrderTitle">配送狀態</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      【宅配】尚未寄件
                    </div>
                  </div>
                </div>
              </div>
              <h1>訂單資訊</h1>
              <hr />
              <div className="panelOrderInfo">
                <div className="colLeft">
                  <div>
                    <div className="panelOrderTitle">運送方式</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      {this.state.data != null
                        ? this.state.data[0].shippingStyle_id
                        : ''}
                    </div>
                  </div>
                  <div>
                    <div className="panelOrderTitle">運送地址</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      {this.state.data != null ? this.address() : ''}
                    </div>
                  </div>
                  <div>
                    <div className="panelOrderTitle">出貨日期</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      2020-12-03
                    </div>
                  </div>
                  <div>
                    <div className="panelOrderTitle">付款方式</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      {this.state.data != null
                        ? this.state.data[0].payment_method
                        : ''}
                    </div>
                  </div>
                </div>
                <div className="colRight">
                  <div>
                    <div className="panelOrderTitle">購買人姓名</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      {this.state.data != null
                        ? this.state.data[0].customerName
                        : ''}
                    </div>
                  </div>
                  <div>
                    <div className="panelOrderTitle">購買人信箱</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      {this.state.data != null ? this.state.data[0].email : ''}
                    </div>
                  </div>
                  <div>
                    <div className="panelOrderTitle">購買人電話</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      {this.state.data != null
                        ? this.state.data[0].cellPhone
                        : ''}
                    </div>
                  </div>
                  <div>
                    <div className="panelOrderTitle">收件人姓名</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      {this.state.data != null
                        ? this.state.data[0].shipping_Name
                        : ''}
                    </div>
                  </div>
                  <div>
                    <div className="panelOrderTitle">收件人電話</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      {this.state.data != null
                        ? this.state.data[0].shipping_cellPhone
                        : ''}
                    </div>
                  </div>
                  <div>
                    <div className="panelOrderTitle">備註事項</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      {this.state.data != null
                        ? this.state.data[0].orderComment
                        : ''}
                    </div>
                  </div>
                </div>
              </div>
              <div className="divBackHome">
                <Link to="/" className="btnBackHome">
                  回首頁
                </Link>
              </div>
            </div>
          </div>
          {/*  orderDetail_end  */}
        </div>
      </section>
    );
  }
}

export default Order;
