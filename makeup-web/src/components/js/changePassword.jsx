import React, { Component } from "react";
import Ajax from "./ajax"; //和伺服連線
class ChangePassword extends Component {
	constructor() {
		super();
		this.state = {
			data: null
		};
		this.ajax = new Ajax();

		this.ajax.startListener(
			"post",
			`/changePassword/`,
			this.u,
			{ cId: JSON.parse(sessionStorage.getItem("member")).customer_id,
			 }
		);
		// console.log(this.u);
	}

	u = data => {
		this.setState({ data: data });
			console.log(data);
	};

	changePassword = (e)=>{
console.log(4)
		let passwordData = {
			cId: JSON.parse(sessionStorage.getItem("member")).customer_id,
			changePassword: document.querySelector( "#truePassword").value
		  }
		this.ajax.startListener("post", "/changePassword", this.u, passwordData);

	}


	render() {
		return (
			<div className="userForm">
				<div>
					<label htmlFor="password">現在的密碼：</label>
					<input type="password" id="password" name="password" />
				</div>

				<hr />

				<div>
					<label htmlFor="newpassword">新密碼：</label>
					<input type="password" id="newpassword" name="newpassword" />
				</div>

				<hr />

				<div>
					<label htmlFor="truePassword">確認密碼：</label>
					<input type="password" id="truePassword" name="truePassword" />
				</div>

				<hr />

				<button 
				onClick={this.changePassword}
				type="submit">儲存</button>
			</div>
		);
	}
}

export default ChangePassword;
