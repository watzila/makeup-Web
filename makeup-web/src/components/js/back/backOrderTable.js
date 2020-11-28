import React, { Component } from "react";
import { Link } from "react-router-dom";

import IMGPath from "../imgPath"; //引入圖片

class BackOrderTable extends Component {
	constructor(props) {
		super(props);

		this.imgPath = new IMGPath();
	}

	render() {
		return (
			<tr>
				<th scope="row">{this.props.pID}</th>
				<td>{this.props.data != null ? this.props.data.order_id : ""}</td>
				<td>{this.props.data != null ? this.props.data.orderDate : ""}</td>
				<td>{this.props.data != null ? this.props.data.customerName : ""}</td>
				<td>{this.props.data != null ? this.props.data.quantity : ""}</td>
				<td>
					{this.props.data != null ? this.props.data.quantity * this.props.data.grandTotal : ""}
				</td>
				{/*<td>
					<a className="my-button">修改</a>
				</td>*/}

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
								處理中
							</a>
							<a className="dropdown-item" href="#">
								出貨中
							</a>
							<a className="dropdown-item" href="#">
								訂單完成
							</a>
						</div>
					</div>
				</td>

				<td>
					<Link
						to={`/backend/${
							this.props.data != null ? this.props.data.customerName : ""
						}/orderdetail`}
						className="my-button"
					>
						檢視
					</Link>
				</td>
			</tr>
		);
	}
}

export default BackOrderTable;
