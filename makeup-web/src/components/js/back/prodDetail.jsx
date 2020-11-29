import React, { Component } from "react";
import IMGPath from "../imgPath"; //引入圖片
import Ajax from "../ajax"; //引入圖片
import { Link } from "react-router-dom";

//import { Link } from "react-router-dom";

class ProdDetail extends Component {
	constructor(prop) {
		super(prop);
		this.state = {
			data: null,
		};

		this.imgPath = new IMGPath();
		this.ajax = new Ajax();
		this.ajax.startListener(
			"post",
			`/proddetail/`,
			this.u,
			{ cId: JSON.parse(sessionStorage.getItem("member")).customer_id,
			 }
		);
		// this.avater = require.context("./images/index", false, /\.(png|jpe?g|svg)$/);
	}

	u = data => {
		this.setState({ data: data });
			console.log(data);
	};


	prodEdit = (e)=>{
		
		let editProdData = {
			// cId: JSON.parse(sessionStorage.getItem("member")).customer_id,
			productName: document.querySelector( "#productName").value,
			unitPrice:document.querySelector( "#unitPrice").value,
			productColor:document.querySelector( "#productColor_0").value,
			img1:document.querySelector( "#img1").value,
			detail:document.querySelector( "#detail").value,
			putDate:document.querySelector( "#putDate").value,
			updateDate:document.querySelector( "#updateDate").value
		}
		this.ajax.startListener("post", "/prodedit", this.u, editProdData);
	
	}

	render() {
		return (
			//{/* prodCopyUpdate內容 */}
			<div className="col my-content">
				<div className="p-3" >
					<input type="hidden" name="#" defaultValue="prodSearchList" />

					<div className="pt-3 form-head ">
						<div className="pt-3">
							<h2 className="pt-3 pb-3 text-center">
								<i className="fa fa-table" />

								商品詳情 / 商品修改
							</h2>

							<hr />

							<div className="input-group mb-3 d-flex justify-content-center">
								<div className="mb-3 mx-3">
									<Link to="/backend/prod" className="gray-Link my-button">
										回上一頁
									</Link>
								</div>

								<div className="mb-3 mx-3">
									<button
									onClick={this.prodEdit}
									name="lastPege" type="submit" className="gray-Link my-button">
										確認送出
									</button>
								</div>

								<div className="mb-3 mx-3">
									<span onClick={console.log()} className="gray-Link my-button">
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

								<p>天然底妝</p>

								<select
									defaultValue={"天然底妝"}
									onChange={console.log("ok")}
									id="kindA"
									name="kindA"
									className="custom-select"
									aria-describedby="kindAHelpBlock"
									hidden
								>
									<option value={"天然底妝"}>天然底妝</option>
									<option value={"duck"}>Duck</option>
									<option value={"fish"}>Fish</option>
								</select>

								<span id="kindAHelpBlock" className="form-text text-muted">
									請先選擇大分類小分類的內容才會出現
								</span>
							</div>

							<div className="col-5">
								<span>小分類項：</span>

								<p>粉底｜BB霜｜蜜粉</p>

								<select
									defaultValue={"粉底｜BB霜｜蜜粉"}
									onChange={console.log("ok")}
									id="kindB"
									name="kindB"
									className="custom-select"
									hidden
								>
									<option value={"粉底｜BB霜｜蜜粉"}>粉底｜BB霜｜蜜粉</option>
									<option value={"duck"}>Duck</option>
									<option value={"fish"}>Fish</option>
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
									defaultValue={this.state.data == null ? "" : this.state.data[0].productName}
									onChange = { (event) =>{console.log(event.target.value ) ;}}
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
								id="productColor_0"
								type="text"
								className="form-control"
								defaultValue={this.state.data == null ? "" : this.state.data[0].productColor}
								onChange = { (event) =>{console.log(event.target.value ) ;}}
								/>
							</div>
						</div>

						<div className="form-group row">
							<label htmlFor="unitPrice" className="col-2 col-form-label">
								單價
							</label>

							<div className="col-10">
								<div>
									<input
										id="unitPrice"
										name="unitPrice"
										type="text"
										className="form-control"
										aria-describedby="unitPriceHelpBlock"
										defaultValue={this.state.data == null ? "" : this.state.data[0].unitPrice}
										onChange = { (event) =>{console.log(event.target.value ) ;}}
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

										<input
											id="img1"
											name="img1"
											placeholder="圖片1"
											type="file"
											className="form-control"
										/>
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
									defaultValue={this.state.data == null ? "" : this.state.data[0].detail}
									onChange = { (event) =>{console.log(event.target.value ) ;}}
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
									id="putDate" name="putDate" type="text" className="form-control"
									defaultValue={this.state.data == null ? "" : this.state.data[0].putDate}
									onChange = { (event) =>{console.log(event.target.value ) ;}}
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
										onChange = { (event) =>{console.log(event.target.value ) ;}}
									/>
								</div>
							</div>
						</div>

						<div className="form-group row">
							<label className="col-2">商品狀態</label>
							<div className="col-10">
								<div className="custom-control custom-radio custom-control-inline">
									<input
										name="productStatu"
										id="productStatu_0"
										type="radio"
										className="custom-control-input"
										defaultValue="putOn"
									/>

									<label htmlFor="productStatu_0" className="custom-control-label">
										上架
									</label>
								</div>

								<div className="custom-control custom-radio custom-control-inline">
									<input
										name="productStatu"
										id="productStatu_1"
										type="radio"
										className="custom-control-input"
										defaultValue="putDown"
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
				</div>
			</div>
		);
	}
}

export default ProdDetail;
