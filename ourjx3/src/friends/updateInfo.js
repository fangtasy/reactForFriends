import React, {Component} from 'react'
import axios from 'axios'
import {updateInfo,getInfo} from '../redux/infoReducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';

class UpdateInfo extends Component{
	constructor(props){
		super(props)
		this.state={
			id:this.props.update.showReducer.id,
			nickname:this.props.update.showReducer.nickname,
			cname:this.props.update.showReducer.cname,
			menpai:this.props.update.showReducer.menpai,
			achievement:this.props.update.showReducer.achievement,
			zhuangfen:this.props.update.showReducer.zhuangfen,
			geqian:this.props.update.showReducer.geqian,
		}
		this.props.getInfo(this.props.match.params.id)
		this.handleClick=this.handleClick.bind(this)
	}
	componentDidMount(){
		this.props.getInfo(this.props.match.params.id)
	}
	handleChange(key,e){
		this.setState({[key]:e.target.value})
	}
	handleClick(e){
		e.preventDefault()
		console.log(this.state)
		this.props.updateInfo(this.state)
		this.props.history.push('/info/'+this.props.update.showReducer.id)
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
const mapStatetoProps=(state)=>{
	return {update:state}
}
const actionCreators={updateInfo,getInfo}
UpdateInfo=connect(mapStatetoProps,actionCreators)(UpdateInfo)
export default withRouter(UpdateInfo)