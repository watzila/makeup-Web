import React, { Component } from "react";
// import { Link } from "react-router-dom";

import BackOrderTable from "./backOrderTable";

import CreateCard from "../createCard"; //
import Ajax from "../ajax"; //

class OrderList extends Component {
	constructor(prop) {
		super(prop);
		this.state = {
			data: null,
		};

		this.createCard = new CreateCard();
		this.ajax = new Ajax();

		this.ajax.startListener("post", "/backend/orderlist", this.u);
	}

	u = data => {
		let newData = [];

		for (let i = 0; i < data.length; i++) {
			for (let j = 0; j < data.length; j++) {
				if (i === j) {
					//console.log(i, j);
					continue;
				}
				if (data[i].order_id === data[j].order_id) {
					if (i > j) {
						//console.log(i, j);
						continue;
					} else {
						//console.log(i, j);
						if (data[i].total == null) {
							data[i].total =
								data[i].quantity * data[i].grandTotal + data[j].quantity * data[j].grandTotal;
							console.log(data[i].total);
						} else {
							data[i].total += data[j].quantity * data[j].grandTotal;
							console.log(data[i].total);
						}

						data[i].quantity += data[j].quantity;
					}
				}
				if (j + 1 === data.length) {
					newData.push(data[i]);
				}
			}
		}

		this.setState({ data: newData });
		//console.log(newData);
	};

	render() {
		return (
			// {/* manageOrder內容 */}
			<div className="col my-content">
				{/*<input type="hidden" name="#" defaultValue="OrderList" />*/}

				<div className="pt-3 form-head">
					<div className="pt-3">
						<h2 className="pt-3 pb-3 text-center">
							<i className="fa fa-table" />
							訂單管理
						</h2>

						<hr />

						{/*<div className="input-group mb-3 d-flex justify-content-center">
							<div className="mb-3 mx-3">
								<a name="lastPege" type="submit" className="gray-Link my-button">
									回上一頁
								</a>
							</div>
							<div className="mb-3 mx-3">
								<a name="lastPege" type="submit" className="gray-Link my-button">
									確認送出
								</a>
							</div>
						</div>*/}
					</div>
				</div>

				<div className="my-table p-3 mb-5">
					<div className="row">
						<div className="col-12 mt-3">
							<div className="d-flex">
								<div className="mr-auto">
									顯示
									<select
										className="custom-select"
										id="inputGroupSelect"
										defaultValue={1}
										onChange={console.log("ok")}
									>
										<option value={1}>10</option>
										<option value={2}>20</option>
										<option value={3}>50</option>
									</select>
									<span>筆</span>
									{/*<span className="text-right">123</span>*/}
								</div>

								<div className="mb-2 ml-auto form-row align-items-center">
									<select defaultValue={1} onChange={console.log("ok")} id="inputGroupSelect">
										<option value={1}>訂單編號</option>
										<option value={2}>訂單日期</option>
										<option value={4}>訂購人</option>
										<option value={5}>訂單狀態</option>
									</select>

									<label
										htmlFor="productSearch"
										className="col-auto d-inlin-block align-self-center"
									>
										搜尋名稱：
									</label>
									<input
										className="form-control col form-control-sm"
										type="search"
										name="orderSearch"
										id="productSearch"
									/>

									<button className="my-button col-auto ml-2">送出</button>
								</div>
							</div>

							{/*<div className="d-flex pt-3">
								<p>檢視表格欄位：</p>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="#">訂單編號</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="#">訂單日期</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="#">訂購人</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="#">訂單金額</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="#">訂單明細</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="#">訂單狀態</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="#">訂單操作</label>
								</div>
							</div>*/}
						</div>
					</div>

					{/*表格*/}
					<table className="table table-hover p-3">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">訂單編號</th>
								<th scope="col">訂單日期</th>
								<th scope="col">訂購人</th>
								<th scope="col">數量</th>
								<th scope="col">訂單金額</th>
								<th scope="col">訂單狀態</th>
								{/*<th scope="col">訂單操作</th>*/}
								<th scope="col">訂單明細</th>
							</tr>
						</thead>

						<tbody>
							{this.state.data != null
								? this.createCard.create(this.state.data.length, BackOrderTable, this.state.data)
								: null}
						</tbody>
					</table>
				</div>

				{/*頁碼*/}
				<div className="page d-flex justify-content-center">
					<a href="/">&lt;</a>
					<a className="click" href="/">
						1
					</a>
					<a href="/">2</a>
					<a href="/">3</a>
					<a href="/">&gt;</a>
				</div>
			</div>
		);
	}
}

export default OrderList;