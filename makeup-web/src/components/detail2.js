import React, { Component } from "react";

import IMGPath from "./js/imgPath"; //引入圖片
import Ajax from "./js/ajax";

import "./css/detail2.css";
import shoplogo from "./images/shoplogo.png";

class Detail2 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			countText: {
				text: 1,
				style: { "--upDown": 1 },
				classes: null,
				canChange: true,
			},

			data: null,

			prodIMG: {
				img1: "",
				img2: "",
				img3: "",
				img4: "",
				img5: "",
			},
		};

		this.imgPath = new IMGPath();
		this.ajax = new Ajax();

		this.p = require.context("./images/product", false, /\.(png|jpe?g|svg)$/);
		this.b = require.context("./images/banner", false, /\.(png|jpe?g|svg)$/);

		this.ajax.startListener(
			"get",
			`/p/${props.match.params.kind}?${props.match.params.pid}`,
			this.u
		);
	}

	//改數量
	changeCount = val => {
		if (this.state.countText.canChange) {
			if (this.state.countText.text === 1 && val === -1) {
				return;
			}

			let newData = this.state.data;
			let newCountText = this.state.countText;

			newCountText.style = { "--upDown": val };
			newCountText.classes = "count";
			newCountText.canChange = false;

			this.setState({ countText: newCountText });

			setTimeout(() => {
				newCountText.text += val;

				newData[0].total = newData[0].unitPrice * newCountText.text;

				this.setState({ countText: newCountText, data: newData });
			}, 250);

			setTimeout(() => {
				newCountText.classes = null;
				newCountText.canChange = true;

				this.setState({ countText: newCountText });
			}, 500);
		}
	};

	changeIMG = img => {
		let newProdIMG = this.state.prodIMG;

		[newProdIMG["img1"], newProdIMG[img]] = [newProdIMG[img], newProdIMG["img1"]];

		this.setState({ prodIMG: newProdIMG });
	};

	u = data => {
		data[0].total = data[0].unitPrice;

		let newProdIMG = this.state.prodIMG;
		newProdIMG.img1 = data[0].img_0;
		newProdIMG.img2 = data[0].img_1;
		newProdIMG.img3 = data[0].img_2;
		newProdIMG.img4 = data[0].img_3;
		newProdIMG.img5 = data[0].img_4;
		this.setState({ data: data, prodIMG: newProdIMG });
		console.log(data);
	};

	render() {
		return (
			<main className="detail2Main">
				<div className="warp">
					{/*<!-- 產品介紹外框-->*/}
					<div className="pro_1">
						<div className="pic_01">
							<img
								src={this.imgPath.importAll(this.p)[this.state.prodIMG.img1]}
								width="550px"
								alt=""
							/>
						</div>

						<div className="pic_02">
							<img
								src={this.imgPath.importAll(this.p)[this.state.prodIMG.img2]}
								width="110px"
								alt=""
								onMouseEnter={() => {
									this.changeIMG("img2");
								}}
							/>
							<img
								src={this.imgPath.importAll(this.p)[this.state.prodIMG.img3]}
								width="110px"
								alt=""
								onMouseEnter={() => {
									this.changeIMG("img3");
								}}
							/>
							<img
								src={this.imgPath.importAll(this.p)[this.state.prodIMG.img4]}
								width="110px"
								alt=""
								onMouseEnter={() => {
									this.changeIMG("img4");
								}}
							/>
						</div>

						<div className="pic_tex">
							<p>
								超商取貨滿$399免運
								<img src={shoplogo} width="150px" alt="" />
							</p>
						</div>
					</div>

					<div className="pro_2">
						<div className="pic_04">
							<strong>{this.state.data != null ? this.state.data[0].productName : ""}</strong>

							<h1>#超滿$399免運</h1>

							<strong>$280元</strong>

							<h3>
								色號
								<i className="fa fa-heart-o"></i>
							</h3>

							<div className="but_1">
								<button>001{this.state.data != null ? this.state.data[0].productColor : ""}</button>
								<button>002極光果紅</button>
								<button>003極光焦紅</button>

								<br />

								<button>004極光豆紅</button>
								<button>005極光美棕</button>
								<button>006極光蜜茶</button>
							</div>

							{/*價格、數量*/}
							<div className="buyInfo2">
								<div className="chooseCount">
									<button
										id="reduce"
										onClick={() => {
											this.changeCount(-1);
										}}
									>
										-
									</button>

									<div>
										<span
											className={this.state.countText.classes}
											style={this.state.countText.style}
										>
											{this.state.countText.text}
										</span>
									</div>

									<button
										id="add"
										onClick={() => {
											this.changeCount(1);
										}}
									>
										+
									</button>
								</div>

								<p className="price">
									$<span>{this.state.data == null ? "" : this.state.data[0].total}</span>元
								</p>
							</div>

							{/*<!-- 加入購物車 -->*/}
							<div className="but_2">
								{/*<button onclick="g()">立即結帳</button>*/}
								<button>加入購物車</button>
							</div>

							<div className="pro_3">
								<p>商品特色</p>
								<p>商品編號:</p>
								<p>A001</p>
								<p>產品特色:</p>
								{/*<p>。塗上雙唇即刻釋放鮮明水潤色澤</p>*/}
								<p>{this.state.data != null ? this.state.data[0].detail : ""}</p>
							</div>
						</div>
					</div>
				</div>

				<div className="warp_2">
					<h1>商品介紹</h1>

					<div className="pic_7">
						<img src={this.imgPath.importAll(this.b)[this.state.prodIMG.img5]} alt="" />
					</div>
				</div>
			</main>
		);
	}
}

export default Detail2;
