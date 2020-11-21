import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/about.css'
import deco from "./images/deco.png"

class About extends Component {
  state = {}
  render() {
    return (
      <div>
        <div className="top">
          {/* <!--top 左邊 --> */}
          <div className="topLeft">
            <p> 我們的理念</p><br />
            <h1>
              輕熟女
            <span>快速</span><br />
            上手美妝品牌<br />
              <img src={deco} alt="deco" /><br />
            愛護地球<br />
              <img src={deco} alt="deco" /><br />
            無動物實驗 <br />
              <img src={deco} alt="deco" /><br />
            素食可食用<br />
            </h1>
          </div>
          {/* <!--top 左邊 end--> */}

          {/* <!--top 中間 --> */}
          <div className="topMiddle">
            <img src="https://www.922.org.tw/images/img-section.png" alt="" />
          </div>
          {/* <!-- top中間end --> */}

          {/* <!-- top右邊 --> */}
          <div className="topRight">
            {/* <!-- 小標 --> */}
            <div>
              現今<br />
            許多化妝品使用動物實驗<br />
            (如:胭脂蟲/兔子眼睛等等品)<br />
            本組提倡愛護動物，不採用動物實驗，<br />
              <br />
            </div>
            {/* <!-- 敘述 --> */}
            <div>
              產品外的包裝紙使用再生紙<br />
            瓶罐採用常見的環保塑膠成分像是PHBV; <br />
            為整個地球台灣盡一份心力，<br />
            支持台灣產業及支持公平交易<br />
            </div>
          </div>
          {/* <!-- top右邊 end--> */}
        </div>
        {/* <!-- 上面的外部div end--> */}

        {/* <!-- 滾動視差 --> */}
        <div className="parallax"></div>
        <img className="parallaxImg"
          src="https://shoplineimg.com/574f6e21e37ec6e05f000012/5f6f6264fb98290020c4a5ed/800x.webp?source_format=jpeg"
          alt="parallax" />
        <div className="parallax"></div>
        <img className="parallaxImg"
          src="https://shoplineimg.com/574f6e21e37ec6e05f000012/5f6d2137e29c9d0017537e74/800x.webp?source_format=jpg"
          alt="" />
        <div className="parallax"></div>
        {/* <!-- 滾動視差 end --> */}

        {/* <!-- 中間div --> */}
        <div className="middle">
          <div className="middleLeft">
            <img src="https://shoplineimg.com/574f6e21e37ec6e05f000012/5e7063db86b6964d14eb7a03/800x.webp?source_format=jpg"
              alt="" />
          </div>
          {/* <!-- 中間div 右邊 --> */}
          <div className="middleRight">
            {/* <!-- 小標 --> */}
            <div>彩妝品牌huan-huan緩緩，<br />
            專業研發出一系列高效能、高品質、令人無法抗拒的礦物彩妝，<br />
            達成您對自然無瑕美的追求。
          </div>
            {/* <!-- tab --> */}
            <section className="pointCard">
              <div className="pointCardHead">
                <h1>易上手美妝</h1>
                <span>喜愛者擁有最棒的、最適合自己的自然妝容，<br />
                因此我們研發出多種色調，供您自由搭配出自己最喜愛的妝容</span>
              </div>
            </section>
            <section className="pointCard">
              <div className="pointCardHead">
                <h1>環保材質</h1>
                <span>包裝紙使用:再生紙，且可以客製化雷射雕刻;<br />
                瓶罐使用PHBV材質:能被細菌分解，<br />
                在土壤內可分解為二氧化碳、水及生物質<br />
                </span>
              </div>
            </section>
            <section className="pointCard">
              <div className="pointCardHead">
                <h1>無動物性實驗</h1>
                <span>喜愛者擁有最棒的、最適合自己的自然妝容，<br />
                因此我們研發出多種色調，供您自由搭配出自己最喜愛的妝容</span>
              </div>
            </section>
            <section className="pointCard">
              <div className="pointCardHead">
                <span>喜愛者擁有最棒的、最適合自己的自然妝容，<br />
                因此我們研發出多種色調，供您自由搭配出自己最喜愛的妝容</span>
              </div>
            </section>
          </div>
          {/* <!-- 中間div 右邊 end --> */}
        </div>
      </div>);
  }
}

export default About;