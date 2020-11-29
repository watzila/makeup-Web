import React, { Component } from "react";

import BackProdTable from "./backProdTable";

import CreateCard from "../createCard"; //

class ProdList extends Component {
	constructor(prop) {
		super(prop);
		this.state = {
			data: null,
		};

		this.createCard = new CreateCard();
		// this.avater = require.context("./images/index", false, /\.(png|jpe?g|svg)$/);
	}

	render() {
		return (
			//{/* side側邊欄功能列 */}
			//{/*<Side />*/}
			//{/* ProdList內容 */}
			<div className="col my-content">
				<div>
					<input type="hidden" name="" defaultValue="ProdList" />

					<div className="pt-3 form-head">
						<div className="pt-3">
							<h2 className="pt-3 pb-3 text-center">
								<i className="fa fa-th-large" />
								商品管理
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
											defaultValue={1}
											onChange={console.log("ok")}
											className="custom-select"
											id="inputGroupSelect"
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
											<option value={1}>分類項</option>
											<option value={2}>品名</option>
											<option value={4}>顏色</option>
											<option value={5}>單價</option>
											<option value={6}>上架日期</option>
											<option value={7}>修改日期</option>
											<option value={8}>商品狀態</option>
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
										<input type="checkbox" name="" id="" />
										<label htmlFor="">商品小圖</label>
									</div>
									<div className="mr-3">
										<input type="checkbox" name="" id="" />
										<label htmlFor="">商品編號</label>
									</div>
									<div className="mr-3">
										<input type="checkbox" name="" id="" />
										<label htmlFor="">小分類項</label>
									</div>
									<div className="mr-3">
										<input type="checkbox" name="" id="" />
										<label htmlFor="">品名</label>
									</div>
									<div className="mr-3">
										<input type="checkbox" name="" id="" />
										<label htmlFor="">顏色</label>
									</div>
									<div className="mr-3">
										<input type="checkbox" name="" id="" />
										<label htmlFor="">單價</label>
									</div>
									<div className="mr-3">
										<input type="checkbox" name="" id="" />
										<label htmlFor="">上架日期</label>
									</div>
									<div className="mr-3">
										<input type="checkbox" name="" id="" />
										<label htmlFor="">修改日期</label>
									</div>
									<div className="mr-3">
										<input type="checkbox" name="" id="" />
										<label htmlFor="">商品狀態</label>
									</div>
									<div className="mr-3">
										<input type="checkbox" name="" id="" />
										<label htmlFor="">行動</label>
									</div>
								</div>*/}
							</div>
						</div>

						{/*表格*/}
						<table className="table table-hover p-3">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">商品小圖</th>
									{/*<th scope="col">商品編號</th>*/}
									<th scope="col">小分類項</th>
									<th scope="col">品名</th>
									<th scope="col">顏色</th>
									<th scope="col">單價</th>
									<th scope="col">上架日期</th>
									<th scope="col">修改日期</th>
									<th scope="col">商品狀態</th>
									<th scope="col">行動</th>
								</tr>
							</thead>

							<tbody>{this.createCard.create(4, BackProdTable, this.state.data)}</tbody>
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
			</div>
		);
	}
}

export default ProdList;
