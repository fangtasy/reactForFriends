import React, {Component} from 'react';
import axios from 'axios';
import {withRouter,Redirect} from 'react-router-dom'
import {register} from '../redux/registerReducer'
import {connect} from 'react-redux'
import {Form, Button,Input} from 'antd'
import './register.css'
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
		//this.props.history.push("/")
	}
	handleChange(key,e){
		this.setState({
			[key]:e.target.value
		})
	}
	render(){
		return(
			<div>
			{this.props.registerStatus.regReducer.isAuth?<Redirect to={'info/updateInfo/'+this.state.id} />:null}
			<div>{this.props.registerStatus.regReducer.msg}</div>
			<div className='input-group'>
			  	
				<div className='line'><label>用户名:</label><input onChange={(v)=>this.handleChange("id",v)}></input></div>
				
			  
			  	<div className='line'><label>密码:</label><input onChange={(v)=>this.handleChange("pwd",v)}></input></div>
			  	
			 
			  	<div className='line'><label>确认密码:</label><input onChange={(v)=>this.handleChange("repwd",v)}></input></div>
			  
			 
			  	<div className='line'><label>所在群号：</label><input onChange={(v)=>this.handleChange("groupid",v)}></input></div>
			  	
			  
			  <Button onClick={this.handleClick}>注册</Button>
			</div>
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
