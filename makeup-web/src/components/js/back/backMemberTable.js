import React, { Component } from "react";
import IMGPath from "../imgPath"; //引入圖片
import { Link } from "react-router-dom";

class BackProdTable extends Component {
  constructor() {
    super();

    this.imgPath = new IMGPath();
  }

  render() {
    return (
      <tr>
        <th scope="row">1</th>
        <td>{/*<img src="img/prod/A0000001.png" alt="" />*/}</td>
        {/*<td>A0000001</td>*/}
        <td>粉底｜BB霜｜蜜粉</td>
        <td>保濕礦物粉凝霜</td>
        <td>CHARMEUSE #N20</td>
        <td>960</td>
        <td>2020/11/11</td>
        <td>2020/11/12</td>
        <td>上架</td>
        <td>
          <Link to="/backend/prod/detail" className=" my-button mb-2">
            詳情
					</Link>
          <a name="prodCopyUpdate" type="submit" className=" my-button mb-2">
            複製
					</a>
          <a name="offShelf" type="submit" className=" my-button mb-2">
            下架
					</a>
          {/*<a name="prodDtail" type="submit" className=" my-button mb-2">
            詳情
										</a>*/}
        </td>
      </tr>
    );
  }
}

export default BackProdTable;
