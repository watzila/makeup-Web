import React, { Component } from "react";
import { Link } from "react-router-dom";

import BackOrderTable from "./backOrderTable";

import CreateCard from "../createCard"; //
import Ajax from "../ajax"; //

class BackOrderList extends Component {
	constructor(prop) {
		super(prop);

		this.state = {
			data: null, //當前頁數資料
			allData: null, //所有產品資料
		};

		this.createCard = new CreateCard();
		this.ajax = new Ajax();

		this.ajax.startListener("get", "/backend/orderlist", this.u);
	}

	u = data => {
		let newData = [],
			k = 0,
			newData2 = [];

		for (let i = 0; i < data.length; i++) {
			for (let j = 0; j < data.length; j++) {
				if (i === j && i < data.length - 1) {
					//console.log(i, j);
					continue;
				}
				if (data[i].order_id === data[j].order_id) {
					if (i > j) {
						//console.log(i, j);
						break;
					} else {
						//console.log(i, j);
						data[i].quantity += data[j].quantity;
					}
				}
				if (j + 1 === data.length) {
					newData.push(data[i]);
				}
			}
		}
		console.log(data);
		//所有產品資料資料拆分8個為一組
		do {
			let d = [];
			for (let j = 0; j < 8; j++) {
				if (newData[j + k]) {
					d.push(newData[j + k]);
				} else {
					break;
				}
			}
			newData2.push(d);
			k += 8;
		} while (k < newData.length);

		this.setState({
			data: newData2[0],
			allData: newData2,
		});

		// 頁數按鈕初始化
		document.querySelector(`.page a:nth-of-type(${2})`).className = "click";
		// console.log(newData);
	};

	//換頁
	changePage = (page, which) => {
		console.log(page, which);
		if (page < 0 || page > this.state.allData.length - 1) return;
		this.setState({ data: this.state.allData[page] });

		for (let i = 0; i <= this.state.allData.length; i++) {
			let allA = document.querySelectorAll(".page a");
			allA[i].className = null;
		}
		document.getElementById(which).className = "click";
	};

	//頁碼生成
	createPageNumber = () => {
		let pageNumber = this.state.allData.map((item, index) => {
			return (
				<Link
					to={"/backend/order/" + (index + 1)}
					key={index}
					id={"page_" + index}
					onClick={() => {
						this.changePage(index, "page_" + index);
					}}
				>
					{index + 1}
				</Link>
			);
		});

		return pageNumber;
	};

	search = (k, v) => {
		let kind = document.getElementById(k).value;
		let value = document.getElementById(v).value;

		this.ajax.startListener("post", "/backend/search", this.u, {
			kind: kind,
			value: value,
		});
		console.log(kind, value);
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
								{/*<div className="mr-auto">
                  顯示
                  <select
                    className="custom-select"
                    id="inputGroupSelect"
                    value={1}
                    onChange={(event) => {
                      console.log(event.target.value);
                    }}
                  >
                    <option value={1}>10</option>
                    <option value={2}>20</option>
                    <option value={3}>50</option>
                  </select>
                  <span>筆</span>*/}
								{/*<span className="text-right">123</span>*/}
								{/*</div>*/}

								<div className="mb-2 ml-auto form-row align-items-center">
									<select
										defaultValue={"order_id"}
										onChange={event => {
											return event.target.value;
										}}
										id="kindSelect"
									>
										<option value={`order_id`}>訂單編號</option>
										<option value={`orderDate`}>訂單日期</option>
										<option value={`customerName`}>訂購人</option>
										<option value={`orderStatus`}>訂單狀態</option>
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
										onChange={event => {
											return event.target.value;
										}}
									/>

									<button
										className="my-button col-auto ml-2"
										onClick={() => {
											this.search("kindSelect", "productSearch");
										}}
									>
										送出
									</button>
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
					<Link
						to={
							"/backend/order/" +
							(this.props.match.params.page > 1 ? this.props.match.params.page * 1 - 1 : 1)
						}
						onClick={() => {
							this.changePage(
								this.props.match.params.page * 1 - 2,
								"page_" + (this.props.match.params.page * 1 - 2)
							);
						}}
					>
						&lt;
					</Link>

					{this.state.allData != null ? this.createPageNumber() : null}

					<Link
						to={
							"/backend/order/" +
							(this.props.match.params.page <
							(this.state.allData != null ? this.state.allData.length : null)
								? this.props.match.params.page * 1 + 1
								: this.state.allData != null
								? this.state.allData.length
								: null)
						}
						onClick={() => {
							this.changePage(this.props.match.params.page, "page_" + this.props.match.params.page);
						}}
					>
						&gt;
					</Link>
				</div>
			</div>
		);
	}
}

export default BackOrderList;
