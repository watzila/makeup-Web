import React, { Component } from 'react';
import ManageOrderCard from './js/manageOrderCard';
import CreateCard from './js/createCard'; //創建商品卡
import Ajax from './js/ajax';
import IMGPath from './js/imgPath'; //引入圖片
import './css/manageOrder.css';
import { Link } from 'react-router-dom';

class ManageOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };

    this.imgPath = new IMGPath();
    this.ajax = new Ajax();
    this.createCard = new CreateCard();

    this.ajax.startListener('get', '/backEnd/manageorder', this.u);
  }

  u = (data) => {
    this.setState({ data: data });
    console.log(this.state.data);
    // console.log(this.state.data.length);
  };

  render() {
    return (
      <section>
        <div className="container-fluid ">
          <div className="row">
            {/* side側邊欄功能列  */}
            <div className="sideCol col-2 py-5 colorYellow d-flex flex-column align-items-center">
              {/* <div><img src="img/avater.jpg" alt=""/></div> */}
              <ul className="pt-3 nav flex-column">
                <li className="nav-item mb-2">
                  <h5>
                    <i
                      className="fa fa-caret-right mr-2"
                      aria-hidden="true"
                    ></i>
                    會員管理
                  </h5>
                </li>
                <li className="nav-item mb-2">
                  <div
                    data-toggle="collapse"
                    href="manageOrder.html"
                    role="button"
                    aria-expanded="false"
                  >
                    <h5>
                      <i
                        className="fa fa-caret-right mr-2"
                        aria-hidden="true"
                      ></i>
                      訂單管理
                    </h5>
                  </div>
                </li>
                <li className="nav-item mb-2">
                  <div
                    data-toggle="collapse"
                    href="#sideNavprod"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sideNavprod"
                  >
                    <h5>
                      <i
                        className="fa fa-caret-right mr-2"
                        aria-hidden="true"
                      ></i>
                      商品管理
                    </h5>
                  </div>
                  <div className="collapse ml-2 text-center" id="sideNavprod">
                    <a className="search" href="prodSearch.html">
                      搜尋
                    </a>
                    <br />
                    <a className="putNew" href="prodPutNew.html">
                      新增
                    </a>
                    <br />
                    <a className="putOn" href="prodPutOnList.html">
                      上架中
                    </a>
                    <br />
                    <a className="putDown" href="prodPutOnList.html">
                      已下架
                    </a>
                    <br />
                    <a className="riview" href="prodPutOnList.html">
                      審核中
                    </a>
                    <br />
                  </div>
                </li>
                <li className="nav-item mb-2">
                  <h5>
                    <i
                      className="fa fa-caret-right mr-2"
                      aria-hidden="true"
                    ></i>
                    庫存一覽
                  </h5>
                </li>

                <li className="nav-item mb-2">
                  <h5>
                    <i
                      className="fa fa-caret-right mr-2"
                      aria-hidden="true"
                    ></i>
                    折扣活動
                  </h5>
                </li>
                <li className="nav-item mb-2">
                  <h5>
                    <i
                      className="fa fa-caret-right mr-2"
                      aria-hidden="true"
                    ></i>
                    營運圖表
                  </h5>
                </li>
              </ul>
            </div>
            {/* manageOrder內容  */}
            <div className="col-10 d-flex">
              <div className="col-12 pt-3 justify-content-center ">
                <div>
                  <h2 className="text-center">訂單管理</h2>
                  <hr />
                </div>
                <div className="row mb-3">
                  <div className="col-12 mt-3">
                    <div className="mb-2">
                      <label htmlFor="orderDate">訂單成立時間：</label>
                      <input type="date" name="orderDate" id="orderDate" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="orderSearch">關鍵欄位搜尋：</label>
                      <input
                        type="search"
                        name="orderSearch"
                        id="orderSearch"
                      />
                      <button className="btn btn-info">搜尋</button>
                    </div>
                    <div className="d-flex">
                      <div className="mr-3">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">訂單編號</label>
                      </div>
                      <div className="mr-3">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">訂單日期</label>
                      </div>
                      <div className="mr-3">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">訂購人</label>
                      </div>
                      <div className="mr-3">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">數量</label>
                      </div>
                      <div className="mr-3">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">訂單金額</label>
                      </div>
                      <div className="mr-3">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">訂單明細</label>
                      </div>
                      <div className="mr-3">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">訂單狀態</label>
                      </div>
                      <div className="mr-3">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">訂單操作</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 border border-secondary p-1">
                    <div className="ml-3 my-2">
                      顯示
                      <select className="custom-select" id="inputGroupSelect">
                        <option defaultValue="1" selected>
                          10
                        </option>
                        <option defaultValue="2">20</option>
                        <option defaultValue="3">50</option>
                      </select>
                      <span>筆</span>
                    </div>
                    <table className="table text-center">
                      <thead className="thead-dark">
                        <tr>
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
                        {/* {this.state.data.map((item, index) => (
                          <ManageOrderCard key={item}></ManageOrderCard>
                        ))} */}
                        {this.state.data != null
                          ? this.createCard.create(
                              this.state.data.length,
                              ManageOrderCard,
                              this.state.data
                            )
                          : null}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ManageOrder;
