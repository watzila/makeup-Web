import React, { Component } from "react";

class User extends Component {
	constructor(){
		super();
		this.state = {
			data:null,
			userAccount : "William",
			userName : "威廉",
			userCellphone : "0912890345",
			userGender: "男",
			userEmail:"abcqqq@gmail.com",
			fnameDisabled :true,
			fnameIsShow:true,
			usernameIsShow:true,
			usernameDisabled:true,
			phoneIsShow:true,
			phoneDisabled:true,
			emailIsShow:true,
			emailDisabled:true
			
		}
	}


	handleClick = (e)=>{

		switch(e.target.id){
			case "fname":
				console.log(e.target.id);
				this.setState({fnameIsShow:(this.state.fnameIsShow==false)?true:false})
				this.setState({fnameDisabled:( this.state.fnameDisabled)?false:true});
				break;
			case "username":
				console.log(e.target.id)
				this.setState({usernameIsShow:(this.state.usernameIsShow==false)?true:false})
				this.setState({usernameDisabled:( this.state.usernameDisabled)?false:true});
				break;
			case "phone":
				console.log(e.target.id)
				this.setState({phoneIsShow:(this.state.phoneIsShow==false)?true:false})
				this.setState({phoneDisabled:( this.state.phoneDisabled)?false:true});
				break;
			case "email":
				console.log(e.target.id)
				this.setState({emailIsShow:(this.state.emailIsShow==false)?true:false})
				this.setState({emailDisabled:( this.state.emailDisabled)?false:true});
				break;
			default:
				break;
		}
		
	}

	changeFname= (e)=>{
		
		this.setState({userAccount:e.target.value});
		console.log(e);
	}


	changeUsername= (e)=>{
		this.setState({userName:e.target.value});
	}

	changePhone= (e)=>{
		this.setState({userCellphone:e.target.value});
	}
	changeEmail= (e)=>{
		this.setState({userEmail:e.target.value});
	}




	render() {
		return (
			<div className="userForm">
				<div>
					<label htmlFor="fname">帳號：</label>
					<input  style = {{border:this.state.fnameIsShow ?"0":"2px black solid"}}
							disabled={this.state.fnameDisabled} 
							value={this.state.userAccount}
							onChange = {this.changeFname}  
							type="text" id="fname" name="fname" autoComplete="off" />
				<button id="fname" onClick={this.handleClick} >編輯</button>
				</div>

				<hr />

				<div>
					<label htmlFor="username">姓名：</label>
					<input 
					 style = {{border:this.state.usernameIsShow ?"0":"2px black solid"}}
					 disabled={this.state.usernameDisabled} 
					 value={this.state.userName}
					 onChange = {this.changeUsername}
					 type="text" id="username" name="username" autoComplete="off" />
				<button id="username" onClick={this.handleClick} >編輯</button>
				</div>

				<hr />

				<div>
					<label htmlFor="phone">手機：</label>
					<input 
					style = {{border:this.state.phoneIsShow ?"0":"2px black solid"}}
					disabled={this.state.phoneDisabled} 
					value={this.state.userCellphone}
					onChange = {this.changePhone}
					type="text" id="phone" name="phone"  autoComplete="off" />
				<button id="phone" onClick={this.handleClick} >編輯</button>
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
					<input disabled type="date" name="date" />
				</div>

				<hr />

				<div>
					<label htmlFor="email">E-mail：</label>
					<input
						style = {{border:this.state.emailIsShow ?"0":"2px black solid"}}
						disabled={this.state.emailDisabled} 
						value={this.state.userEmail}
						onChange = {this.changeEmail}
						type="text" id="email" name="email" autoComplete="off"
					/>
				<button id="email" onClick={this.handleClick}>編輯</button>
				</div>
				<hr />

			</div>
		);
	}
}

export default User;
