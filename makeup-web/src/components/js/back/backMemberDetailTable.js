import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BackMemberDetailTable extends Component {
  render() {
    // console.log(this.props);
    return (
      <tr>
        <th scope="row">{this.props.pID}</th>
        <td>{this.props.data != null ? this.props.data.product_id : ''}</td>
        <td>{this.props.data != null ? this.props.data.kindA : ''}</td>
        <td>{this.props.data != null ? this.props.data.kindB : ''}</td>
        <td>{this.props.data != null ? this.props.data.productName : ''}</td>
        <td>{this.props.data != null ? this.props.data.productColor : ''}</td>
        <td>
          {/* 還沒寫功能 */}
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
            刪除
          </Link>
        </td>
      </tr>
    );
  }
}

export default BackMemberDetailTable;
