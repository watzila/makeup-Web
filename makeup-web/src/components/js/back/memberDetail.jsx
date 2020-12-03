import React, { Component } from "react";
// import IMGPath from './js/imgPath'; //引入圖片
import { Link } from "react-router-dom";

import BackMemberDetailTable from "./backMemberDetailTable.js";

import CreateCard from "../createCard";
import Ajax from "../ajax"; //

class MemberDetail extends Component {
	constructor(prop) {
		super(prop);
		this.state = {
			data: null,
		};

		this.createCard = new CreateCard();
		this.ajax = new Ajax();
		this.ajax.startListener("post", "/backend/memberdetail", this.u, {
			pId: this.props.location.state.pId,
		});
		console.log(this.props);
	}

	u = data => {
		this.setState({ data: data });

		// console.log(data);
	};

	handleChangeGender = event => {
		this.state.data[0].gender = event.target.value;
		this.setState({});
	};
	handleChangeCustomerStatus = event => {
		this.state.data[0].customerStatus = event.target.value;
		// console.log(this.state.data[0].customerStatus);
		// console.log(event.target.value);
		this.setState({});
	};
	handleSubmit = event => {
		event.preventDefault();
		this.ajax.startListener("post", "/backend/member/updateMemberDetail", this.u, {
			pId: this.props.location.state.pId,
			account: this.state.data[0].account,
			customerName: this.state.data[0].customerName,
			cellPhone: this.state.data[0].cellPhone,
			nickname: this.state.data[0].nickname,
			birth_date: this.state.data[0].birth_date,
			gender: this.state.data[0].gender,
			postCode: this.state.data[0].postCode,
			city: this.state.data[0].city,
			district: this.state.data[0].district,
			address: this.state.data[0].address,
			customerStatus: this.state.data[0].customerStatus,
		});
		// console.log(this.state.data[0]);
	};

	render() {
		// // console.log(this.state.data);
		// console.log(this.props.location.state.pId);
		return (
			// {/* index_memberDetail內容 */}
			<div className="col my-content">
				<div className="pt-3 ">
					<form onSubmit={this.handleSubmit} className="p-3">
						<input type="hidden" name="#" defaultValue="memberDetail" />
						<h2 className="pt-3 pb-3 text-center">
							<i className="fa fa-user-circle" />
							詳細會員資料
						</h2>
						<hr />
						<div className="input-group mb-3 d-flex justify-content-center">
							<div className="mb-3 mx-3">
								<Link to="/backend/member/1" className="gray-Link my-button">
									回上一頁
								</Link>
							</div>
							<div className="mb-3 mx-3">
								<Link
									to={`/backend/${
										this.props != null ? this.props.location.state.pId : ""
									}/memberorder`}
									className="my-button"
								>
									訂單歷史紀錄
								</Link>
							</div>
							{/*<div className="mb-3 mx-3">
                <a
                  name="lastPege"
                  type="submit"
                  className="gray-Link my-button"
                >
                  留言歷史紀錄
                </a>
              </div>*/}
							{/*<div className="mb-3 mx-3">
                <a
                  name="lastPege"
                  type="submit"
                  className="gray-Link my-button"
                >
                  會員收藏
                </a>
              </div>*/}
							<div className="mb-3 mx-3">
								<input
									name="lastPege"
									type="submit"
									className="gray-Link my-button"
									value="➣儲存"
									style={{ lineHeight: "28px" }}
								/>
							</div>
						</div>

						<div className="form-body p-3 mb-5">
							<div className="form-group row">
								<label htmlFor="customer_id" className="col-2 col-form-label">
									會員id
								</label>
								<div className="col-4">
									<input
										id="customer_id"
										name="customer_id"
										type="text"
										defaultValue={this.state.data != null ? this.state.data[0].customer_id : ""}
										className="form-control"
										onChange={event => {
											// console.log(event.target.value);
											// console.log(this.state.data[0]);
											return (this.state.data[0].customer_id = event.target.value);
										}}
									/>
									<span id="customer_idHelpBlock" className="form-text text-muted">
										會員id無法修改
									</span>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="email" className="col-2 col-form-label">
									帳號
								</label>
								<div className="col-4">
									<input
										id="email"
										name="email"
										type="text"
										className="form-control"
										defaultValue={this.state.data != null ? this.state.data[0].account : ""}
										className="form-control"
										onChange={event => {
											// console.log(event.target);
											// console.log(this.state.data[0]);
											return (this.state.data[0].account = event.target.value);
										}}
									/>
									<span id="emailHelpBlock" className="form-text text-muted">
										會員帳號無法修改
									</span>
								</div>
							</div>
							{/* 將名與姓字串串接後顯示 */}
							<div className="form-row">
								<label htmlFor="userName" className="col-2 col-form-label">
									基本資料
								</label>
								<div className="col">
									<label htmlFor="userName">
										<span>姓名</span>
									</label>
									<input
										id="userName"
										name="userName"
										type="text"
										className="form-control"
										defaultValue={this.state.data != null ? this.state.data[0].customerName : ""}
										className="form-control"
										onChange={event => {
											return (this.state.data[0].customerName = event.target.value);
										}}
									/>
								</div>
								<div className="col">
									<label htmlFor="cellPhone">
										<span>手機</span>
									</label>
									<input
										id="cellPhone"
										name="cellPhone"
										type="text"
										className="form-control"
										defaultValue={this.state.data != null ? this.state.data[0].cellPhone : ""}
										className="form-control"
										onChange={event => {
											return (this.state.data[0].cellPhone = event.target.value);
										}}
									/>
								</div>
								<div className="col">
									<label htmlFor="nickName">
										<span>暱稱</span>
									</label>
									<input
										id="nickName"
										name="nickName"
										type="text"
										className="form-control"
										defaultValue={this.state.data != null ? this.state.data[0].nickname : ""}
										className="form-control"
										onChange={event => {
											return (this.state.data[0].nickname = event.target.value);
										}}
									/>
								</div>
								<div className="col">
									<label htmlFor="birth">
										<span>生日</span>
									</label>
									<input
										id="birthDate"
										name="birthDate"
										type="text"
										className="form-control"
										defaultValue={this.state.data != null ? this.state.data[0].birth_date : ""}
										className="form-control"
										onChange={event => {
											return (this.state.data[0].birth_date = event.target.value);
										}}
									/>
								</div>
							</div>
							<div className="form-row pb-3 pt-3">
								<label className="col-2">性別</label>
								<div className="col-2">
									<select
										className="form-control"
										value={this.state.data != null ? this.state.data[0].gender : ""}
										onChange={this.handleChangeGender}
									>
										<option value="女">女</option>
										<option value="男">男</option>
										<option value="中性X">中性X</option>
									</select>
								</div>
							</div>
							<div className="form-row">
								<label htmlFor="postCode" className="col-2 col-form-label">
									詳細住址
								</label>
								<div className="col">
									<label htmlFor="postCode">
										<span className="postCode-subtitle">郵遞區號</span>
									</label>
									<input
										id="postCode"
										name="postCode"
										type="text"
										className="form-control"
										defaultValue={this.state.data != null ? this.state.data[0].postCode : ""}
										className="form-control"
										onChange={event => {
											return (this.state.data[0].postCode = event.target.value);
										}}
									/>
								</div>
								<div className="col">
									<label htmlFor="city">
										<span className="postCode-city">縣市</span>
									</label>
									<input
										id="city"
										name="city"
										type="text"
										className="form-control"
										defaultValue={this.state.data != null ? this.state.data[0].city : ""}
										className="form-control"
										onChange={event => {
											return (this.state.data[0].city = event.target.value);
										}}
									/>
								</div>
								<div className="col">
									<label htmlFor="district">
										<span className="postCode-district">鄉鎮區</span>
									</label>
									<input
										id="district"
										name="district"
										type="text"
										className="form-control"
										defaultValue={this.state.data != null ? this.state.data[0].district : ""}
										className="form-control"
										onChange={event => {
											return (this.state.data[0].district = event.target.value);
										}}
									/>
								</div>
								{/* 為了整齊的分成四格而出現的隱藏欄位 */}
								<div className="col hide">
									<input id="h" type="text" />
								</div>
							</div>
							<div className="form-row pt-3">
								<label htmlFor="address" className="col-2 col-form-label" />
								<div className="col-10">
									<input
										id="address"
										name="address"
										type="text"
										className="form-control"
										defaultValue={this.state.data != null ? this.state.data[0].address : ""}
										className="form-control"
										onChange={event => {
											return (this.state.data[0].address = event.target.value);
										}}
									/>
								</div>
							</div>
							<div className="form-row pb-3 pt-3">
								<label className="col-2">會員狀態</label>
								<div className="col-2">
									<select
										className="form-control"
										value={this.state.data != null ? this.state.data[0].customerStatus : ""}
										onChange={this.handleChangeCustomerStatus}
									>
										<option value="正常">正常</option>
										<option value="限制權限">限制權限</option>
										<option value="永久停權">永久停權</option>
										{/* <option value="">
                      {this.state.data != null
                        ? this.state.data[0].customerStatus
                        : ''}
                    </option> */}
									</select>
								</div>
							</div>
							{/* <input type="submit" value="Submit" /> */}
						</div>

						{/* 會員收藏資料 */}
						<div className="my-table p-3 mb-5">
							<h5 className="pb-3">會員收藏</h5>
							<table className="table table-hover p-3 ">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">商品編號</th>
										<th scope="col">大分類項</th>
										<th scope="col">小分類項</th>
										<th scope="col">品名</th>
										<th scope="col">顏色</th>
										<th scope="col">功能</th>
									</tr>
								</thead>
								<tbody>
									{this.state.data != null
										? this.createCard.create(
												this.state.data.length,
												BackMemberDetailTable,
												this.state.data
										  )
										: null}
								</tbody>
							</table>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default MemberDetail;
