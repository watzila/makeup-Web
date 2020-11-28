import React, { Component } from 'react';
// import IMGPath from "./js/imgPath"; //引入圖片
// import { Link } from "react-router-dom";

class MemberSearch extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      data: null,
    };
    // this.imgPath = new IMGPath();
  }

  render() {
    return (
      // {/* index_memberSearch內容 */}
      <div className="col my-content">
        <form className="p-3">
          <input type="hidden" name="#" defaultValue="memberSearch" />
          <div className="pt-3 form-head">
            <div className="pt-3">
              <h2 className="pt-3 pb-3 text-center">
                <i className="fa fa-user-circle" />
                會員管理 / 詳細搜尋頁
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
          <div className="form-body p-3 mb-5">
            <div className="form-group row ">
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
                  請完整輸入
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
                  placeholder="e-mail"
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelpBlock"
                />
                <span id="emailHelpBlock" className="form-text text-muted">
                  輸入email
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
            <div className="form-row pt-3">
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
              {/* 整齊的分成四格 */}
              <div className="col hide">
                <input id="h" type="text" />
              </div>
            </div>
            <div className="form-row pt-3 pb-3">
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
          </div>
        </form>
      </div>
    );
  }
}

export default MemberSearch;
