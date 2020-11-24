import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/header.css";
//import logo from "./images/logo_huan-huan_緩緩_logo_bl.png"

class Header extends Component {
	constructor() {
		super();
		this.prevScrollpos = window.pageYOffset;
	}

	componentDidMount() {
		this.headerMove();
	}

	// header特效
	headerMove = () => {
		window.onscroll = () => {
			var currentScrollPos = window.pageYOffset;
			if (this.prevScrollpos > currentScrollPos) {
				document.querySelector(".header").style.top = "0";
			} else {
				document.querySelector(".header").style.top = "-230px";
			}
			this.prevScrollpos = currentScrollPos;
		};
	};

	render() {
		return (
			<header className="header">
				{/*<div className="rightIcon">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>*/}
				<nav className="navbar">
					<div className="navBoxL">
						<Link to="/about">關於我們</Link>
						<Link to="">限時特價</Link>
						<Link to="/p">商品</Link>
						<Link to="/skinTest">活動</Link>
					</div>

					<div className="navBoxR">
						<Link to="/login" onClick={this.aa} className="fa fa-user-circle"></Link>
						<Link to="/cart" className="fa fa-shopping-cart"></Link>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
