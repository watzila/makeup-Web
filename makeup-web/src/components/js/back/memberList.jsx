import React, { Component } from "react";
// import IMGPath from "./js/imgPath"; //引入圖片
// import { Link } from "react-router-dom";

class MemberList extends Component {
	constructor(prop) {
		super(prop);
		this.state = {
			data: null,
		};
		// this.imgPath = new IMGPath();
		// this.avater = require.context("./images/index", false, /\.(png|jpe?g|svg)$/);
	}

	render() {
		return (
			// {/* MemberList內容 */}
			<div className="col my-content">
				<input type="hidden" name="#" defaultValue="MemberList" />
				<form className="pt-3">
					<h2 className="pt-3 pb-3 text-center">
						<i className="fa fa-user-circle" />
						會員管理
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
								詳細搜尋
							</a>
						</div>
					</div>*/}
				</form>
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
										<option value={1}>會員帳號</option>
										<option value={2}>姓名</option>
										<option value={4}>手機</option>
										<option value={5}>暱稱</option>
										<option value={6}>性別</option>
										<option value={7}>生日</option>
										<option value={8}>會員狀態</option>
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
									<label htmlFor="">會員id</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="">會員帳號</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="">姓名</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="">手機</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="">暱稱</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="">性別</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="">生日</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="">會員詳情</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="">會員狀態</label>
								</div>
							</div>*/}
						</div>
					</div>

					{/*表格*/}
					<table className="table table-hover p-3">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">會員id</th>
								<th scope="col">會員帳號</th>
								<th scope="col">姓名</th>
								<th scope="col">手機</th>
								<th scope="col">暱稱</th>
								<th scope="col">性別</th>
								<th scope="col">生日</th>
								<th scope="col">會員詳情</th>
								<th scope="col">會員狀態</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>#001</td>
								<td>gogogo</td>
								<td>王小明</td>
								<td>0912-345678</td>
								<td>apple</td>
								<td>男</td>
								<td>2020/11/17</td>
								<td>
									<a name="prodDtail" type="submit" className="gray-Link my-button">
										檢視
									</a>
								</td>
								<td>
									<div className="dropdown">
										<button
											className="btn btn-light btn-sm dropdown-toggle"
											type="button"
											id="dropdownMenuButton"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											請選擇
										</button>
										<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
											<a className="dropdown-item" href="#">
												正常
											</a>
											<a className="dropdown-item" href="#">
												限制權限
											</a>
											<a className="dropdown-item" href="#">
												永久停權
											</a>
										</div>
									</div>
								</td>
							</tr>
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

export default MemberList;
