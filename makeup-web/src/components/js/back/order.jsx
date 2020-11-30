import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/order.css';

class Order extends Component {
  render() {
    return (
      <section id="order">
        <div className="container">
          {/*  cartSummary_start  */}
          <div className="cartSummary collapse-list">
            <input
              className="collapse-open"
              type="checkbox"
              id="collapseCheckbox"
            />
            <label className="collapse-btn" htmlFor="collapseCheckbox">
              <h1>完成訂購</h1>訂單編號：<span>952712345</span>
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
                  <tr className="productItem">
                    <td className="productName">
                      <div>
                        <img
                          src="https://hinetcdn.waca.ec/uploads/shops/800/products/78/thumb_cache/75_784a212efaa02430b77c15abda4cabce.jpg"
                          width="80"
                          height="80"
                          alt=""
                        />
                      </div>
                      <div>
                        <a href="https://dorene.com.tw/product/detail/303450">
                          秋季禮遇
                          ▌新手肌本保養3件組新手肌本保養3件組新手肌本保養3件組
                        </a>
                        <p>單一規格</p>
                        <i className="fa fa-tags" aria-hidden="true"></i>
                        <small>預計11/24開始出貨</small>
                      </div>
                    </td>

                    <td className="productQuantity">
                      <input type="text" value="1" />
                    </td>
                    <td>$1,250</td>
                    <td>$1,250</td>
                    <td></td>
                  </tr>
                  <tr className="discountText">
                    <td colspan="3">
                      <p>全館活動</p>
                      <a href="#" alt="">
                        全館 滿 $ <span>2,500</span> 元 免運費
                      </a>
                    </td>
                    <td colspan="2">尚未符合</td>
                  </tr>
                  <tr className="subtotal">
                    <td colspan="3">小計</td>
                    <td colspan="2">$1,950</td>
                  </tr>
                  <tr className="shipment">
                    <td colspan="3">運費</td>
                    <td colspan="2">前往下一步驟計算</td>
                  </tr>
                  <tr className="totalMoney">
                    <td colspan="3">
                      <p>總金額</p>
                      <p>(TWD)</p>
                    </td>
                    <td colspan="2">$1,950</td>
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
                      2020-11-30 06:10:10
                    </div>
                  </div>
                  <div>
                    <div className="panelOrderTitle">訂單編號</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      952712345
                    </div>
                  </div>
                </div>
                <div className="colRight">
                  <div>
                    <div className="panelOrderTitle">處理狀態</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      處理中
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
                      宅配
                    </div>
                  </div>
                  <div>
                    <div className="panelOrderTitle">運送地址</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      台北市內湖區瑞光街100號
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
                      信用卡
                    </div>
                  </div>
                </div>
                <div className="colRight">
                  <div>
                    <div className="panelOrderTitle">購買人姓名</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      金城武
                    </div>
                  </div>
                  <div>
                    <div className="panelOrderTitle">購買人信箱</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      makeupgoodday@gmail.com
                    </div>
                  </div>
                  <div>
                    <div className="panelOrderTitle">購買人電話</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      0972996969
                    </div>
                  </div>
                  <div>
                    <div className="panelOrderTitle">收件人姓名</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      木村拓哉
                    </div>
                  </div>
                  <div>
                    <div className="panelOrderTitle">收件人電話</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      0972109956
                    </div>
                  </div>
                  <div>
                    <div className="panelOrderTitle">備註事項</div>
                    <div className="panelOrderText">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis eaque doloremque unde nam. Mollitia, ullam
                      quibusdam id suscipit excepturi sequi vel, eaque
                      temporibus veniam a similique tempora facilis, repudiandae
                      totam.
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
