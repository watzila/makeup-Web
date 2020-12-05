import React, { Component } from "react";
import "./css/about.css";

class About extends Component {
	constructor() {
		super();

		window.scrollTo(0, 0);
	}

	componentDidMount() {
		var acc = document.getElementsByClassName("accordion");
		for (let i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function () {
				var panel = this.nextElementSibling;
				if (panel.style.visibility === "visible") {
					panel.style.visibility = "hidden";
				} else {
					panel.style.visibility = "visible";
				}
			});
		}
	}

	render() {
		return (
			<main className="aboutMain">
				<div className="warp">
					{/*背景上方右邊兔子*/}
					<div className="pc1"></div>
					{/*背景上方左邊兔子*/}
					<div className="pc2"></div>
					{/*背景中間兔子*/}
					<div className="pc3"></div>
					{/*背景草*/}
					<div className="pc4"></div>
					{/*背景最下方兔子*/}
					<div className="pc5"></div>

					{/*背景最上方右邊雲*/}
					<div className="pc6"></div>
					{/*背景最上方左邊雲*/}
					<div className="pc8"></div>

					{/*大標題的字*/}
					<div className="banner">
						<p>
							將原生於森林、大地與海洋的優質天然
							<br />
							原料製成產品為您打造自然主義美妝品牌
						</p>
					</div>
					{/*產品介紹 1*/}
					<div className="pro_1">
						<div>
							<button className="accordion">我們承諾只做對肌膚好的產品</button>
							<div className="panel">
								<p>
									緩緩的產品皆為自主研發，於自有工廠進行生產，全程執行嚴格品質控管。我們沒有華麗的廣告，沒有明星的加持，沒有誇大的效果；相反的有著純淨的植物成份，新鮮的製作，充滿著對產品的熱情，幫助很多人在追求美麗的同時，擺脫了長期肌膚上的困擾。
								</p>
							</div>
						</div>

						<div>
							<button className="accordion">無動物實驗品牌</button>
							<div className="panel">
								<p>
									熱愛動物與大自然，是緩緩在追求美麗的同時堅持的理念，邀請您共同加入我們，成為世界潮流的一份子。為了照顧您的肌膚，緩緩堅持不添加致敏、爭議性成分。
								</p>
							</div>
						</div>
					</div>
					{/*產品介紹 2*/}
					<div className="pro_2">
						<div>
							<button className="accordion">台灣在地品牌 高品質原料</button>
							<div className="panel_2">
								<p>
									緩緩所有產品所有的原料、設計包裝都是百分之百台灣製造，全產品通過SGS檢驗，每一項彩妝都代表著獨特的文化創意。期待透過彩妝的過程，讓自然動人的妝感成為每個人生活中的一部分。
								</p>
							</div>
						</div>

						<div>
							<button className="accordion">打造您的故事 美麗擁有無限可能</button>
							<div className="panel_2">
								<p>
									緩緩精心製作的彩妝適用於各種膚色、膚質的細緻產品，秉持著無與倫比的服務品質，使每位女性發掘出光芒四射的力量，綻放屬於自己的迷人光采。
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}
}

export default About;
