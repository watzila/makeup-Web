import React, { Component } from "react";

import Ajax from "./js/ajax";
import IMGPath from "./js/imgPath"; //引入圖片
import "./css/detail.css";

class Detail extends Component {
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

			myModal: {
				display: "none",
			},
		};

		this.ajax = new Ajax();
		this.imgPath = new IMGPath();
		this.ws = new WebSocket("ws://localhost:3002");

		this.ajax.startListener(
			"get",
			`/p/${props.match.params.kind}?${props.match.params.pid}`,
			this.u
		);

		this.cp = require.context("./images/product", false, /\.(png|jpe?g|svg)$/);
		//console.log(new MyImgs());
	}

	//ajax回傳資料再更新本地資料
	u = data => {
		data[0].total = data[0].unitPrice;
		this.setState({ data: data });
	};

	changeImg = i => {
		let mainPreview = document.querySelector(".mainPreview img");
		mainPreview.src = this.imgPath.importAll(this.cp)[this.state.data[0]["img_" + i]];
	};

	//簡介換行
	detailText = el => {
		let aa = document.getElementById(el);
		let text = this.state.data[0].detail;
		text = text.replaceAll("\n", "<br />");
		aa.innerHTML = text;
	};

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

	//加入購物車
	addCart = () => {
		// console.log(this.state.countText.text);

		if (sessionStorage.getItem("member")) {
			this.ajax.startListener("post", "/addCart", this.u, {
				c_id: JSON.parse(sessionStorage.getItem("member")).customer_id,
				// p_id: this.props.match.params.pid,
				p_id: this.state.data[0].product_id,
				qty: this.state.countText.text,
			});
		}
		this.setState({
			myModal: { display: "block" },
		});

		setTimeout(() => {
			this.setState({
				myModal: { display: "none" },
			});
		}, 800);
		this.ws.send(JSON.stringify({ who: "cartCheck" }));
	};

	componentWillUnmount() {
		this.ws.close();
	}

	getIMG = i => {
		return this.state.data[i].img_0;
	};

	render() {
		// console.log(this.props);
		return (
			<main>
				<div>
					<article className="itemBox">
						<div className="wrap1">
							<section className="infoBox">
								{/*star、標題、tag*/}
								<div className="title">
									{/*<ul className="star">
                  <li>★</li>
                  <li>★</li>
                  <li>★</li>
                  <li>★</li>
                  <li>★</li>
                </ul>*/}

									<h2>{this.state.data == null ? "" : this.state.data[0].productName}</h2>

									<h5>一吻定情系列-</h5>

									<ul className="tagChoose">
										<li># {this.state.data == null ? "" : this.state.data[0].productColor}</li>
										<li># {this.state.data == null ? "" : this.state.data[0].kindA}</li>
										<li># {this.state.data == null ? "" : this.state.data[0].kindB}</li>
									</ul>
								</div>

								{/*簡介*/}
								<div className="introduction" id="introduction">
									<p>{this.state.data == null ? "" : this.detailText("introduction")}</p>
								</div>

								{/*價格、數量*/}
								<div className="buyInfo">
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

								{/*加入購物車*/}
								<div className="addCart">
									<button onClick={this.addCart} id="addCartBTN">
										加入購物車
									</button>
								</div>
							</section>
						</div>

						<div className="wrap2">
							{/*預覽圖*/}
							<section className="previewBox">
								<div className="mainPreview">
									<img
										src={
											this.imgPath.importAll(this.cp)[
												this.state.data == null ? "" : this.state.data[0].img_0
											]
										}
										alt=""
										id="img"
									></img>
									{/*<canvas id="previewIMG"></canvas>*/}
								</div>

								{/*其他預覽圖*/}
								<div className="otherPreviews" id="otherPreviews">
									<ul>
										<li
											onClick={() => {
												this.changeImg(1);
											}}
										>
											<img
												src={
													this.imgPath.importAll(this.cp)[
														this.state.data == null ? "" : this.state.data[0].img_1
													]
												}
												alt="style1"
											/>
										</li>

										<li
											onClick={() => {
												this.changeImg(2);
											}}
										>
											<img
												src={
													this.imgPath.importAll(this.cp)[
														this.state.data == null ? "" : this.state.data[0].img_2
													]
												}
												alt="style2"
											/>
										</li>

										<li
											onClick={() => {
												this.changeImg(3);
											}}
										>
											<img
												src={
													this.imgPath.importAll(this.cp)[
														this.state.data == null ? "" : this.state.data[0].img_3
													]
												}
												alt="style3"
											/>
										</li>
									</ul>
								</div>
							</section>
						</div>
						{/* The Modal  */}
						<div id="myModal" style={this.state.myModal} className="modal">
							{/* Modal content  */}
							<div className="modal-content">
								<div
									className="modal-body"
									style={{
										weight: "100vw",
									}}
								>
									<p
										style={{
											fontSize: "40px",
											textAlign: "center",
										}}
									>
										<i className="fa fa-gift" aria-hidden="true"></i>
										已加入
									</p>
								</div>
							</div>
						</div>
					</article>

					{/*商品nav*/}
					{/*<nav className="itemNav">
            <ul>
              <li>評論</li>

              <li>商品介紹</li>*/}

					{/*<li className={this.state.love.classes} id="love" onClick={this.clickLove}>
              <span>{this.state.love.text}</span>
            </li>*/}
					{/*</ul>
          </nav>*/}

					{/*商品詳細介紹、評論*/}
					{/*<article className="itemTextBox">
            <div className="wrap1">*/}
					{/*評論*/}
					{/*<section className="commentBox">
                <div className="comment">
                  <h5>
                    <img src={head} alt="head" />
                    名子
                  </h5>*/}
					{/*星星*/}
					{/*<ul className="star">
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                  </ul>
                  <p>
                    每一歷史時代的經濟生產以及必然。這讓我的思緒清晰了。透過逆向歸納，得以用最佳的策略去分析甜美。
                  </p>
                  <ul className="otherInfo">
                    <li>NaNa</li>
                    <li>|</li>
                    <li>2020-10-26</li>
                    <li>|</li>
                    <li>顏色：about love</li>
                  </ul>
                </div>
              </section>
            </div>*/}

					{/*商品詳細介紹*/}
					{/*<section className="itemIntroduction">*/}
					{/* 適合膚質 */}
					{/*<div>
                適合膚質:
                {this.state.data == null ? '' : this.state.data[0].skinType}
              </div>

              <div>
                規格:
                {this.state.data == null
                  ? ''
                  : this.state.data[0].specification}
              </div>*/}

					{/* 商品描述 */}
					{/*<div id="prodDes">
                {this.state.data == null ? '' : this.state.data[0].detail}
              </div>
            </section>
          </article>*/}
				</div>
			</main>
		);
	}
}

export default Detail;
