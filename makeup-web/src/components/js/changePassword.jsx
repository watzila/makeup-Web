import React, { Component } from "react";

class ChangePassword extends Component {
	render() {
		return (
			<form>
				<span>現在的密碼: </span>
				<input type="password" id="password" name="password" />
				<br />
				<br />
				<label htmlFor="newpassword">新密碼: </label>

				<input type="password" id="newpassword" name="newpassword" />
				<br />
				<br />
				<label htmlFor="password">確認密碼: </label>

				<input type="password" id="truePassword" name="truePassword" />
				<br />
				<br />
				<input type="submit" name="submit" defaultValue="送出" />
			</form>
		);
	}
}

export default ChangePassword;
