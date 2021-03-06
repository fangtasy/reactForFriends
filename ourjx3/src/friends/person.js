import React, {Component} from 'react'
import axios from 'axios'
import {Route} from 'react-router-dom'
import {getInfo} from '../redux/infoReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import cookies from 'browser-cookies'
import { Card, Avatar,Button,Icon } from 'antd';
import './personInfo.css'
const { Meta } = Card;
class PersonInfo extends Component{
	constructor(props){
		super(props)
		this.state={id:cookies.get('userid')}
		this.props.getInfo(this.state.id);
	}

	addQiyu(){

	}
	render(){
		if(!this.state.id) return <h2>请先登录</h2>
		return(
			<div style={{ background: '#ECECEC', margin: '30px' }}>
			<Card
    			//style={{ width: 300 }}
    			cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
    			actions={[<Link to={'/info/updateInfo/'+cookies.get('userid')}><Icon type="edit" /></Link>]}>
    			<Meta
      				title="个人主页"
    			/>
    			<div><label>昵称：</label>{this.props.info.nickname}</div>
				<div><label>角色名：</label>{this.props.info.cname}</div>
				<div><label>门派：</label>{this.props.info.menpai}</div>
				<div><label>个性签名：</label>{this.props.info.geqian}</div>
				<div><label>成就点数：</label>{this.props.info.achievement}</div>
				<div><label>装分：</label>{this.props.info.zhuangfen}</div>
				<div>
				奇遇信息：{this.props.info.qiyu.map((qiyu,i)=>{
					return(<div key={i}>{qiyu}</div>)
				})
				}
				<button onClick={this.addQiyu}>+</button>
			</div>
			<div>
				标签
				{this.props.info.tag.map((tag,i)=>{
					return (<div key={i}>{tag}</div>)})
				}
				<button onClick={this.addTag}>+</button>
			</div>
  			</Card>
  			</div>
			)
	}
}
const mapStatetoProps=state=>{
	return {info:state.showReducer}
}
const actionCreators={getInfo}
PersonInfo = connect(mapStatetoProps,actionCreators)(PersonInfo)
export default PersonInfo;
