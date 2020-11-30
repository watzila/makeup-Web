import React, { Component } from 'react';
import IMGPath from '../imgPath'; //引入圖片
import { Link } from 'react-router-dom';

class BackMemberTable extends Component {
  constructor() {
    super();

    this.imgPath = new IMGPath();
  }

  render() {
    // console.log(this.props.data);
    return (
      <tr>
        <th scope="row">{this.props.pID}</th>
        <td>{this.props.data != null ? this.props.data.customer_id : ''}</td>
        <td>{this.props.data != null ? this.props.data.account : ''}</td>
        <td>{this.props.data != null ? this.props.data.customerName : ''}</td>
        <td>{this.props.data != null ? this.props.data.cellPhone : ''}</td>
        <td>{this.props.data != null ? this.props.data.nickname : ''}</td>
        <td>{this.props.data != null ? this.props.data.gender : ''}</td>
        <td>{this.props.data != null ? this.props.data.birth_date : ''}</td>
        <td>
          <Link
            to={{
              pathname: `/backend/${
                this.props.data != null ? this.props.data.customerName : ''
              }/memberdetail`,
              state: {
                pId: this.props.data != null ? this.props.data.customer_id : '',
              },
            }}
            className="my-button"
          >
            檢視
          </Link>
        </td>
        <td>{this.props.data != null ? this.props.data.customerStatus : ''}</td>
      </tr>
    );
  }
}

export default BackMemberTable;
