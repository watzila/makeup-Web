import React, { Component } from 'react';
// import IMGPath from './js/imgPath'; //引入圖片
// import { Link } from 'react-router-dom';

class MemberDetail extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      data: null,
    };
    // this.imgPath = new IMGPath();
  }

  render() {
    return (
      // {/* index_memberDetail內容 */}
      <div className="col my-content">
        <div className="pt-3 ">
          <form className="p-3">
            <input type="hidden" name="#" defaultValue="memberDetail" />
            <h2 className="pt-3 pb-3 text-center">
              <i className="fa fa-user-circle" />
              會員管理 / 詳細會員資料
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
                  訂單歷史紀錄
                </a>
              </div>
              <div className="mb-3 mx-3">
                <a
                  name="lastPege"
                  type="submit"
                  className="gray-Link my-button"
                >
                  留言歷史紀錄
                </a>
              </div>
              <div className="mb-3 mx-3">
                <a
                  name="lastPege"
                  type="submit"
                  className="gray-Link my-button"
                >
                  會員收藏
                </a>
              </div>
              <div className="mb-3 mx-3">
                <a
                  name="lastPege"
                  type="submit"
                  className="gray-Link my-button"
                >
                  儲存
                </a>
              </div>
            </div>
            <div className="form-body p-3 mb-5">
              <div className="form-group row">
                <label htmlFor="customer_id" className="col-2 col-form-label">
                  會員id
                </label>
                <div className="col-4">
                  <input
                    id="customer_id"
                    name="customer_id"
                    placeholder="#001"
                    type="text"
                    aria-describedby="customer_idHelpBlock"
                    className="form-control"
                  />
                  <span
                    id="customer_idHelpBlock"
                    className="form-text text-muted"
                  >
                    會員id無法修改
                  </span>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email" className="col-2 col-form-label">
                  帳號
                </label>
                <div className="col-4">
                  <input
                    id="email"
                    name="email"
                    placeholder="gogogo@gmail.com"
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelpBlock"
                  />
                  <span id="emailHelpBlock" className="form-text text-muted">
                    會員帳號無法修改
                  </span>
                </div>
              </div>
              {/* 將名與姓字串串接後顯示 */}
              <div className="form-row">
                <label htmlFor="userName" className="col-2 col-form-label">
                  基本資料
                </label>
                <div className="col">
                  <label htmlFor="userName">
                    <span>姓名</span>
                  </label>
                  <input
                    id="userName"
                    name="userName"
                    placeholder="王小明"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col">
                  <label htmlFor="cellPhone">
                    <span>手機</span>
                  </label>
                  <input
                    id="cellPhone"
                    name="cellPhone"
                    placeholder="0912-345678"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col">
                  <label htmlFor="nickName">
                    <span>暱稱</span>
                  </label>
                  <input
                    id="nickName"
                    name="nickName"
                    placeholder="apple"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col">
                  <label htmlFor="birth">
                    <span>生日</span>
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-birthday-cake" />
                      </div>
                    </div>
                    <input
                      id="birth"
                      name="birth"
                      placeholder="2020/11/17"
                      type="date"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="form-row pb-3 pt-3">
                <label className="col-2">性別</label>
                <div className="col-10">
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      name="gender"
                      id="gender_0"
                      type="radio"
                      className="custom-control-input"
                      defaultValue="B"
                      defaultChecked="checked"
                    />
                    <label htmlFor="gender_0" className="custom-control-label">
                      男
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      name="gender"
                      id="gender_1"
                      type="radio"
                      className="custom-control-input"
                      defaultValue="G"
                    />
                    <label htmlFor="gender_1" className="custom-control-label">
                      女
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <label htmlFor="postCode" className="col-2 col-form-label">
                  詳細住址
                </label>
                <div className="col">
                  <label htmlFor="postCode">
                    <span className="postCode-subtitle">郵遞區號</span>
                  </label>
                  <input
                    id="postCode"
                    name="postCode"
                    placeholder={888}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col">
                  <label htmlFor="city">
                    <span className="postCode-city">縣市</span>
                  </label>
                  <input
                    id="city"
                    name="city"
                    placeholder="火星"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col">
                  <label htmlFor="district">
                    <span className="postCode-district">鄉鎮區</span>
                  </label>
                  <input
                    id="district"
                    name="district"
                    placeholder="火星"
                    type="text"
                    className="form-control"
                  />
                </div>
                {/* 為了整齊的分成四格而出現的隱藏欄位 */}
                <div className="col hide">
                  <input id="h" type="text" />
                </div>
              </div>
              <div className="form-row pt-3">
                <label htmlFor="address" className="col-2 col-form-label" />
                <div className="col-10">
                  <input
                    id="address"
                    name="address"
                    placeholder="火星"
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row pb-3 pt-3">
                <label className="col-2">會員狀態</label>
                <div className="col-10">
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      name="gender"
                      id="gender_0"
                      type="radio"
                      className="custom-control-input"
                      defaultValue="B"
                      defaultChecked="checked"
                    />
                    <label htmlFor="gender_0" className="custom-control-label">
                      正常
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      name="gender"
                      id="gender_1"
                      type="radio"
                      className="custom-control-input"
                      defaultValue="G"
                    />
                    <label htmlFor="gender_1" className="custom-control-label">
                      限制權限
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      name="gender"
                      id="gender_1"
                      type="radio"
                      className="custom-control-input"
                      defaultValue="G"
                    />
                    <label htmlFor="gender_1" className="custom-control-label">
                      永久停權
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* 會員收藏資料 */}
            <div className="my-table p-3 mb-5">
              <h5 className="pb-3">會員收藏</h5>
              <table className="table table-hover p-3 ">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">會員收藏id</th>
                    <th scope="col">商品編號</th>
                    <th scope="col">大分類項</th>
                    <th scope="col">小分類項</th>
                    <th scope="col">品名</th>
                    <th scope="col">功能</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>N0000001</td>
                    <td>C0000001</td>
                    <td>睫毛膏</td>
                    <td>睫毛膏</td>
                    <td>天然睫毛膏</td>
                    <td>
                      <a name="prodDtail" type="submit" className="my-button">
                        刪除
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>N0000002</td>
                    <td>C0000002</td>
                    <td>睫毛膏</td>
                    <td>睫毛膏</td>
                    <td>第2種天然睫毛膏</td>
                    <td>
                      <a name="prodDtail" type="submit" className="my-button">
                        刪除
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MemberDetail;
