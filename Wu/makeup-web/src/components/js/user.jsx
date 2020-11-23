import React, { Component } from "react";

class User extends Component {
	render() {
		return (
			<form>
				<div>
					<label htmlFor="fname">帳號：</label>
					<input type="text" id="fname" name="fname" autoComplete="off" />
				</div>

				<hr />

				<div>
					<label htmlFor="username">姓名：</label>
					<input type="text" id="username" name="username" autoComplete="off" />
				</div>

				<hr />

				<div>
					<label htmlFor="phone">手機：</label>
					<input type="text" id="phone" name="phone" placeholder="0912345678" autoComplete="off" />
				</div>

				<hr />

				<div>
					<label>性別：</label>
					<span>
						<input type="radio" id="male" name="gender" defaultValue="male" />
						<label htmlFor="male">男生</label>

						<input type="radio" id="female" name="gender" defaultValue="female" />
						<label htmlFor="female">女生</label>
					</span>
				</div>

				<hr />

				<div>
					<label htmlFor="date">生日：</label>
					<input type="date" id="date" name="date" />
				</div>

				<hr />

				<div>
					<label htmlFor="email">E-mail：</label>
					<input
						type="text"
						id="email"
						name="email"
						placeholder="xxxxxx@gmail.com"
						autoComplete="off"
					/>
				</div>

				<hr />

				<button type="submit">儲存</button>
			</form>
		);
	}
}

export default User;
