import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import {register} from '../redux/registerReducer'
import {connect} from 'react-redux'

class Register extends Component{
	constructor(props){
		super(props)
		this.state={
			id:'',
			pwd:'',
			repwd:'',
			groupid:'',
			//isAuth: false,
			//msg:'',
		}
		this.handleClick=this.handleClick.bind(this)
	}
	handleClick(e){
		e.preventDefault()
		this.props.register(this.state)
		if(this.props.registerStatus.regReducer.isAuth===true){
			this.props.history.push('/')
		}
		
	}
	handleChange(key,e){
		this.setState({
			[key]:e.target.value
		})
	}
	render(){
		return(
			<div>
			<form>
			  <div className="form-group">
				<label>用户名</label>
				<input onChange={(v)=>this.handleChange("id",v)}></input>
			  </div>
			  <div>
			  	<label>密码</label>
			  	<input onChange={(v)=>this.handleChange("pwd",v)}></input>
			  </div>
			  <div>
			  	<label>确认密码</label>
			  	<input onChange={(v)=>this.handleChange("repwd",v)}></input>
			  </div>
			  <div>
			  	<label>所在群号</label>
			  	<input onChange={(v)=>this.handleChange("groupid",v)}></input>
			  </div>
			  <button onClick={this.handleClick}>注册</button>
			</form>
			</div>

		)
	}
}
const mapStatetoProps=state=>{
	return {registerStatus:state}
}
const actionCreators={register}
Register=connect(mapStatetoProps,actionCreators)(Register)
export default withRouter(Register);
