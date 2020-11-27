import React, { Component } from "react";
import Ajax from "./ajax";//和伺服連線
import moment from 'moment' //日期格式化

class User extends Component {
	constructor(){
		super();
		this.state = {
			data:null,
			fnameDisabled :true,
			fnameIsShow:true,
			usernameIsShow:true,
			usernameDisabled:true,
			phoneIsShow:true,
			phoneDisabled:true,
			emailIsShow:true,
			emailDisabled:true,
			
		}
		this.ajax = new Ajax();
		
		this.ajax.startListener("post", `/member/${JSON.parse(sessionStorage.getItem("member")).nickname}`, this.u, {nickname:JSON.parse(sessionStorage.getItem("member")).nickname});
		// console.log(this.u);
	}
	

	u = (data) => {
		this.setState({ data: data });
	// 	console.log(data);
	  }

	handleClick = (e)=>{

		switch(e.target.id){
			case "fname":
				this.setState({fnameIsShow:(this.state.fnameIsShow==false)?true:false})
				this.setState({fnameDisabled:( this.state.fnameDisabled)?false:true});
				break;
			case "username":
				// console.log(e.target.id)
				this.setState({usernameIsShow:(this.state.usernameIsShow==false)?true:false})
				this.setState({usernameDisabled:( this.state.usernameDisabled)?false:true});
				break;
			case "phone":
				// console.log(e.target.id)
				this.setState({phoneIsShow:(this.state.phoneIsShow==false)?true:false})
				this.setState({phoneDisabled:( this.state.phoneDisabled)?false:true});
				break;
			case "email":
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
	
	// 取消input邊框及disable
	noFocus=(e)=>{
		var dis = document.getElementById(e.target.id);
		dis.disabled = "false";
		dis.style.border = 0
		document.getElementById(e.target.id).disabled = dis.disabled;
		document.getElementById(e.target.id).style.border = dis.style.border;
		this.setState({});
	}




	render() {
		return (
			<div className="userForm">
				<div>
					<label htmlFor="fname">帳號：</label>
					<input  style = {{border:this.state.fnameIsShow ?"0":"2px black solid"}}
							disabled={this.state.data == null ? "" :this.state.fnameDisabled} 
							placeholder={this.state.data == null ? "" : this.state.data[0].account}
							onChange = {this.changeFname}  
							type="text" id="fname" name="fname" autoComplete="off" >
					</input>
				{/* <button id="fname" onClick={this.handleClick} >編輯</button> */}
				</div>

				<hr />

				<div>
					<label htmlFor="username">姓名：</label>
					<input 
					 onBlur = {this.noFocus}
					 style = {{border:this.state.usernameIsShow ?"0":"2px black solid"}}
					 disabled={this.state.usernameDisabled} 
					 placeholder={this.state.data == null ? "" : this.state.data[0].customerName}
					 onChange = {this.changeUsername}
					 type="text" id="username" name="username" autoComplete="off" />
				<button id="username" onClick={this.handleClick} >編輯</button>
				</div>

				<hr />

				<div>
					<label htmlFor="phone">手機：</label>
					<input 
					onBlur = {this.noFocus}
					style = {{border:this.state.phoneIsShow ?"0":"2px black solid"}}
					disabled={this.state.phoneDisabled} 
					placeholder={this.state.data == null ? "" : this.state.data[0].cellPhone}
					onChange = {this.changePhone}
					type="text" id="phone" name="phone"  autoComplete="off" />
				<button id="phone" onClick={this.handleClick} >編輯</button>
				</div>

				<hr />

				<div>
					<label>性別：</label>
					<span>
					<input 
						placeholder = {this.state.data == null ? "": this.state.data[0].gender}
						readOnly  name="gender" 
						type="text" autoComplete="off" />
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
					<input disabled value={moment(this.state.data == null ? "" : this.state.data[0].birth_date).format('YYYY-MM-DD')}
					 name="date" />
				</div>

				<hr/>

				<div>
					<label htmlFor="email">E-mail：</label>
					<input
						style = {{border:this.state.emailIsShow ?"0":"2px black solid"}}
						disabled={this.state.emailDisabled} 
						placeholder={this.state.data == null ? "" : this.state.data[0].email}
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
