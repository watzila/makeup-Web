import React, { Component } from "react";
import IMGPath from "../imgPath"; //引入圖片
import Ajax from "../ajax"; //引入圖片
import { Link } from "react-router-dom";

//import { Link } from "react-router-dom";

class ProdDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
		};

		this.imgPath = new IMGPath();
		this.ajax = new Ajax();
		this.ajax.startListener("get", `/p/後台?pid=${this.props.match.params.pid}`, this.u);

		//console.log(props);
	}

	u = data => {
		this.setState({ data: data });
		//console.log(data);
	};

	prodEditOK = e => {
		let editProdData = {
			productName: document.querySelector("#productName").value,
			unitPrice: document.querySelector("#unitPrice").value,
			productColor: document.querySelector("#productColor_0").value,
			img1: document.querySelector("#img1").value,
			detail: document.querySelector("#detail").value,
			putDate: document.querySelector("#putDate").value,
			updateDate: document.querySelector("#updateDate").value,
		};

		this.ajax.startListener("post", "/prodedit", this.u, editProdData);
	};

	//按下修改
	prodCanEdit = () => {
		let text = document.getElementsByClassName("canEdit");
		let select = document.getElementsByTagName("select");
		let input = document.getElementsByTagName("input");
		let radio = document.querySelectorAll("input[type='radio']");

		for (let ele of text) {
			ele.hidden = "hidden";
		}

		for (let ele of select) {
			ele.removeAttribute("hidden");
		}

		for (let ele of input) {
			ele.removeAttribute("hidden");
		}

		for (let ele of radio) {
			ele.disabled = false;
		}

		document.getElementsByTagName("textarea")[0].removeAttribute("hidden");
		document.querySelector("button[type='submit']").disabled = false;
	};

	render() {
		return (
			//{/* prodCopyUpdate內容 */}
			<div className="col my-content">
				<form method="post" action="http://localhost:3001/prodedit" className="p-3">
					<input type="hidden" name="pid" defaultValue={this.props.match.params.pid} />

					<div className="pt-3 form-head ">
						<div className="pt-3">
							<h2 className="pt-3 pb-3 text-center">
								<i className="fa fa-table" />
								商品詳情 / 商品修改
							</h2>

							<hr />

							<div className="input-group mb-3 d-flex justify-content-center">
								<div className="mb-3 mx-3">
									<Link to="/backend/prod/1" className="gray-Link my-button">
										回上一頁
									</Link>
								</div>

								<div className="mb-3 mx-3">
									<button
										//onClick={this.prodEditOK}
										type="submit"
										className="gray-Link my-button"
										disabled
									>
										確認送出
									</button>
								</div>

								<div className="mb-3 mx-3">
									<span onClick={this.prodCanEdit} className="gray-Link my-button">
										修改
									</span>
								</div>
							</div>
						</div>
					</div>

					<div className="form-body p-3 mb-5">
						<div className="form-group row ">
							<label htmlFor="kindA" className="col-2 col-form-label">
								分類選擇
							</label>

							<div className="col-5">
								<span>大分類項：</span>

								<p className="canEdit">{this.state.data == null ? "" : this.state.data[0].kindA}</p>

								<select
									defaultValue={this.state.data == null ? "" : this.state.data[0].kindA}
									onChange={e => {
										return e.target.value;
									}}
									id="kindA"
									name="kindA"
									className="custom-select"
									aria-describedby="kindAHelpBlock"
									hidden
								>
									<option value={"底妝"}>底妝</option>
									<option value={"唇彩"}>唇彩</option>
									<option value={"fish"}>Fish</option>
								</select>

								{/*<span id="kindAHelpBlock" className="form-text text-muted">
									請先選擇大分類小分類的內容才會出現
								</span>*/}
							</div>

							<div className="col-5">
								<span>小分類項：</span>

								<p className="canEdit">{this.state.data == null ? "" : this.state.data[0].kindB}</p>

								<select
									defaultValue={this.state.data == null ? "" : this.state.data[0].kindB}
									onChange={e => {
										return e.target.value;
									}}
									id="kindB"
									name="kindB"
									className="custom-select"
									hidden
								>
									<option value={"粉餅"}>粉餅</option>
									<option value={"蜜粉"}>蜜粉</option>
									<option value={"唇釉"}>唇釉</option>
								</select>
							</div>
						</div>

						<div className="form-group row">
							<label htmlFor="productName" className="col-2 col-form-label">
								品名
							</label>
							<div className="col-10">
								<p className="canEdit">
									{this.state.data == null ? "" : this.state.data[0].productName}
								</p>

								<input
									id="productName"
									name="productName"
									type="text"
									className="form-control"
									aria-describedby="productNameHelpBlock"
									defaultValue={this.state.data == null ? "" : this.state.data[0].productName}
									onChange={event => {
										return event.target.value;
									}}
									hidden
								/>

								{/*<span id="productNameHelpBlock" className="form-text text-muted">
									請完整填寫
								</span>*/}
							</div>
						</div>

						<div className="form-group row">
							<label className="col-2">顏色</label>

							<div className="col-10">
								<p className="canEdit">
									{this.state.data == null ? "" : this.state.data[0].productColor}
								</p>

								<input
									name="productColor"
									id="productColor_0"
									type="text"
									className="form-control"
									defaultValue={this.state.data == null ? "" : this.state.data[0].productColor}
									onChange={event => {
										return event.target.value;
									}}
									hidden
								/>
							</div>
						</div>

						<div className="form-group row">
							<label htmlFor="unitPrice" className="col-2 col-form-label">
								單價
							</label>

							<div className="col-10">
								<div>
									<p className="canEdit">
										{this.state.data == null ? "" : this.state.data[0].unitPrice}
									</p>

									<input
										id="unitPrice"
										name="unitPrice"
										type="text"
										className="form-control"
										aria-describedby="unitPriceHelpBlock"
										defaultValue={this.state.data == null ? "" : this.state.data[0].unitPrice}
										onChange={event => {
											return event.target.value;
										}}
										hidden
									/>
								</div>

								{/*<span id="unitPriceHelpBlock" className="form-text text-muted">
									請填寫新台幣
								</span>*/}
							</div>
						</div>

						<div className="form-group row">
							<label htmlFor="img" className="col-2 col-form-label">
								商品圖片
							</label>

							{/*<img src={} alt=""/>*/}

							<div className="col-10" id="imgUpdate">
								<div className="row">
									<div className="input-group col">
										<div className="input-group-prepend">
											<div className="input-group-text">
												<i className="fa fa-arrow-circle-up" />
											</div>
										</div>

										<input id="img1" name="img[]" type="file" className="form-control" multiple />
									</div>
								</div>
							</div>
						</div>

						<div className="form-group row">
							<label htmlFor="detail" className="col-2 col-form-label">
								商品詳細資訊
							</label>

							<pre className="canEdit col-10">
								{this.state.data == null ? "" : this.state.data[0].detail}
							</pre>

							<div className="col-10">
								<textarea
									id="detail"
									name="detail"
									cols={40}
									rows={10}
									className="form-control"
									style={{ resize: "none" }}
									defaultValue={this.state.data == null ? "" : this.state.data[0].detail}
									onChange={event => {
										return event.target.value;
									}}
									hidden
								/>
							</div>
						</div>

						<div className="form-group row">
							<label className="col-2">送貨及付款方式</label>

							<div className="col-10">
								<div className="custom-control custom-checkbox custom-control-inline">
									<input
										name="shippingStyle_id"
										id="shippingStyle_id_0"
										type="checkbox"
										className="custom-control-input"
										defaultValue="storePickupOn7-11"
									/>

									<label htmlFor="shippingStyle_id_0" className="custom-control-label">
										7-11
									</label>
								</div>

								<div className="custom-control custom-checkbox custom-control-inline">
									<input
										name="shippingStyle_id"
										id="shippingStyle_id_1"
										type="checkbox"
										className="custom-control-input"
										defaultValue="toHome"
									/>

									<label htmlFor="shippingStyle_id_1" className="custom-control-label">
										郵寄到府
									</label>
								</div>

								<div className="custom-control custom-checkbox custom-control-inline">
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
								</div>
							</div>
						</div>

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

									<input
										id="putDate"
										name="putDate"
										type="text"
										className="form-control"
										defaultValue={this.state.data == null ? "" : this.state.data[0].putDate}
										onChange={event => {
											return event.target.value;
										}}
									/>
								</div>
							</div>
						</div>

						<div className="form-group row">
							<label htmlFor="updateDate" className="col-2 col-form-label">
								上次修改日期
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
										type="text"
										className="form-control"
										disabled
										defaultValue={this.state.data == null ? "" : this.state.data[0].updateDate}
										onChange={event => {
											return event.target.value;
										}}
									/>
								</div>
							</div>
						</div>

						<div className="form-group row">
							<label className="col-2">商品狀態</label>
							<div className="col-10">
								<div className="custom-control custom-radio custom-control-inline">
									<input
										name="productStatus"
										id="productStatu_0"
										type="radio"
										className="custom-control-input"
										defaultChecked
										defaultValue={1}
										onChange={e => {
											return e.target.checked;
										}}
										disabled
									/>

									<label htmlFor="productStatu_0" className="custom-control-label">
										上架
									</label>
								</div>

								<div className="custom-control custom-radio custom-control-inline">
									<input
										name="productStatus"
										id="productStatu_1"
										type="radio"
										className="custom-control-input"
										defaultValue={0}
										onChange={e => {
											return e.target.checked;
										}}
										disabled
									/>

									<label htmlFor="productStatu_1" className="custom-control-label">
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

export default ProdDetail;
