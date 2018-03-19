import React, {Component} from 'react'
import axios from 'axios'
import {updateInfo,getInfo} from '../redux/infoReducer'
import {connect} from 'react-redux'
import cookies from 'browser-cookies'
import {withRouter} from 'react-router-dom';
import {Button} from 'antd'
import '../component/register.css'
class UpdateInfo extends Component{
	constructor(props){
		super(props)
		this.state={
			id:cookies.get('userid'),
			nickname:this.props.update.showReducer.nickname,
			cname:this.props.update.showReducer.cname,
			menpai:this.props.update.showReducer.menpai,
			achievement:this.props.update.showReducer.achievement,
			zhuangfen:this.props.update.showReducer.zhuangfen,
			geqian:this.props.update.showReducer.geqian,
		}
		this.props.getInfo(cookies.get('userid'))
		this.handleClick=this.handleClick.bind(this)
	}

	handleChange(key,e){
		this.setState({[key]:e.target.value})
	}
	handleClick(e){
		e.preventDefault()
		console.log(this.state)
		this.props.updateInfo(this.state)
		this.props.history.push('/info/'+this.state.id)
	}
	render(){
		if(!cookies.get('userid')) return <h2>请先登录</h2>
		return(
			<div >
			<h2>更新信息</h2>
			<div className='input-group'>
				<div className='line'><label>昵称</label>
				<input onChange={(e)=>{this.handleChange("nickname",e)}} placeholder={this.props.update.showReducer.nickname}></input>
				</div>
				<div className='line'><label>角色名称</label>
				<input onChange={(e)=>{this.handleChange("cname",e)} } placeholder={this.props.update.showReducer.cname}></input>
				</div>
				<div className='line'><label>门派</label>
				<input onChange={(e)=>{this.handleChange("menpai",e)}} placeholder={this.props.update.showReducer.menpai}></input>
				</div>
				<div className='line'><label>成就点数</label>
				<input onChange={(e)=>{this.handleChange("achievement",e)}} placeholder={this.props.update.showReducer.achievement}></input>
				</div>
				<div className='line'><label>装分</label>
				<input onChange={(e)=>{this.handleChange("zhuangfen",e)}} placeholder={this.props.update.showReducer.zhuangfen}></input>
				</div>
				<div className='line'><label>个签</label>
				<input onChange={(e)=>{this.handleChange("geqian",e)}} placeholder={this.props.update.showReducer.geqian}></input>
				</div>
				
				<Button onClick={this.handleClick}>确认更新</Button>
			</div>
			</div>)
	}
}
const mapStatetoProps=(state)=>{
	return {update:state}
}
const actionCreators={updateInfo,getInfo}
UpdateInfo=connect(mapStatetoProps,actionCreators)(UpdateInfo)
export default withRouter(UpdateInfo)