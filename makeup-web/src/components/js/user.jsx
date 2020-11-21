import React, { Component } from "react";

class User extends Component {
	render() {
		return (
			<form>
				<label htmlFor="fname">帳號: </label>
				<input type="text" id="fname" name="fname" />
				<br />
				<br />

				<label htmlFor="username">姓名: </label>
				<input type="text" id="username" name="username" />
				<br />
				<br />

				<label htmlFor="phone">手機: </label>
				<input type="text" id="phone" name="phone" placeholder="0912345678" />
				<br />
				<br />

				<span>性別: </span>

				<input type="radio" id="male" name="gender" defaultValue="male" />
				<label htmlFor="male">男生</label>

				<input type="radio" id="female" name="gender" defaultValue="female" />
				<label htmlFor="female">女生</label>

				<input type="radio" id="other" name="gender" defaultValue="other" />
				<label htmlFor="other">其他</label>
				<br />
				<br />

				<label htmlFor="date">生日: </label>
				<input type="date" id="date" name="date" />
				<br />
				<br />

				<label htmlFor="email">E-mail: </label>
				<input type="text" id="email" name="email" placeholder="xxxxxx@gmail.com" />
				<br />
				<br />

				<input type="submit" name="submit" defaultValue="送出" />
			</form>
		);
	}
}

export default User;
