import React, { Component } from 'react';
// import IMGPath from "./js/imgPath"; //引入圖片
// import { Link } from "react-router-dom";

class MemberOrderList extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      data: null,
    };
    // this.imgPath = new IMGPath();
    // this.avater = require.context("./images/index", false, /\.(png|jpe?g|svg)$/);
  }

  render() {
    return (
      // {/* memberOrderList內容 */}
      <div className="col my-content">
        <form className="pt-3">
          <input type="hidden" name="#" defaultValue="memberSearchList" />
          <h2 className="pt-3 pb-3 text-center">
            <i className="fa fa-user-circle" />
            會員管理 / 訂單歷史記錄
          </h2>
          <hr />
          <div className="input-group mb-3 d-flex justify-content-center">
            <div className="mb-3 mx-3">
              <a name="lastPege" type="submit" className="gray-Link my-button">
                回上一頁
              </a>
            </div>
            <div className="mb-3 mx-3">
              <a name="lastPege" type="submit" className="gray-Link my-button">
                詳細搜尋
              </a>
            </div>
          </div>
          <div className="my-table p-3 mb-5">
            <div className="row">
              <div className="col-12 mt-3">
                <div className="d-flex">
                  <div className="mr-auto">
                    顯示
                    <select
                      className="custom-select"
                      id="inputGroupSelect"
                      defaultValue={1}
                      onChange={console.log('ok')}
                    >
                      <option value={1}>10</option>
                      <option value={2}>20</option>
                      <option value={3}>50</option>
                    </select>
                    <span>筆</span>
                    <span className="text-right">123</span>
                  </div>
                  <div className="mb-2 ml-auto form-row align-items-center">
                    <label
                      htmlFor="orderSearch"
                      className="col-auto d-inlin-block align-self-center"
                    >
                      快速搜尋會員名稱：
                    </label>
                    <input
                      className="form-control col form-control-sm"
                      type="search"
                      name="orderSearch"
                      id="orderSearch"
                    />
                    <a className="my-button col-auto ml-2">送出</a>
                  </div>
                </div>
                <div className="d-flex pt-3">
                  <p>檢視表格欄位：</p>
                  <div className="mr-3">
                    <input type="checkbox" />
                    <label htmlFor="">訂單id</label>
                  </div>
                  <div className="mr-3">
                    <input type="checkbox" />
                    <label htmlFor="">商品編號</label>
                  </div>
                  <div className="mr-3">
                    <input type="checkbox" />
                    <label htmlFor="">品名</label>
                  </div>
                  <div className="mr-3">
                    <input type="checkbox" />
                    <label htmlFor="">數量</label>
                  </div>
                  <div className="mr-3">
                    <input type="checkbox" />
                    <label>顏色</label>
                  </div>
                  <div className="mr-3">
                    <input type="checkbox" />
                    <label>單價</label>
                  </div>
                  <div className="mr-3">
                    <input type="checkbox" />
                    <label>狀態</label>
                  </div>
                  <div className="mr-3">
                    <input type="checkbox" />
                    <label>訂單完成日期時間</label>
                  </div>
                  <div className="mr-3">
                    <input type="checkbox" />
                    <label>訂單詳情</label>
                  </div>
                </div>
              </div>
            </div>
            <table className="table table-hover p-3">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">訂單id</th>
                  <th scope="col">商品編號</th>
                  <th scope="col">品名</th>
                  <th scope="col">數量</th>
                  <th scope="col">顏色</th>
                  <th scope="col">單價</th>
                  <th scope="col">狀態</th>
                  <th scope="col">訂單完成日期時間</th>
                  <th scope="col">訂單詳情</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>D001</td>
                  <td>A0000001</td>
                  <td>保濕礦物粉凝霜</td>
                  <td>1</td>
                  <td>CHARMEUSE #N20</td>
                  <td>960</td>
                  <td>完成</td>
                  <td>2020/11/18 12:39:00 PM</td>
                  <td>
                    <a name="memberDtail" type="submit" className="my-button">
                      檢視
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>D001</td>
                  <td>A0000002</td>
                  <td>第二種保濕礦物粉凝霜</td>
                  <td>1</td>
                  <td>CHARMEUSE #N20</td>
                  <td>960</td>
                  <td>完成</td>
                  <td>2020/11/19 12:39:00 PM</td>
                  <td>
                    <a name="memberDtail" type="submit" className="my-button">
                      檢視
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="page d-flex justify-content-center">
            <a href="/">&lt;</a>
            <a className="click" href="/">
              1
            </a>
            <a href="/">2</a>
            <a href="/">3</a>
            <a href="/">&gt;</a>
          </div>
        </form>
      </div>
    );
  }
}

export default MemberOrderList;
