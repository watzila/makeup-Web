import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/cart.css';
//載入購物車單筆子元件
import Cart from './js/cart';
//line登入的圖片
import line from './images/line.png';

import CreateCard from './js/createCard'; //創建商品卡
import Ajax from './js/ajax';
import IMGPath from './js/imgPath'; //引入圖片

class CartList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,

      deliverFee: null,
      grandTotal: null,

      //以下內容載入頁面時 設定預設狀態隱藏
      myModal: {
        display: 'none',
      },

      myOrderBox: {
        display: 'none',
      },

      myAddressDetail: {
        display: 'none',
      },

      myShippingDataDetail: {
        display: 'none',
      },
    };
    // 執行各個商品剛放進購物車時，金額小記subtotal初始化
    this.imgPath = new IMGPath();
    this.ajax = new Ajax();
    this.createCard = new CreateCard();

    if (sessionStorage.getItem('member')) {
      this.cId = JSON.parse(sessionStorage.getItem('member'));

      this.ajax.startListener(
        'get',
        '/cart?cId=' + this.cId.customer_id,
        this.u
      );
    }
  }

  u = (data) => {
    let apple = {
      subtotal: null,
      onIncrement: this.handleIncrement,
      onDecrement: this.handleDecrement,
      onDelete: this.handleDelete,
    };

    for (var i = 0; i < data.length; i++) {
      Object.assign(data[i], apple);
    }

    this.setState({ data: data });

    setTimeout(() => {
      this.init();
    }, 100);

    // console.log(data);
    // console.log(this.state.data.length);
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

  // 功能：商品金額小記subtotal隨著數量改變
  handleSubtotal = (obj) => {
    this.state.data[this.state.data.indexOf(obj)].subtotal =
      this.state.data[this.state.data.indexOf(obj)].quantity *
      this.state.data[this.state.data.indexOf(obj)].unitPrice;

    this.setState({});
  };

  // 功能：商品數量增加
  handleIncrement = (obj, handleChange) => {
    // console.log(this.state.cartList.indexOf(obj));
    // this.state.cartList[this.state.cartList.indexOf(obj)].count += 1;
    this.state.data[this.state.data.indexOf(obj)].quantity += 1;

    //更新subtotal
    this.handleSubtotal(obj);

    // console.log(obj.quantity);
    this.ajax.startListener('post', '/updateQty', this.u, {
      c_id: JSON.parse(sessionStorage.getItem('member')).customer_id,
      p_id: obj.product_id,
      qty: obj.quantity,
    });

    this.setState({});
    // console.log(this.state.data);
    // console.log(this.state.cartList[this.state.cartList.indexOf(obj)].count);
    // console.log(this.state.cartList[this.state.cartList.indexOf(obj)].unitPrice);
    // console.log(this.state.cartList[this.state.cartList.indexOf(obj)].subtotal);
  };

  // 功能：商品數量減少
  handleDecrement = (obj, handleChange) => {
    // console.log(obj);
    // console.log(this.state.cartList.indexOf(obj));

    // 判斷當數量>0 可以執行減少數量
    if (this.state.data[this.state.data.indexOf(obj)].quantity > 0) {
      this.state.data[this.state.data.indexOf(obj)].quantity -= 1;

      //更新subtotal
      this.handleSubtotal(obj);
      // console.log(obj);

      this.ajax.startListener('post', '/updateQty', this.u, {
        c_id: JSON.parse(sessionStorage.getItem('member')).customer_id,
        p_id: obj.product_id,
        qty: obj.quantity,
      });

      this.setState({});
    }

    // 判斷當數量＝0 將此商品刪除
    if (this.state.data[this.state.data.indexOf(obj)].quantity === 0) {
      // 設一個新的陣列，過濾儲存刪除此商品後新的購物車列表
      const newArray = this.state.data.filter(
        (item) => item.cart_id !== obj.cart_id
      );
      this.state.data = newArray;
      console.log(newArray);

      this.ajax.startListener('post', '/delete', this.u, {
        c_id: JSON.parse(sessionStorage.getItem('member')).customer_id,
        p_id: obj.product_id,
      });

      this.setState({});
    }
  };

  // 功能：商品刪除
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

  // 金額計算 （不含運費）
  handleTotalMoney = () => {
    var totalMoney = 0;
    if (this.state.data != null) {
      // console.log(this.state.data);

      this.state.data.forEach((element) => {
        totalMoney += element.subtotal;
      });
      // console.log(totalMoney);
    }
    return totalMoney;
  };

  // 運費計算;
  handleDeliverFee = () => {
    if (this.handleTotalMoney() >= 2000) {
      this.state.deliverFee = 0;
    } else {
      this.state.deliverFee = 140;
    }
    return this.state.deliverFee;
  };

  // 總金額計算（含運費）
  handleGrandTotalMoney = () => {
    this.state.grandTotal = this.handleTotalMoney() + this.handleDeliverFee();

    return this.state.grandTotal;
  };

  // 是否符合免運資格
  handleDiscountQualify = () => {
    var discountQualify = null;

    if (this.handleTotalMoney() >= 2000) {
      discountQualify = '符合';
    } else {
      discountQualify = '尚未符合';
    }
    return discountQualify;
  };

  // 當購物車商品數>0 顯示直接購買或登入會員Modal視窗
  directBuyModalDisplayBlock = () => {
    if (this.state.data != null) {
      this.setState({ myModal: { display: 'block' } });
    }
    //   this.modal.style.display = "block";
    //   console.log("ok");
  };

  // 點擊直接購買或登入會員Modal視窗外圍，將Modal視窗隱藏
  directBuyModalDisplayNone = () => {
    window.addEventListener('click', (event) => {
      if (event.target === document.getElementById('myModal')) {
        this.setState({ myModal: { display: 'none' } });
      }
    });
  };
  // 監聽window事件需要在render完後的componentDidMount執行
  componentDidMount() {
    this.directBuyModalDisplayNone();
  }

  // 點擊Modal視窗中的直接購買按鈕後，OrderBox顯示，Modal隱藏
  OrderBoxDisplayBlock = () => {
    this.setState({
      myOrderBox: { display: 'block' },
      myModal: { display: 'none' },
    });
  };

  // 選擇宅配後，顯示對應的住址輸入框，預設select value ==1
  homeDeliveryInput = (event) => {
    // console.log(event.target.value);
    if (event.target.value === '一般宅配') {
      this.setState({ myAddressDetail: { display: 'block' } });
    } else {
      this.setState({ myAddressDetail: { display: 'none' } });
    }
    // console.log(event.target.value);
    return event.target.value;
  };

  // 收件人與購買人不同時，展開收件人資料輸入框
  shippingDataInput = (event) => {
    // console.log(event.target.checked);
    if (event.target.checked === true) {
      this.setState({ myShippingDataDetail: { display: 'block' } });
    } else {
      this.setState({ myShippingDataDetail: { display: 'none' } });
    }
  };

  //訂單編號
  // orderId = () => {
  //   sessionStorage.setItem('order', 6);
  // };

  render() {
    // console.log(this.state.data);
    return (
      <section id="cart">
        <div className="container w">
          <div id="orderForm " action="#">
            {/* cartBox_start  */}
            <div className="cartBox">
              <h1>我的購物車</h1>
              <hr />
              <div className="cartTableBox">
                <table className="cartTable">
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
                          Cart,
                          this.state.data
                        )
                      : null}
                    <tr className="coupon">
                      <td colSpan="3">優惠代碼</td>
                      <td colSpan="2">
                        <input type="text" placeholder="請輸入優惠代碼" />
                      </td>
                    </tr>
                    <tr className="discountText">
                      <td colSpan="3">
                        <p>全館活動</p>
                        <a href="#" alt="">
                          全館 滿 $ <span>2,000</span> 元 免運費
                        </a>
                      </td>
                      <td colSpan="2">{this.handleDiscountQualify()}</td>
                    </tr>
                    <tr className="subtotal">
                      <td colSpan="3">小計</td>
                      <td colSpan="2">{this.handleTotalMoney()}</td>
                    </tr>
                    <tr className="shipment">
                      <td colSpan="3">運費</td>
                      <td className="deliverFeeText" colSpan="2">
                        {this.handleDeliverFee()}
                      </td>
                    </tr>
                    <tr className="totalMoney">
                      <td colSpan="3">
                        <p>總金額</p>
                      </td>
                      <td colSpan="2">{this.handleGrandTotalMoney()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* cartBox_end  */}

            {/* loginBox_start  */}
            <div className="loginBox">
              <h2>
                加入會員立即獲得<span> 50 </span>點，<span>馬上折抵</span>！
              </h2>
              <div className="loginBoxDiv">
                <div className="btnLogin btnLine">
                  <img src={line} alt="12" /> LINE會員登入
                </div>
                <div className="btnLogin  btnFb">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                  FB會員登入
                </div>
                <div className="btnLogin btnGoogle">
                  <i className="fa fa-google" aria-hidden="true"></i>
                  GOOGLE會員登入
                </div>
                {/* Trigger/Open The Modal  */}
                <div
                  onClick={this.directBuyModalDisplayBlock}
                  id="myBtn"
                  className="btnLogin btnDirect"
                >
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  直接前往結帳
                </div>
              </div>

              {/* The Modal  */}
              <div id="myModal" style={this.state.myModal} className="modal">
                {/* Modal content  */}
                <div className="modal-content">
                  <div className="modal-body">
                    <p>
                      <i className="fa fa-gift" aria-hidden="true"></i>
                      登入會員，享有更多優惠！
                    </p>
                    <div>
                      <Link to="/login">立即登入</Link>
                      <a
                        onClick={this.OrderBoxDisplayBlock}
                        className="btnDirectNext"
                        href="#orderBox"
                      >
                        直接結帳
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* loginBox_end  */}

            {/* orderInput_start  */}
            <form method="post" action="http://localhost:3001/cart/submit">
              <div id="orderBox" style={this.state.myOrderBox}>
                <div className="orderTableBox">
                  {/* 運送方式與付款方式 */}
                  <div className="shipAndPaymentCol">
                    <h1>購買資訊</h1>
                    {/* 隱藏欄位傳值 */}
                    <input
                      name="customer_id"
                      type="text"
                      style={{ display: 'none' }}
                      defaultValue={
                        sessionStorage.getItem('member')
                          ? JSON.parse(sessionStorage.getItem('member'))
                              .customer_id
                          : ''
                      }
                    />
                    <input
                      name="grandTotal"
                      type="text"
                      style={{ display: 'none' }}
                      id="grandTotalInput"
                      value={this.state.grandTotal}
                      onChange={(event) => {
                        return event.target.value;
                      }}
                    />
                    <hr />
                    <select
                      name="shippingStyle_id"
                      onChange={this.homeDeliveryInput}
                      defaultValue={'0'}
                      className="shippingSelect"
                    >
                      <option value="0">‐ 請選擇 運送方式 ‐</option>
                      <option value="一般宅配">一般宅配</option>
                      <option value="超商取貨">超商取貨</option>
                      <option value="國際快遞">國際快遞</option>
                    </select>
                    {/* 引入地址下拉式選單外掛  */}
                    <div
                      className="addressDetail"
                      style={this.state.myAddressDetail}
                    >
                      <input
                        name="shipping_city"
                        className="inputAddress"
                        type="text"
                        placeholder="縣市"
                        onChange={(e) => {
                          console.log(e.target.value);
                          return e.target.value;
                        }}
                      />
                      <input
                        name="shipping_district"
                        className="inputAddress "
                        type="text"
                        placeholder="鄉鎮區"
                        onChange={(e) => {
                          // console.log(e.target.value);
                          return e.target.value;
                        }}
                      />
                      <input
                        name="shipping_address"
                        className="inputAddress "
                        type="text"
                        placeholder="收件地址"
                        onChange={(e) => {
                          // console.log(e.target.value);
                          return e.target.value;
                        }}
                      />
                      <p>酌收運費 : $ 140 元</p>
                      <p>全館 滿 $ 2,000 元 免運費</p>
                    </div>
                    <select
                      name="payment_method"
                      defaultValue={'0'}
                      className="paymentSelect"
                      onChange={(e) => {
                        return e.target.value;
                      }}
                    >
                      <option value="0">‐ 請選擇 付款方式 ‐</option>
                      <option value="貨到付款">貨到付款</option>
                      <option value="信用卡">信用卡</option>
                      <option value="轉帳匯款">轉帳匯款</option>
                    </select>
                  </div>

                  {/* 購買人與收件人資料 */}
                  <div className="billInfo">
                    <h1>購買人資料</h1>
                    <hr />
                    <input
                      name="customerName"
                      className="inputName"
                      type="text"
                      placeholder="請輸入購買人姓名"
                      onChange={(e) => {
                        return e.target.value;
                      }}
                    />
                    <input
                      name="cellPhone"
                      className="inputPhone"
                      type="text"
                      placeholder="請輸入聯絡電話"
                      onChange={(e) => {
                        return e.target.value;
                      }}
                    />
                    <input
                      name="email"
                      className="inputEmail"
                      type="email"
                      placeholder="請輸入電子郵箱"
                      onChange={(e) => {
                        return e.target.value;
                      }}
                    />

                    {/* <div className="checkSubscribe">
                      <input
                        type="checkbox"
                        name="subscribe"
                        id="subscribe"

                      />
                      <label htmlFor="subscribe">
                        我想收到最新資訊及優惠方案
                      </label>
                      <br />
                    </div> */}

                    <div className="checkShipping">
                      <input
                        onChange={this.shippingDataInput}
                        type="checkbox"
                        name="shippingData"
                        id="shippingData"
                      />
                      <label htmlFor="shippingData">新增收件人資料</label>
                      <br />
                      <div
                        id="shippingDataDetail"
                        style={this.state.myShippingDataDetail}
                      >
                        <input
                          name="shipping_Name"
                          className="shippingName"
                          type="text"
                          placeholder="請輸入收件人姓名"
                          onChange={(e) => {
                            return e.target.value;
                          }}
                        />
                        <input
                          name="shipping_cellPhone"
                          className="shippingPhone"
                          type="text"
                          placeholder="請輸入收件人聯絡電話"
                          onChange={(e) => {
                            return e.target.value;
                          }}
                        />
                      </div>
                    </div>

                    <textarea
                      name="orderComment"
                      id=""
                      cols="30"
                      rows="3"
                      placeholder="請輸入備註事項(選填)"
                      onChange={(e) => {
                        // console.log(e.target.value);
                        return e.target.value;
                      }}
                    ></textarea>

                    <div className="checkClause">
                      <input
                        type="checkbox"
                        name="clause"
                        id="clause"
                        required
                      />
                      <label htmlFor="clause">
                        我已閱讀 <a href="#">「售後服務」</a> 並同意。
                      </label>
                      <br />
                    </div>

                    <div className="afterTotalPay">
                      <p>
                        實付金額(TWD)
                        <span>{this.handleGrandTotalMoney()}</span>
                        <a href="#">
                          <i
                            className="fa fa-file-text-o"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </p>
                    </div>
                    <div className="divCheckout">
                      <button type="submit" className="btnCheckout">
                        送出＆結帳
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {/* orderInput_end */}
          </div>
        </div>
      </section>
    );
  }
}

export default CartList;
