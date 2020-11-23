import React, { Component } from 'react';
import './css/skinTest.css'
import skinTestImg61 from './images/skinTest/600-1.png'
import skinTestImg62 from './images/skinTest/600-2.png'
import skinTestImg63 from './images/skinTest/600-3.png'
import skinTestImg91 from './images/skinTest/900-1.png'
import skinTestImg92 from './images/skinTest/900-2.png'
import skinTestImg93 from './images/skinTest/900-2.png'
class SkinTest extends Component {
  state = {}
  render() {
    return (
      <div>
        <div className="top">
          <h1>臉蛋的心聲</h1>
          <h1>希望主人了解我</h1>
          <img src={skinTestImg61} alt="skinTest" />
          <img src={skinTestImg62} alt="skinTest" />
          <img src={skinTestImg63} alt="skinTest" />
        </div>

        <div className="middle">
          <div className="circle">
            <h1>
              如何了解自己的膚質
                        </h1>
          </div>
        </div>

        <div className="tabsbox" id="tab">
          {/* <!-- tab標籤 --> */}
          <nav className="firstNav">
            <ul>
              <li className="liActive"><h4>吸油面紙檢測法</h4></li>
              <li ><h4>洗臉檢測法</h4></li>
              <li ><h4>觀察檢測法</h4></li>
            </ul>
          </nav>

          {/* <!-- tab內容 --> */}
          <div className="tabCtxt">
            <section className="ctxtActive">
              <div>
                <img src={skinTestImg91} alt="skinTest" />
              </div>
              <div >
                <h3>吸油面紙檢測法</h3>
                <span> <br />
                                吸油面紙分別按壓<br />
                                1.T字部位<br />
                                2.臉頰<br />
                                3.下巴<br />
                  <br />
                                油多 = 油性<br />
                                T字油 = 中性 / 混合性 <br />
                                油少 = 乾性
                            </span>
              </div>
            </section>
            <section >
              <div>
                <img src={skinTestImg93} alt="skinTest" />
              </div>
              <div>
                <h3>洗臉檢測法</h3>
                <br />
                <span>
                  1.溫和洗面乳<br />
                                2.擦乾，請，請<br />
                                3.靜待30分鐘後觀察<br />
                  <br />
                                乾燥、緊緻 = 乾性<br />
                                T字部位微油 = 中性 / 混合性 <br />
                                T字部位與臉頰油多 = 油性
                            </span>
              </div>
            </section>
            <section >
              <div>
                <img src={skinTestImg92} alt="skinTest" />
              </div>
              <div>
                <h3>觀察檢測法</h3>
                <br />
                <span>1.早上，，用溫和洗面乳<br />
                                2.擦乾，且不上任何保養品<br />
                                3.中午，觀察鏡中的臉<br />
                  <br />
                                油膩感 = 油性<br />
                                微油 = 中性 / 混合性 <br />
                                脫皮泛紅 = 乾性
                            </span>
              </div>

            </section>

          </div>
        </div>
      </div>);
  }
}

export default SkinTest;