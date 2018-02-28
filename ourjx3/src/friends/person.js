import React, {Component} from 'react'
import axios from 'axios'
import {Route} from 'react-router-dom'

export default class PersonInfo extends Component{
	constructor(props){
		super(props)
		this.state={
			id: '',
		    nickname: '',
			cname: '',
			menpai: '',
			achievement: '',
			qiyu: [],
			zhuangfen: '',
			tag: [],
			geqian: '',
			posts: []
		}
	}
	render(){
		return(<div>
			<h2>个人主页</h2>
			<button>修改信息<button>
			<div>头像</div>
			<div>
				基本信息
			</div>
			<div>
				奇遇信息
			</div>
			<div>
				标签
			</div>

			</div>)
	}
}
