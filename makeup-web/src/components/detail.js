import React, { Component } from "react";
//import { BrowserRouter, Route, Link } from "react-router-dom"
import CustomDrawing, { MyImgs } from "./js/customDrawing";
import Ajax from "./js/ajax";
import IMGPath from "./js/imgPath"; //引入圖片
import "./css/detail.css";
import head from "./images/人頭.png";

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
		};

		this.ajax = new Ajax();
		this.imgPath = new IMGPath();
		this.cpImgs = new MyImgs().pId;
		this.draw = null;

		this.ajax.startListener(
			"get",
			`/p/${props.match.params.kind}?${props.match.params.pid}`,
			this.u
		);

		this.cp = require.context("./images/customProduct", false, /\.(png|jpe?g|svg)$/);
		//console.log(new MyImgs());
	}

	//ajax回傳資料再更新本地資料
	u = data => {
		data[0].total = data[0].unitPrice;
		this.setState({ data: data });
		//console.log(data);
	};

	componentDidMount() {
		this.draw = new CustomDrawing(this.imgPath.importAll(this.cp), 2);
	}

	componentDidUpdate() {
		let str = document.getElementById("prodDes").innerHTML;
		document.getElementById("prodDes").innerHTML = str.replaceAll("#", "<br/>");
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

	//加入購物車
	addCart = () => {
		// console.log(this.state.countText.text);
		this.ajax.startListener("post", "/addCart", this.u, {
			c_id: JSON.parse(sessionStorage.getItem("member")).customer_id,
			// p_id: this.props.match.params.pid,
			p_id: this.state.data[0].product_id,
			qty: this.state.countText.text,
		});
	};

	//改變客製化圖
	changeCustom = () => {};

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
								<div className="introduction">
									<p>
										以輕甜的夏日少女為主題六色相互呼應創造柔和粉嫩妝效粉體細緻服貼好暈染輕鬆打造完美妝容。
									</p>
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
									{/*<img src={img} alt="" id="img"></img>*/}
									<canvas id="previewIMG"></canvas>
								</div>

								{/*其他預覽圖*/}
								<div className="otherPreviews" id="otherPreviews">
									<ul>
										<li
											onClick={() => {
												this.draw.init(this.imgPath.importAll(this.cp), 2, "style1");
											}}
										>
											<img
												src={this.imgPath.importAll(this.cp)[this.cpImgs[2].style1]}
												alt="style1"
											/>
										</li>

										<li
											onClick={() => {
												this.draw.init(this.imgPath.importAll(this.cp), 2, "style2");
											}}
										>
											<img
												src={this.imgPath.importAll(this.cp)[this.cpImgs[2].style2]}
												alt="style2"
											/>
										</li>

										<li
											onClick={() => {
												this.draw.init(this.imgPath.importAll(this.cp), 2, "style3");
											}}
										>
											<img
												src={this.imgPath.importAll(this.cp)[this.cpImgs[2].style3]}
												alt="style3"
											/>
										</li>
									</ul>
								</div>
							</section>
						</div>
					</article>

					{/*商品nav*/}
					<nav className="itemNav">
						<ul>
							<li>評論</li>

							<li>商品介紹</li>

							{/*<li className={this.state.love.classes} id="love" onClick={this.clickLove}>
              <span>{this.state.love.text}</span>
            </li>*/}
						</ul>
					</nav>

					{/*商品詳細介紹、評論*/}
					<article className="itemTextBox">
						<div className="wrap1">
							{/*評論*/}
							<section className="commentBox">
								<div className="comment">
									<h5>
										<img src={head} alt="head" />
										名子
									</h5>
									{/*星星*/}
									<ul className="star">
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
						</div>

						{/*商品詳細介紹*/}
						<section className="itemIntroduction">
							{/* 適合膚質 */}
							<div>
								適合膚質:
								{this.state.data == null ? "" : this.state.data[0].skinType}
							</div>

							<div>
								規格:
								{this.state.data == null ? "" : this.state.data[0].specification}
							</div>

							{/* 商品描述 */}
							<div id="prodDes">{this.state.data == null ? "" : this.state.data[0].detail}</div>
						</section>
					</article>
				</div>
			</main>
		);
	}
}

export default Detail;
