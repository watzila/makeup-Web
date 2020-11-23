import React, { Component } from "react";
class ChangePassword extends Component {
	render() {
		return (
			<form>
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

				<button type="submit">儲存</button>
			</form>
		);
	}
}

export default ChangePassword;
