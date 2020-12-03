import React, { Component } from "react";
import { Link } from "react-router-dom";

import IMGPath from "../imgPath"; //引入圖片

class BackProdTable extends Component {
	constructor(props) {
		super(props);

		this.imgPath = new IMGPath();

		this.p = require.context("../../images/product", false, /\.(png|jpe?g|svg)$/);
		//console.log(props.data);
	}

	render() {
		return (
			<tr>
				<th scope="row">{this.props.pID}</th>
				<td className="prodSmallIMG">
					<img
						src={
							this.imgPath.importAll(this.p)[this.props.data != null ? this.props.data.img_0 : ""]
						}
						alt=""
					/>
				</td>
				{/*<td>A0000001</td>*/}
				<td>{this.props.data != null ? this.props.data.kindB : ""}</td>
				<td>{this.props.data != null ? this.props.data.productName : ""}</td>
				<td>{this.props.data != null ? this.props.data.productColor : ""}</td>
				<td>{this.props.data != null ? this.props.data.unitPrice : ""}</td>
				<td>{this.props.data != null ? this.props.data.putDate : ""}</td>
				<td></td>
				<td>{this.props.data.productStatus != 0 ? "上架" : "下架"}</td>
				<td>
					<Link
						to={
							"/backend/prod/detail/" + (this.props.data != null ? this.props.data.product_id : 0)
						}
						className=" my-button mb-2"
					>
						詳情
					</Link>
					{/*<button name="prodCopyUpdate" type="submit" className=" my-button mb-2">
						複製
					</button>
					<button name="offShelf" type="submit" className=" my-button mb-2">
						下架
					</button>*/}
					{/*<a name="prodDtail" type="submit" className=" my-button mb-2">
            詳情
										</a>*/}
				</td>
			</tr>
		);
	}
}

export default BackProdTable;
