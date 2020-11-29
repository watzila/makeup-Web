<<<<<<< HEAD:makeup-web/src/components/js/back/memberOrderDetail.jsx
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import IMGPath from "./js/imgPath"; //引入圖片
// import { Link } from "react-router-dom";

class MemberOrderDetail extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      data: null,
    };
    // this.imgPath = new IMGPath();
  }

  render() {
    return (
      // {/* index_memberOrderDetail內容 */}
      <div className="col">
        <form className="p-3">
          <input type="hidden" name="#" defaultValue="memberDetail" />
          <h2 className="pt-3 pb-3 text-center">
            <i className="fa fa-user-circle" />
            訂單管理 / 會員訂單詳細內容
          </h2>
          <hr />
          <div className="input-group mb-3 d-flex justify-content-center">
            <div className="mb-3 mx-3">
              <Link to="/backend/order" className="gray-Link my-button">
                回上一頁
              </Link>
            </div>

            <div className="mb-3 mx-3">
              <a name="lastPege" type="submit" className="gray-Link my-button">
                停止訂單
              </a>
            </div>

            <div className="mb-3 mx-3">
              <a name="lastPege" type="submit" className="gray-Link my-button">
                匯出PDF
              </a>
            </div>
          </div>
=======
import React, { Component } from "react";
import { Link } from "react-router-dom";

import BackOrderDetailTable from "./backOrderDetailTable";

import CreateCard from "../createCard"; //
import Ajax from "../ajax"; //
class BackOrderDetail extends Component {
	constructor(prop) {
		super(prop);
		this.state = {
			data: null,
		};

		this.createCard = new CreateCard();
		this.ajax = new Ajax();

		this.ajax.startListener("post", "/backend/orderlist", this.u, {
			pId: this.props.location.state.pId,
		});
		//console.log(this.props);
	}

	u = data => {
		this.setState({ data: data });

		console.log(data);
	};

	//總價
	totalPrice = (deliverFee = 0) => {
		let total = 0;
		for (let i = 0; i < this.state.data.length; i++) {
			let price = this.state.data[i].unitPrice * this.state.data[i].quantity;
			total += price;
		}
		return total + deliverFee;
	};

	//地址
	address = () => {
		let d = this.state.data[0];
		let newAddress = d.shipping_postCode + " " + d.shipping_city + d.shipping_district + d.address;
		return newAddress;
	};

	render() {
		return (
			// {/* index_BackOrderDetail內容 */}
			<div className="col my-content">
				<form className="p-3">
					<input type="hidden" name="#" defaultValue="memberDetail" />
					<h2 className="pt-3 pb-3 text-center">
						<i className="fa fa-user-circle" />
						訂單管理 / 會員訂單詳細內容
					</h2>
					<hr />
					<div className="input-group mb-3 d-flex justify-content-center">
						<div className="mb-3 mx-3">
							<Link to="/backend/order" className="gray-Link my-button">
								回上一頁
							</Link>
						</div>

						{/*<div className="mb-3 mx-3">
							<a name="lastPege" type="submit" className="gray-Link my-button">
								停止訂單
							</a>
						</div>*/}

						<div className="mb-3 mx-3">
							<button className="gray-Link my-button">匯出PDF</button>
						</div>
					</div>
>>>>>>> 3cbe59edd050a90eaf008d8d35b19dbd151f2bdd:makeup-web/src/components/js/back/backOrderDetail.jsx

          <div className="form-body p-3 mb-5">
            <div className="form-group row">
              <span className="col-2">訂單id</span>

<<<<<<< HEAD:makeup-web/src/components/js/back/memberOrderDetail.jsx
              <div className="col-10">
                <p>11</p>
=======
							<div className="col-10">
								<p>{this.state.data != null ? this.state.data[0].order_id : ""}</p>
>>>>>>> 3cbe59edd050a90eaf008d8d35b19dbd151f2bdd:makeup-web/src/components/js/back/backOrderDetail.jsx

                {/*<input
									id="order_id"
									name="order_id"
									placeholder="#001"
									type="text"
									aria-describedby="order_idHelpBlock"
									className="form-control"
								/>
								<span id="order_idHelpBlock" className="form-text text-muted">
									訂單id無法修改
								</span>*/}
              </div>
            </div>

            {/* 將名與姓字串串接後顯示 */}
            <div className="form-row">
              <label htmlFor="userName" className="col-2 col-form-label">
                會員基本資料
              </label>

              <div className="col">
                {/*<label htmlFor="userName">*/}
                <span>姓名：</span>
                {/*</label>*/}

<<<<<<< HEAD:makeup-web/src/components/js/back/memberOrderDetail.jsx
                <span>王小明</span>
                {/*<input
=======
								<span>{this.state.data != null ? this.state.data[0].customerName : ""}</span>
								{/*<input
>>>>>>> 3cbe59edd050a90eaf008d8d35b19dbd151f2bdd:makeup-web/src/components/js/back/backOrderDetail.jsx
									id="userName"
									name="userName"
									placeholder="王小明"
									type="text"
									className="form-control"
								/>*/}
              </div>

              <div className="col">
                {/*<label htmlFor="cellPhone">*/}
                <span>手機：</span>
                {/*</label>*/}

<<<<<<< HEAD:makeup-web/src/components/js/back/memberOrderDetail.jsx
                <span>0912-345678</span>
=======
								<span>{this.state.data != null ? this.state.data[0].cellPhone : ""}</span>
>>>>>>> 3cbe59edd050a90eaf008d8d35b19dbd151f2bdd:makeup-web/src/components/js/back/backOrderDetail.jsx

                {/*<input
									id="cellPhone"
									name="cellPhone"
									placeholder="0912-345678"
									type="text"
									className="form-control"
									disabled
								/>*/}
              </div>

              {/*<div className="col">
								<label htmlFor="nickName">
									<span>暱稱</span>
								</label>
								<input
									id="nickName"
									name="nickName"
									placeholder="apple"
									type="text"
									className="form-control"
									disabled
								/>
							</div>*/}

<<<<<<< HEAD:makeup-web/src/components/js/back/memberOrderDetail.jsx
              <div className="col">
                {/*<label htmlFor="birth">*/}
                <span>生日：</span>
                {/*</label>*/}

                <span>2020/11/17</span>

                {/*<div className="input-group">
=======
							{/*<div className="col">*/}
							{/*<label htmlFor="birth">*/}
							{/*<span>生日：</span>*/}
							{/*</label>*/}

							{/*<span>2020/11/17</span>*/}

							{/*<div className="input-group">
>>>>>>> 3cbe59edd050a90eaf008d8d35b19dbd151f2bdd:makeup-web/src/components/js/back/backOrderDetail.jsx
									<div className="input-group-prepend">
										<div className="input-group-text">
											<i className="fa fa-birthday-cake" />
										</div>
									</div>
									<input
										id="birth"
										name="birth"
										placeholder="2020/11/17"
										type="date"
										className="form-control"
										disabled
									/>
								</div>*/}
<<<<<<< HEAD:makeup-web/src/components/js/back/memberOrderDetail.jsx
              </div>
            </div>
=======
							{/*</div>*/}
						</div>
>>>>>>> 3cbe59edd050a90eaf008d8d35b19dbd151f2bdd:makeup-web/src/components/js/back/backOrderDetail.jsx

            <div className="form-row pb-3 pt-3">
              <span className="col-2">性別：</span>

<<<<<<< HEAD:makeup-web/src/components/js/back/memberOrderDetail.jsx
              <span>男</span>
            </div>

            <div className="form-row">
              <span className="col-2">詳細住址</span>
            </div>
          </div>
          {/* 訂單細節 */}
          <div className="my-table p-3 mb-5">
            <h5 className="pb-3">訂單細節</h5>
=======
							<span>{this.state.data != null ? this.state.data[0].gender : ""}</span>
						</div>

						<div className="form-row">
							<span className="col-2">詳細住址</span>
							<span>{this.state.data != null ? this.address() : ""}</span>
						</div>
					</div>
					{/* 訂單細節 */}
					<div className="my-table p-3 mb-5">
						<h5 className="pb-3">訂單細節</h5>
>>>>>>> 3cbe59edd050a90eaf008d8d35b19dbd151f2bdd:makeup-web/src/components/js/back/backOrderDetail.jsx

            <table className="table table-hover p-3 ">
              <thead>
                <tr>
                  <th scope="col">成立日期時間</th>
                  {/*<th scope="col">修改日期時間</th>*/}
                  <th scope="col">完成日期時間</th>
                  <th scope="col">狀態</th>
                  <th scope="col">備註事項</th>
                </tr>
              </thead>

<<<<<<< HEAD:makeup-web/src/components/js/back/memberOrderDetail.jsx
              <tbody>
                <tr>
                  <td>2020年11月16日 12:39:00 PM</td>
                  {/*<td>2020年11月17日 12:39:00 PM</td>*/}
                  <td>2020年X月X日 00:00:00 PM</td>
                  <td>完成</td>
                  <td>安安你好</td>
                </tr>
              </tbody>
            </table>
=======
							<tbody>
								<tr>
									<td>{this.state.data != null ? this.state.data[0].orderDate : ""}</td>
									{/*<td>2020年11月17日 12:39:00 PM</td>*/}
									<td>{this.state.data != null ? this.state.data[0].orderDate : ""}</td>
									<td>{this.state.data != null ? this.state.data[0].orderStatus : ""}</td>
									<td>{this.state.data != null ? this.state.data[0].orderComment : ""}</td>
								</tr>
							</tbody>
						</table>
>>>>>>> 3cbe59edd050a90eaf008d8d35b19dbd151f2bdd:makeup-web/src/components/js/back/backOrderDetail.jsx

            <table className="table table-hover p-3 ">
              <thead>
                <tr>
                  {/*<th scope="col">客製化費用</th>*/}
                  <th scope="col">運費</th>
                  <th scope="col">運送方式</th>
                  <th scope="col">付款方式</th>
                </tr>
              </thead>

<<<<<<< HEAD:makeup-web/src/components/js/back/memberOrderDetail.jsx
              <tbody>
                <tr>
                  {/*<td>60</td>*/}
                  <td>60</td>
                  <td>安安你好</td>
                  <td>安安你好</td>
                </tr>
              </tbody>
            </table>
=======
							<tbody>
								<tr>
									{/*<td>60</td>*/}
									<td>60</td>
									<td>{this.state.data != null ? this.state.data[0].shippingStyle_id : ""}</td>
									<td>{this.state.data != null ? this.state.data[0].payment_method : ""}</td>
								</tr>
							</tbody>
						</table>
>>>>>>> 3cbe59edd050a90eaf008d8d35b19dbd151f2bdd:makeup-web/src/components/js/back/backOrderDetail.jsx

            <h5 className="pb-3">商品列表</h5>

            <table className="table table-hover p-3 ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">商品編號</th>
                  <th scope="col">品名</th>
                  <th scope="col">數量</th>
                  <th scope="col">顏色</th>
                  <th scope="col">單價</th>
                </tr>
              </thead>

<<<<<<< HEAD:makeup-web/src/components/js/back/memberOrderDetail.jsx
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>A0000001</td>
                  <td>保濕礦物粉凝霜</td>
                  <td>1</td>
                  <td>CHARMEUSE #N20</td>
                  <td>960</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>A0000002</td>
                  <td>第二種保濕礦物粉凝霜</td>
                  <td>1</td>
                  <td>CHARMEUSE #N20</td>
                  <td>960</td>
                </tr>
              </tbody>
            </table>
=======
							<tbody>
								{this.state.data != null
									? this.createCard.create(
											this.state.data.length,
											BackOrderDetailTable,
											this.state.data
									  )
									: null}
							</tbody>
						</table>
>>>>>>> 3cbe59edd050a90eaf008d8d35b19dbd151f2bdd:makeup-web/src/components/js/back/backOrderDetail.jsx

            <h5 className="pb-3">總額</h5>

<<<<<<< HEAD:makeup-web/src/components/js/back/memberOrderDetail.jsx
            <table className="table table-sm table-hover p-3 ">
              <thead>
                <tr>
                  <th scope="col">客製化費用</th>
                  <th scope="col">運費</th>
                  <th scope="col">商品總價</th>
                  <th scope="col">折扣</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>60</td>
                  <td>60</td>
                  <td>1920</td>
                  <td>90%</td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    總共<h2>1836</h2>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    );
  }
=======
						<table className="table table-sm table-hover p-3 ">
							<thead>
								<tr>
									{/*<th scope="col">客製化費用</th>*/}
									<th scope="col">運費</th>
									<th scope="col">商品總價</th>
									<th scope="col">折扣</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									{/*<td>60</td>*/}
									<td>{this.state.data != null ? this.state.data[0].deliverFee : ""}</td>
									<td>{this.state.data != null ? this.totalPrice() : ""}</td>
									<td>0%</td>
								</tr>
								<tr>
									<td colSpan={4}>
										總共：：
										<span>
											{this.state.data != null
												? this.totalPrice(this.state.data[0].deliverFee)
												: ""}
										</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</form>
			</div>
		);
	}
>>>>>>> 3cbe59edd050a90eaf008d8d35b19dbd151f2bdd:makeup-web/src/components/js/back/backOrderDetail.jsx
}

export default BackOrderDetail;
