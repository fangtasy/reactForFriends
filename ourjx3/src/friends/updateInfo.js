import React, {Component} from 'react'
import axios from 'axios'
import {updateInfo} from '../redux/infoReducer'
import {connect} from 'react-redux'

class UpdateInfo extends Component{
	constructor(props){
		super(props)
		this.state={
			id:'',
		    nickname:'',
			cname: '',
			menpai: '',
			achievement: '',
			zhuangfen: '',
			geqian: '',
		}
	}
	handleChange(key,e){
		this.setState({[key]:e.target.value})
	}
	handleClick(){
		this.props.updateInfo(this.state)
	}
	render(){
		return(
			<div>
			<h2>更新信息</h2>
			<form>
				<label>昵称</label>
				<input onChange={(e)=>{this.handleChange("nickname",e)}} placeholder={this.props.update.showReducer.nickname}></input>
				<label>角色名称</label>
				<input onChange={(e)=>{this.handleChange("cname",e)} } placeholder={this.props.update.showReducer.cname}></input>
				<label>门派</label>
				<input onChange={(e)=>{this.handleChange("menpai",e)}} placeholder={this.props.update.showReducer.menpai}></input>
				<label>成就点数</label>
				<input onChange={(e)=>{this.handleChange("achievement",e)}} placeholder={this.props.update.showReducer.achievement}></input>
				<label>装分</label>
				<input onChange={(e)=>{this.handleChange("zhuangfen",e)}} placeholder={this.props.update.showReducer.zhuangfen}></input>
				<label>个签</label>
				<input onChange={(e)=>{this.handleChange("geqian",e)}} placeholder={this.props.update.showReducer.geqian}></input>
				<button onClick={this.handleClick}>确认更新</button>
			</form>
			</div>)
	}
}
const mapStatetoProps=state=>{
	return {update:state}
}
const actionCreators={updateInfo}
UpdateInfo=connect(mapStatetoProps,actionCreators)(UpdateInfo)
export default  UpdateInfo