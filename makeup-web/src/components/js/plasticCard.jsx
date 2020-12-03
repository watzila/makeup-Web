import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
// import '../css/cart.css';

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ marginTop: '16px' }}>
            <input
              className="creditNumber"
              type="tel"
              name="number"
              placeholder="信用卡號碼"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              className="creditName"
              type="tel"
              name="name"
              placeholder="持有人姓名"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </div>
          <div>
            <input
              className="expiryDate"
              type="tel"
              name="expiry"
              placeholder="到期日(月/年)"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              className="cvcNumber"
              type="tel"
              name="cvc"
              placeholder="CVC驗證碼"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </div>
        </form>
      </div>
    );
  }
}
