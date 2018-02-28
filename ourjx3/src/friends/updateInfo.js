import React, {Component} from 'react'
import axios from 'axios'

export default class UpdateInfo extends Component{
	constructor(props){
		super(props)
		this.state{
			id: '',
		    nickname: '',
			cname: '',
			menpai: '',
			achievement: '',
			qiyu: [],
			zhuangfen: '',
			geqian: '',
		}
	}
	render(){
		return(
			<div>
			<h2>更新信息</h2>
			<form>
				<label>昵称</label>
				<input></input>
				<label>角色名称</label>
				<input></input>
				<label>门派</label>
				<input></input>
				<label>成就点数</label>
				<input></input>
				<label>奇遇</label>
				<input></input>
				<label>装分</label>
				<input></input>
				<label>个签</label>
				<input></input>
			</form>
			</div>)
	}
}

