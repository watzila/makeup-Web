import React, { Component } from "react";
import { Link } from "react-router-dom";
import Home from "../../components/home";

class ManageOrderCard extends Component {
	render() {
		return (
			<tr>
				<td scope="row">{this.props.data != null ? this.props.data.order_id : ""}</td>
				<td>{this.props.data != null ? this.props.data.orderDate : ""}</td>
				<td>{this.props.data != null ? this.props.data.customerName : ""}</td>
				<td>{this.props.data != null ? this.props.data.quantity : ""}</td>
				<td>{this.props.data != null ? this.props.data.grandTotal : ""}</td>
				<td>
					<Link to="/order" className="btn btn-primary btn-sm">
						檢視
					</Link>
				</td>
				<td>
					{/* <div className="dropdown">
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
          </div> */}
					<div>{this.props.data != null ? this.props.data.orderStatus : ""}</div>
				</td>
				<td>
					<button className="btn btn-success btn-sm">修改</button>
				</td>
			</tr>
		);
	}
}

export default ManageOrderCard;
