import React, { Component } from 'react';
// import IMGPath from "./js/imgPath"; //引入圖片
import { Link } from 'react-router-dom';

import BackMemberTable from './backMemberTable.js';

import CreateCard from '../createCard';
import Ajax from '../ajax';
class MemberList extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      data: null, //當前頁數資料
      allData: null, //所有產品資料
    };
    // this.imgPath = new IMGPath();
    // this.avater = require.context("./images/index", false, /\.(png|jpe?g|svg)$/);

    this.createCard = new CreateCard();
    this.ajax = new Ajax();

    this.ajax.startListener('get', '/backend/memberlist', this.u);
  }

  // u = (data) => {
  //   this.setState({ data: data });
  //   // setTimeout(() => {
  //   //   this.init();
  //   // }, 100);
  //   console.log(data);
  //   // console.log(this.state.data.length);
  // };

  u = (data) => {
    let newData = [],
      i = 0;

    //所有產品資料資料拆分8個為一組
    do {
      let d = [];
      for (let j = 0; j < 8; j++) {
        if (data[j + i]) {
          d.push(data[j + i]);
        } else {
          break;
        }
      }
      newData.push(d);
      i += 8;
    } while (i < data.length);

    this.setState({
      data: newData[0],
      allData: newData,
    });

    // 頁數按鈕初始化
    document.querySelector(`.page a:nth-of-type(${2})`).className = 'click';

    // console.log(this.state.allData);
  };

  //換頁
  changePage = (page, which) => {
    console.log(page, which);
    if (page < 0 || page > this.state.allData.length - 1) return;
    this.setState({ data: this.state.allData[page] });

    for (let i = 0; i <= this.state.allData.length; i++) {
      let allA = document.querySelectorAll('.page a');
      allA[i].className = null;
    }
    document.getElementById(which).className = 'click';
  };

  //頁碼生成
  createPageNumber = () => {
    let pageNumber = this.state.allData.map((item, index) => {
      return (
        <Link
          to={'/backend/member/' + (index + 1)}
          key={index}
          id={'page_' + index}
          onClick={() => {
            this.changePage(index, 'page_' + index);
          }}
        >
          {index + 1}
        </Link>
      );
    });

    return pageNumber;
  };

  search = (k, v) => {
    let kind = document.getElementById(k).value;
    let value = document.getElementById(v).value;

    this.ajax.startListener('post', '/backend/searchmember', this.u, {
      kind: kind,
      value: value,
    });
    console.log(kind, value);
  };

  render() {
    return (
      // {/* MemberList內容 */}
      <div className="col my-content">
        <input type="hidden" name="#" defaultValue="MemberList" />
        <form className="pt-3">
          <h2 className="pt-3 pb-3 text-center">
            <i className="fa fa-user-circle" />
            會員管理
          </h2>
          <hr />
          {/*<div className="input-group mb-3 d-flex justify-content-center">
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
					</div>*/}
        </form>
        <div className="my-table p-3 mb-5">
          <div className="row">
            <div className="col-12 mt-3">
              <div className="d-flex">
                {/*<div className="mr-auto">
                  顯示
                  <select
                    defaultValue={1}
                    onChange={console.log()}
                    className="custom-select"
                    id="inputGroupSelect"
                  >
                    <option value={1}>10</option>
                    <option value={2}>20</option>
                    <option value={3}>50</option>
                  </select>
                  <span>筆</span>
                  <span className="text-right">123</span>
                </div>*/}

                <div className="mb-2 ml-auto form-row align-items-center">
                  <select
                    defaultValue={'customer_id'}
                    onChange={(event) => {
                      return event.target.value;
                    }}
                    id="kindSelect"
                  >
                    <option value={'customer_id'}>會員ID</option>
                    <option value={'account'}>會員帳號</option>
                    <option value={'customerName'}>姓名</option>
                    <option value={'cellPhone'}>手機</option>
                    <option value={'nickname'}>暱稱</option>
                    <option value={'gender'}>性別</option>
                    <option value={'birth_date'}>生日</option>
                    <option value={'customerStatus'}>會員狀態</option>
                  </select>

                  <label
                    htmlFor="memberSearch"
                    className="col-auto d-inlin-block align-self-center"
                  >
                    搜尋名稱：
                  </label>
                  <input
                    className="form-control col form-control-sm"
                    type="search"
                    name="orderSearch"
                    id="memberSearch"
                    onChange={(event) => {
                      return event.target.value;
                    }}
                  />

                  <button
                    className="my-button col-auto ml-2"
                    onClick={() => {
                      this.search('kindSelect', 'memberSearch');
                    }}
                  >
                    送出
                  </button>
                </div>
              </div>

              {/*<div className="d-flex pt-3">
								<p>檢視表格欄位：</p>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="">會員id</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="">會員帳號</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="">姓名</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="">手機</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="">暱稱</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="">性別</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="">生日</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="">會員詳情</label>
								</div>
								<div className="mr-3">
									<input type="checkbox" name="#" id="#" />
									<label htmlFor="">會員狀態</label>
								</div>
							</div>*/}
            </div>
          </div>

          {/*表格*/}
          <table className="table table-hover p-3">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">會員id</th>
                <th scope="col">會員帳號</th>
                <th scope="col">姓名</th>
                <th scope="col">手機</th>
                <th scope="col">暱稱</th>
                <th scope="col">性別</th>
                <th scope="col">生日</th>
                <th scope="col">會員詳情</th>
                <th scope="col">會員狀態</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data != null
                ? this.createCard.create(
                    this.state.data.length,
                    BackMemberTable,
                    this.state.data
                  )
                : null}
              {/* <tr>
                <th scope="row">1</th>
                <td>#001</td>
                <td>gogogo</td>
                <td>王小明</td>
                <td>0912-345678</td>
                <td>apple</td>
                <td>男</td>
                <td>2020/11/17</td>
                <td>
                  <a
                    name="prodDtail"
                    type="submit"
                    className="gray-Link my-button"
                  >
                    檢視
                  </a>
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
                        正常
                      </a>
                      <a className="dropdown-item" href="#">
                        限制權限
                      </a>
                      <a className="dropdown-item" href="#">
                        永久停權
                      </a>
                    </div>
                  </div>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
        {/*頁碼*/}
        <div className="page d-flex justify-content-center">
          <Link
            to={
              '/backend/member/' +
              (this.props.match.params.page > 1
                ? this.props.match.params.page * 1 - 1
                : 1)
            }
            onClick={() => {
              this.changePage(
                this.props.match.params.page * 1 - 2,
                'page_' + (this.props.match.params.page * 1 - 2)
              );
            }}
          >
            &lt;
          </Link>

          {this.state.allData != null ? this.createPageNumber() : null}

          <Link
            to={
              '/backend/member/' +
              (this.props.match.params.page <
              (this.state.allData != null ? this.state.allData.length : null)
                ? this.props.match.params.page * 1 + 1
                : this.state.allData != null
                ? this.state.allData.length
                : null)
            }
            onClick={() => {
              this.changePage(
                this.props.match.params.page,
                'page_' + this.props.match.params.page
              );
            }}
          >
            &gt;
          </Link>
        </div>
      </div>
    );
  }
}

export default MemberList;
