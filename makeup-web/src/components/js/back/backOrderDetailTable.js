import React, { Component } from 'react';

class BackOrderDetailTable extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.pID}</th>
        <td>{this.props.data != null ? this.props.data.product_id : ''}</td>
        <td>{this.props.data != null ? this.props.data.productName : ''}</td>
        <td>{this.props.data != null ? this.props.data.quantity : ''}</td>
        <td>{this.props.data != null ? this.props.data.productColor : ''}</td>
        <td>{this.props.data != null ? this.props.data.unitPrice : ''}</td>
      </tr>
    );
  }
}

export default BackOrderDetailTable;
