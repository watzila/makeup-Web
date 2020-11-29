import React, { Component, useDebugValue } from "react";
import Ajax from "./ajax"; //和伺服連線
class ChangePassword extends Component {
	constructor() {
		super();
		this.state = {
			class1: "changePasswordOk",
			noActive:"noActive",
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
	}

	u = data => {
		this.setState({ data: data });
			// console.log(data[0].info);
	};
	

	changePassword = (e)=>{
		let newpassword = document.querySelector( "#newpassword").value;
		let truePassword = document.querySelector( "#truePassword").value
		// 新密碼與確認密碼驗證
		if(newpassword===truePassword){
			let passwordData = {
			cId: JSON.parse(sessionStorage.getItem("member")).customer_id,
			changePassword: document.querySelector( "#truePassword").value,
			password:document.querySelector("#password").value
		  }
			this.ajax.startListener("post", "/changePassword", this.u, passwordData);
			// 顯示密碼修改成功
			let changeOk = document.querySelector("#changeOk");
			changeOk.classList.add("changePassword");
			changeOk.classList.remove("noActive");

			document.querySelector(".userForm").classList.add("noActive");
			this.setState({})
		}else{
			let change = document.querySelector("#changeNo");
			change.classList.add("changePassword");
			change.classList.remove("noActive");
		}

	}


	render() {
		return (
			<div>
				<div className={this.state.noActive} id="changeOk">
					密碼修改完成
				</div>
				<div className={this.state.noActive} id="changeNo">
					兩次密碼輸入不一致
				</div>
			<div  className="userForm">
				
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
			</div>
		);
	}
}

export default ChangePassword;
