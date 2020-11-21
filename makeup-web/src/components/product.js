import React, { Component } from "react";
import Card from "./js/card";
import CreateCard from "./js/createCard";  //創建商品卡
import Ajax from "./js/ajax";
import "./css/product.css";
import bannerIMG1 from "./images/product/banner1.jpg";
import productBG2 from "./images/product/productBG2.png";
import { Link } from "react-router-dom";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    }

    this.ajax = new Ajax();
    this.ajax.startListener("get", "/p/", this.u);
    this.createCard = new CreateCard();
  }

  u = (data) => {
    this.setState({ data: data });
    console.log(this.state.data);
  }

  render() {
    return (
      <main className="productMain">
        <div className="productBanner">
          <img src={bannerIMG1} alt="banner" />
        </div>

        <div className="w productPage">
          <img src={productBG2} alt="bg" />

          <div className="hotItems">
            <div className="title">
              <span></span>
              <h3>暢銷商品</h3>
              <span></span>
            </div>

            <div className="grid" style={{ "--i": 4 }}>
              {this.createCard.create(4, Card, this.state.data)}
            </div>
          </div>

          <nav className="kindNav">
            <ul>
              <li className="click">眼線</li>
              <li>眼影</li>
              <li>眼眉</li>
              <li>睫毛</li>
            </ul>
          </nav>

          <div className="grid" style={{ "--i": 4 }}>
            {this.createCard.create(8, Card, this.state.data)}
          </div>

          <div className="page">
            <Link to="">&lt;</Link>
            <Link to="" className="click">1</Link>
            <Link to="">2</Link>
            <Link to="">3</Link>
            <Link to="">&gt;</Link>
          </div>
        </div>
      </main >
    );
  }
}

export default Product;