import React, { Component } from "react";

import IMGPath from "./js/imgPath"; //引入圖片

import "./css/skinTest.css";
class SkinTest extends Component {
	constructor() {
		super();

		this.imgPath = new IMGPath();

		this.sk = require.context("./images/skinTest", false, /\.(png|jpe?g|svg)$/);

		window.scrollTo(0, 0);
	}

	openContent(evt, itemName) {
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		document.getElementById(itemName).style.display = "block";
		evt.currentTarget.className += " active";
	}

	render() {
		return (
			<main className="skinTestMain">
				<div className="container-fluid skin-page-title-container">
					<div className="container py-5 skin-page-title">
						<h1 className="m-auto ">臉蛋的心聲</h1>

						<span className="my-hr"></span>

						<h2 className="m-auto ">希望主人了解我</h2>
					</div>
				</div>

				<div className="container-fluid">
					<div className="container py-5 img-box">
						<div className="mr-5 img-box-item ">
							<img src={this.imgPath.importAll(this.sk)["角色圖_乾性肌.png"]} alt="乾性肌" />

							<div>
								<div className="img-box-item-title">
									<h3>乾性肌</h3>
								</div>

								<div className="img-box-item-text">
									<p>臉就像熱情的沙漠，乾乾的...</p>
								</div>
							</div>
						</div>

						<div className="mr-5 img-box-item ">
							<img src={this.imgPath.importAll(this.sk)["角色圖_混合肌.png"]} alt="混合肌" />

							<div>
								<div className="img-box-item-title">
									<h3>混合肌</h3>
								</div>

								<div className="img-box-item-text">
									<p>額頭油亮亮！</p>
								</div>
							</div>
						</div>

						<div className="mr-5 img-box-item ">
							<img src={this.imgPath.importAll(this.sk)["角色圖_油性肌.png"]} alt="油性肌" />

							<div>
								<div className="img-box-item-title">
									<h3>油性肌</h3>
								</div>

								<div className="img-box-item-text">
									<p>下廚房不帶油，就地取材！</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container-fluid skin-page-title-container">
					<div className="container p-5 skin-page-title">
						<h1 className="m-auto ">如何了解自己的膚質</h1>

						<span className="my-hr"></span>

						<h2 className="m-auto ">有辦法！</h2>
					</div>
				</div>

				<div className="container-fluid ">
					<div className="container py-5">
						<div className="tab">
							<div
								className="tablinks active"
								onClick={event => {
									this.openContent(event, "item-1");
								}}
							>
								吸油面紙檢測法
							</div>
							<div
								className="tablinks"
								onClick={event => {
									this.openContent(event, "item-2");
								}}
							>
								洗臉檢測法
							</div>
							<div
								className="tablinks"
								onClick={event => {
									this.openContent(event, "item-3");
								}}
							>
								觀察檢查法
							</div>
						</div>

						<div id="item-1" className="tabcontent" style={{ display: "block" }}>
							<div className="tabcontent-content">
								<div className="tabcontent-content-img">
									<img src={this.imgPath.importAll(this.sk)["吸油面紙檢測.png"]} alt="" />
								</div>

								<div className="tabcontent-content-text">
									<h3>吸油面紙檢測法</h3>
									<br />
									<p>吸油面紙分別擠壓</p>
									<p>1.T字部位</p>
									<p>2.臉頰</p>
									<p>3.下巴</p>
									<br />
									<p>油多=&gt;油性</p>
									<p>T字油=&gt;中性/混和性</p>
									<p>油少=&gt;乾性</p>
								</div>
							</div>
						</div>

						<div id="item-2" className="tabcontent" style={{ display: "none" }}>
							<div className="tabcontent-content">
								<div className="tabcontent-content-img">
									<img src={this.imgPath.importAll(this.sk)["洗臉檢測.png"]} alt="" />
								</div>

								<div className="tabcontent-content-text">
									<h3>洗臉檢測法</h3>
									<br />
									<p>洗臉順序</p>
									<p>1.溫和洗面乳</p>
									<p>2.擦乾，並且不擦上任何保養品</p>
									<p>3.靜待30分鐘後觀察</p>
									<br />
									<p>乾燥、緊緻=&gt;乾性</p>
									<p>T字部位微油=&gt;中性/混和性</p>
									<p>T字部位與臉頰油多=&gt;油性</p>
								</div>
							</div>
						</div>

						<div id="item-3" className="tabcontent" style={{ display: "none" }}>
							<div className="tabcontent-content">
								<div className="tabcontent-content-img">
									<img src={this.imgPath.importAll(this.sk)["觀察檢測.png"]} alt="" />
								</div>

								<div className="tabcontent-content-text">
									<h3>觀察檢查法</h3>
									<br />
									<p>洗臉順序</p>
									<p>1.溫和洗面乳</p>
									<p>2.擦乾，並且不擦上任何保養品</p>
									<p>3.中午時，觀察鏡中的臉</p>
									<br />
									<p>油膩感=&gt;油性</p>
									<p>微油=&gt;中性/混和性</p>
									<p>脫皮泛紅=&gt;乾性</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}
}

export default SkinTest;
