import React, { Component } from 'react';
import IMGPath from '../imgPath'; //引入圖片
//import Side from "./js/side";

//import "bootstrap/dist/css/bootstrap.min.css";
//import { Link } from "react-router-dom";

class ProdSearchList extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      data: null,
    };
    this.imgPath = new IMGPath();
    // this.avater = require.context("./images/index", false, /\.(png|jpe?g|svg)$/);
  }

  render() {
    return (
      //{/* side側邊欄功能列 */}
      //{/*<Side />*/}
      //{/* prodSearchList內容 */}
      <div className="col my-content">
        <form>
          <input type="hidden" name="" defaultValue="prodSearchList" />
          <div className="pt-3 form-head">
            <div className="pt-3">
              <h2 className="pt-3 pb-3 text-center">
                <i className="fa fa-table" />
                商品管理 / 商品搜索結果
              </h2>
              <hr />
              <div className="input-group mb-3 d-flex justify-content-center">
                <div className="mb-3 mx-3">
                  <a
                    name="lastPege"
                    type="submit"
                    className="gray-Link my-button"
                  >
                    回上一頁
                  </a>
                </div>
                <div className="mb-3 mx-3">
                  <a
                    name="lastPege"
                    type="submit"
                    className="gray-Link my-button"
                  >
                    確認送出
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="my-table p-3 mb-5">
            <div className="row">
              <div className="col-12 mt-3">
                <div className="d-flex">
                  <div className="mr-auto">
                    顯示
                    <select
                      defaultValue={1}
                      onChange={console.log('ok')}
                      className="custom-select"
                      id="inputGroupSelect"
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
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">商品小圖</label>
                  </div>
                  <div className="mr-3">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">商品編號</label>
                  </div>
                  <div className="mr-3">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">小分類項</label>
                  </div>
                  <div className="mr-3">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">品名</label>
                  </div>
                  <div className="mr-3">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">顏色</label>
                  </div>
                  <div className="mr-3">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">單價</label>
                  </div>
                  <div className="mr-3">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">上架日期</label>
                  </div>
                  <div className="mr-3">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">修改日期</label>
                  </div>
                  <div className="mr-3">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">商品狀態</label>
                  </div>
                  <div className="mr-3">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">行動</label>
                  </div>
                </div>
              </div>
            </div>
            <table className="table table-hover p-3">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">商品小圖</th>
                  <th scope="col">商品編號</th>
                  <th scope="col">小分類項</th>
                  <th scope="col">品名</th>
                  <th scope="col">顏色</th>
                  <th scope="col">單價</th>
                  <th scope="col">上架日期</th>
                  <th scope="col">修改日期</th>
                  <th scope="col">商品狀態</th>
                  <th scope="col">行動</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{/*<img src="img/prod/A0000001.png" alt="" />*/}</td>
                  <td>A0000001</td>
                  <td>粉底｜BB霜｜蜜粉</td>
                  <td>保濕礦物粉凝霜</td>
                  <td>CHARMEUSE #N20</td>
                  <td>960</td>
                  <td>2020/11/11</td>
                  <td>2020/11/12</td>
                  <td>上架</td>
                  <td>
                    <a
                      name="prodSimpleUpdate"
                      type="submit"
                      className=" my-button mb-2"
                    >
                      修改
                    </a>
                    <a
                      name="prodCopyUpdate"
                      type="submit"
                      className=" my-button mb-2"
                    >
                      複製
                    </a>
                    <a
                      name="offShelf"
                      type="submit"
                      className=" my-button mb-2"
                    >
                      下架
                    </a>
                    <a
                      name="prodDtail"
                      type="submit"
                      className=" my-button mb-2"
                    >
                      詳情
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

export default ProdSearchList;
