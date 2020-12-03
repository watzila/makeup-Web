import React, { Component } from "react";
import IMGPath from "../imgPath"; //引入圖片
import { Link } from "react-router-dom";
import Ajax from "../ajax"; //和伺服連線

class ProdPutNew extends Component {
	constructor(prop) {
		super(prop);
		this.state = {
			data: null,
		};
		this.imgPath = new IMGPath();
		// this.avater = require.context("./images/index", false, /\.(png|jpe?g|svg)$/);
		this.ajax = new Ajax();
	}

	u = data => {
		this.setState({ data: data });
		// console.log(data);
	};

	// formProd = e =>{
	// 	let addProd = {
	// 		productName :document.querySelector("#productName").value,
	// 		productColor:document.querySelector("#productColor_0").value,
	// 		unitPrice:document.querySelector("#unitPrice").value,
	// 		detail:document.querySelector("#detail").value,
	// 		putDate:document.querySelector("#putDate").value,
	// 		updateDate:document.querySelector("#updateDate").value,
	// 	}
	// 	this.ajax.startListener("post", "/backend/prod/new", this.u, addProd);

	// }

	render() {
		return (
			//{/* prodPutNew內容 */}
			<div className="col my-content">
				<form method="post" action="http://localhost:3001/backend/prod/new" className="p-3">
					<div className="pt-3 form-head ">
						<div className="pt-3">
							<h2 className="pt-3 pb-3 text-center">
								<i className="fa fa-table" />
								商品管理 / 新增商品
							</h2>

							<hr />

							<div className="input-group mb-3 d-flex justify-content-center">
								<div className="mb-3 mx-3">
									<Link to="/backend/prod/1" className="gray-Link my-button">
										回上一頁
									</Link>
								</div>

								<div className="mb-3 mx-3">
									<button type="submit" className="gray-Link my-button">
										確認送出
									</button>
								</div>
								{/*<div className="mb-3 mx-3">
									<a name="lastPege" type="submit" className="gray-Link my-button">
										送審查
									</a>
								</div>*/}
							</div>
						</div>
					</div>

					<div className="form-body p-3 mb-5">
						<div className="form-group row ">
							<span className="col-2 col-form-label">分類選擇</span>

							<div className="col-5">
								<span>大分類項：</span>

								<select
									id="kindA"
									name="kindA"
									className="custom-select"
									aria-describedby="kindAHelpBlock"
									defaultValue={"底妝"}
									onChange={e => {
										return e.target.value;
									}}
								>
									<option value={"底妝"}>底妝</option>
									<option value={"唇彩"}>唇彩</option>
									<option value={"眼彩"}>眼彩</option>
								</select>

								{/*<span id="kindAHelpBlock" className="form-text text-muted">
									請先選擇大分類小分類的內容才會出現
								</span>*/}
							</div>

							<div className="col-5">
								<span>小分類項：</span>

								<select
									id="kindB"
									name="kindB"
									className="custom-select"
									defaultValue={"粉底"}
									onChange={e => {
										return e.target.value;
									}}
								>
									<option value={"粉底"}>粉底</option>
									<option value={"眼影"}>眼影</option>
									<option value={"唇蜜"}>唇蜜</option>
								</select>
							</div>
						</div>

						<div className="form-group row">
							<label htmlFor="productName" className="col-2 col-form-label">
								品名
							</label>

							<div className="col-10">
								<input
									id="productName"
									name="productName"
									type="text"
									className="form-control"
									aria-describedby="productNameHelpBlock"
									onChange={e => {
										return e.target.value;
									}}
								/>

								{/*<span id="productNameHelpBlock" className="form-text text-muted">
									請完整填寫
								</span>*/}
							</div>
						</div>

						<div className="form-group row">
							<label className="col-2">顏色</label>

							<div className="col-10">
								<input
									name="productColor"
									id="productColor"
									type="text"
									className="form-control"
									onChange={e => {
										return e.target.value;
									}}
								/>
							</div>
						</div>

						<div className="form-group row">
							<label htmlFor="unitPrice" className="col-2 col-form-label">
								單價
							</label>

							<div className="col-10">
								<input
									id="unitPrice"
									name="unitPrice"
									type="text"
									className="form-control"
									aria-describedby="unitPriceHelpBlock"
									onChange={e => {
										return e.target.value;
									}}
								/>

								<span id="unitPriceHelpBlock" className="form-text text-muted">
									請填寫新台幣
								</span>
							</div>
						</div>

						<div className="form-group row">
							<label htmlFor="img1" className="col-2 col-form-label">
								商品圖片
							</label>

							<div className="col-10">
								<div className="row">
									<div className="input-group col">
										<div className="input-group-prepend">
											<div className="input-group-text">
												<i className="fa fa-arrow-circle-up" />
											</div>
										</div>
										<input id="img" name="img[]" type="file" className="form-control" multiple />
									</div>
								</div>
							</div>
						</div>

						<div className="form-group row">
							<label htmlFor="detail" className="col-2 col-form-label">
								商品詳細資訊
							</label>

							<div className="col-10">
								<textarea
									id="detail"
									name="detail"
									cols={40}
									rows={10}
									className="form-control"
									style={{ resize: "none" }}
									onChange={e => {
										return e.target.value;
									}}
								/>
							</div>
						</div>

						{/*<div className="form-group row">*/}
						{/*<span className="col-2">送貨及付款方式</span>*/}

						{/*<div className="col-10">*/}
						{/*<div className="custom-control custom-checkbox custom-control-inline">
                  <input
                    name="shippingStyle_id[]"
                    id="shippingStyle_id1"
                    type="checkbox"
                    className="custom-control-input"
                    defaultValue="storePickupOn7-11"
                  />
                  <label
                    htmlFor="shippingStyle_id_0"
                    className="custom-control-label"
                  >
                    7-11
                  </label>
                </div>

                <div className="custom-control custom-checkbox custom-control-inline">
                  <input
                    name="shippingStyle_id"
                    id="shippingStyle_id2"
                    type="checkbox"
                    className="custom-control-input"
                    defaultValue="toHome"
                  />
                  <label
                    htmlFor="shippingStyle_id_1"
                    className="custom-control-label"
                  >
                    郵寄到府
                  </label>
                </div>*/}

						{/*<div className="custom-control custom-checkbox custom-control-inline">
									<input
										name="shippingStyle_id"
										id="shippingStyle_id_2"
										type="checkbox"
										className="custom-control-input"
										defaultValue="other"
									/>
									<label htmlFor="shippingStyle_id_2" className="custom-control-label">
										其他
									</label>
								</div>*/}
						{/*</div>*/}
						{/*</div>*/}

						<div className="form-group row">
							<label htmlFor="putDate" className="col-2 col-form-label">
								上架日期
							</label>

							<div className="col-10">
								<div className="input-group">
									<div className="input-group-prepend">
										<div className="input-group-text">
											<i className="fa fa-calendar" />
										</div>
									</div>
									<input id="putDate" name="putDate" type="date" className="form-control" />
								</div>
							</div>
						</div>

						{/* <div className="form-group row">
							<label htmlFor="updateDate" className="col-2 col-form-label">
								修改日期
							</label>
							<div className="col-10">
								<div className="input-group">
									<div className="input-group-prepend">
										<div className="input-group-text">
											<i className="fa fa-calendar" />
										</div>
									</div>
									<input
										id="updateDate"
										name="updateDate"
										placeholder
										type="text"
										className="form-control"
										disabled
									/>
								</div>
							</div>
						</div> */}
						<div className="form-group row">
							<span className="col-2">商品狀態</span>

							<div className="col-10">
								<div className="custom-control custom-radio custom-control-inline">
									<input
										name="productStatus"
										id="productStatu1"
										type="radio"
										className="custom-control-input"
										defaultChecked
										defaultValue={1}
										onChange={e => {
											return e.target.checked;
										}}
									/>
									<label htmlFor="productStatu1" className="custom-control-label">
										上架
									</label>
								</div>

								<div className="custom-control custom-radio custom-control-inline">
									<input
										name="productStatus"
										id="productStatu2"
										type="radio"
										className="custom-control-input"
										defaultValue={0}
										onChange={e => {
											return e.target.checked;
										}}
									/>
									<label htmlFor="productStatu2" className="custom-control-label">
										下架
									</label>
								</div>

								{/*<div className="custom-control custom-radio custom-control-inline">
									<input
										name="productStatu"
										id="productStatu_2"
										type="radio"
										className="custom-control-input"
										defaultValue="review"
									/>
									<label htmlFor="productStatu_2" className="custom-control-label">
										審核
									</label>
								</div>*/}
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default ProdPutNew;
