import React, { Component } from 'react';
// import IMGPath from "./js/imgPath"; //引入圖片
// import { Link } from "react-router-dom";

class OrderSearchList extends Component {
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
      // {/* manageOrder內容 */}
      <div className="col my-content">
        <input type="hidden" name="#" defaultValue="orderSearchList" />
        <div className="pt-3 form-head">
          <div className="pt-3">
            <h2 className="pt-3 pb-3 text-center">
              <i className="fa fa-table" />
              訂單管理
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
                  <input type="checkbox" name="#" id="#" />
                  <label htmlFor="#">訂單編號</label>
                </div>
                <div className="mr-3">
                  <input type="checkbox" name="#" id="#" />
                  <label htmlFor="#">訂單日期</label>
                </div>
                <div className="mr-3">
                  <input type="checkbox" name="#" id="#" />
                  <label htmlFor="#">訂購人</label>
                </div>
                <div className="mr-3">
                  <input type="checkbox" name="#" id="#" />
                  <label htmlFor="#">訂單金額</label>
                </div>
                <div className="mr-3">
                  <input type="checkbox" name="#" id="#" />
                  <label htmlFor="#">訂單明細</label>
                </div>
                <div className="mr-3">
                  <input type="checkbox" name="#" id="#" />
                  <label htmlFor="#">訂單狀態</label>
                </div>
                <div className="mr-3">
                  <input type="checkbox" name="#" id="#" />
                  <label htmlFor="#">訂單操作</label>
                </div>
              </div>
            </div>
          </div>
          <table className="table table-hover p-3">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">訂單編號</th>
                <th scope="col">訂單日期</th>
                <th scope="col">訂購人</th>
                <th scope="col">數量</th>
                <th scope="col">訂單金額</th>
                <th scope="col">訂單明細</th>
                <th scope="col">訂單狀態</th>
                <th scope="col">訂單操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>2020001</td>
                <td>20201108</td>
                <td>金城武</td>
                <td>3</td>
                <td>5600</td>
                <td>
                  <a className="my-button">檢視</a>
                </td>
                <td>
                  <div className="dropdown">
                    <button
                      className="btn btn-light btn-sm dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      請選擇
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        處理中
                      </a>
                      <a className="dropdown-item" href="#">
                        出貨中
                      </a>
                      <a className="dropdown-item" href="#">
                        訂單完成
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                  <a className="my-button">修改</a>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>2020001</td>
                <td>20201108</td>
                <td>金城武</td>
                <td>3</td>
                <td>5600</td>
                <td>
                  <a className="my-button">檢視</a>
                </td>
                <td>
                  <div className="dropdown">
                    <button
                      className="btn btn-light btn-sm dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      請選擇
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        處理中
                      </a>
                      <a className="dropdown-item" href="#">
                        出貨中
                      </a>
                      <a className="dropdown-item" href="#">
                        訂單完成
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                  <a className="my-button">修改</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default OrderSearchList;
