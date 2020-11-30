import React, { Component } from "react";
import Ajax from "./ajax"; //和伺服連線

class User extends Component {
	constructor() {
		super();
		this.state = {
			data: null,
			fnameDisabled: true,
			fnameIsShow: true,
			usernameIsShow: true,
			usernameDisabled: true,
			phoneIsShow: true,
			phoneDisabled: true,
			emailIsShow: true,
			emailDisabled: true,
		};
		this.ajax = new Ajax();

		this.ajax.startListener(
			"post",
			`/member/${JSON.parse(sessionStorage.getItem("member")).nickname}`,
			this.u,
			{ cId: JSON.parse(sessionStorage.getItem("member")).customer_id }
		);
		// console.log(this.u);
	}

	u = data => {
		this.setState({ data: data });
		// console.log(data);
	};

	handleClick = e => {
		switch (e.target.id) {
			case "fname":
				this.setState({ fnameIsShow: this.state.fnameIsShow === false ? true : false });
				this.setState({ fnameDisabled: this.state.fnameDisabled ? false : true });
				break;
			case "username":
				// console.log(e.target.id)
				this.setState({ usernameIsShow: this.state.usernameIsShow === false ? true : false });
				this.setState({ usernameDisabled: this.state.usernameDisabled ? false : true });
				break;
			case "phone":
				// console.log(e.target.id)
				this.setState({ phoneIsShow: this.state.phoneIsShow === false ? true : false });
				this.setState({ phoneDisabled: this.state.phoneDisabled ? false : true });
				break;
			case "email":
				this.setState({ emailIsShow: this.state.emailIsShow === false ? true : false });
				this.setState({ emailDisabled: this.state.emailDisabled ? false : true });
				break;
			default:
				break;
		}
	};

	changeFname = e => {
		this.setState({ userAccount: e.target.value });
		console.log(e);
	};

	changeUsername = e => {
		this.setState({ userName: e.target.value });
	};

	changePhone = e => {
		this.setState({ userCellphone: e.target.value });
	};
	changeEmail = e => {
		this.setState({ userEmail: e.target.value });
	};

	//更新 會員姓名 到資料庫
	onBlurUsername = e => {
		// 取消input邊框及disable
		var dis = document.getElementById(e.target.id);
		dis.disabled = "false";
		dis.style.border = 0;

		let userData = {
			cId: JSON.parse(sessionStorage.getItem("member")).customer_id,
			username: document.querySelector(".username").value,
		};
		this.ajax.startListener("post", "/userEdit", this.u, userData);
	};

	//更新 會員電話 到資料庫
	onBlurphone = e => {
		// 取消input邊框及disable
		var dis = document.getElementById(e.target.id);
		dis.disabled = "false";
		dis.style.border = 0;

		let phoneData = {
			cId: JSON.parse(sessionStorage.getItem("member")).customer_id,
			phone: document.querySelector(".phone").value,
		};
		this.ajax.startListener("post", "/phoneEdit", this.u, phoneData);
	};
	//更新 會員mail 到資料庫
	onBlurEmail = e => {
		// 取消input邊框及disable
		var dis = document.getElementById(e.target.id);
		dis.disabled = "false";
		dis.style.border = 0;

		let emailData = {
			cId: JSON.parse(sessionStorage.getItem("member")).customer_id,
			email: document.querySelector(".email").value,
		};
		this.ajax.startListener("post", "/emailEdit", this.u, emailData);
	};

	render() {
		return (
			<div className="userForm">
				<div>
					<label htmlFor="fname">帳號：</label>
					<input
						style={{ border: this.state.fnameIsShow ? "0" : "2px black solid" }}
						disabled={this.state.data == null ? "" : this.state.fnameDisabled}
						placeholder={this.state.data == null ? "" : this.state.data[0].account}
						onChange={this.changeFname}
						type="text"
						id="fname"
						name="fname"
						autoComplete="off"
					></input>
					{/* <button id="fname" onClick={this.handleClick} >編輯</button> */}
				</div>

				<hr />

				<div>
					<label htmlFor="username">姓名：</label>
					<input
						onBlur={this.onBlurUsername}
						style={{ border: this.state.usernameIsShow ? "0" : "1px black solid" }}
						disabled={this.state.usernameDisabled}
						placeholder={this.state.data == null ? "" : this.state.data[0].customerName}
						onChange={this.changeUsername}
						type="text"
						id="username"
						className="username"
						name="username"
						autoComplete="off"
					/>
					<button id="username" onClick={this.handleClick}>
						編輯
					</button>
				</div>

				<hr />

				<div>
					<label htmlFor="phone">手機：</label>
					<input
						onBlur={this.onBlurphone}
						style={{ border: this.state.phoneIsShow ? "0" : "2px black solid" }}
						disabled={this.state.phoneDisabled}
						placeholder={this.state.data == null ? "" : this.state.data[0].cellPhone}
						onChange={this.changePhone}
						type="text"
						id="phone"
						className="phone"
						name="phone"
						autoComplete="off"
					/>
					<button id="phone" onClick={this.handleClick}>
						編輯
					</button>
				</div>

				<hr />

				<div>
					<label>性別：</label>
					<span>
						<input
							placeholder={this.state.data == null ? "" : this.state.data[0].gender}
							readOnly
							name="gender"
							type="text"
							autoComplete="off"
						/>
						{/* <label htmlFor="male">男生</label> */}
						{/* <input 
						checked={this.state.data == null ? "": this.state.data[0].gender}
						readOnly type="radio" id="male" name="gender" defaultValue="male" />
						<label htmlFor="male">男生</label>

						<input checked={this.state.data == null ? "": this.state.data[0].gender}
						readOnly type="radio" id="female" name="gender" defaultValue="female" />
						<label htmlFor="female">女生</label> */}
					</span>
				</div>

				<hr />

				<div>
					<label htmlFor="date">生日：</label>
					<input
						disabled
						value={this.state.data == null ? "" : this.state.data[0].birth_date}
						name="date"
					/>
				</div>

				<hr />

				<div>
					<label htmlFor="email">E-mail：</label>
					<input
						onBlur={this.onBlurEmail}
						style={{ border: this.state.emailIsShow ? "0" : "2px black solid" }}
						disabled={this.state.emailDisabled}
						placeholder={this.state.data == null ? "" : this.state.data[0].email}
						onChange={this.changeEmail}
						type="text"
						id="email"
						className="email"
						name="email"
						autoComplete="off"
					/>
					<button id="email" onClick={this.handleClick}>
						編輯
					</button>
				</div>
				<hr />
			</div>
		);
	}
}

export default User;
