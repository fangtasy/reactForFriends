import React, {Component} from 'react'
import axios from 'axios'
import {Route} from 'react-router-dom'
import {getFriendInfo} from '../redux/infoReducer'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
import { Card, Avatar,Button,Icon } from 'antd';
import cookies from 'browser-cookies'
import './personInfo.css'

const { Meta } = Card;
class FriendInfo extends Component{
	constructor(props){
		super(props)
		this.state={id:this.props.match.params.number}
		this.props.getFriendInfo(this.state.id)
	}
	componentWillMount(){
		console.log('componentWillMount()')
	}
	componentDidMount(){
		if(this.state.id!==this.props.match.params.number){
			this.props.history.push('/friends/'+this.props.match.params.number)
		}
	}
	componentWillReceiveProps(){
		//this.setState({id:this.props.match.params.number})
	}

	componentWillUpdate(){
		
	}
	componentDidUpdate(){
		if(this.state.id!==this.props.match.params.number){

			this.setState({id:this.props.match.params.number})
			this.props.getFriendInfo(this.props.match.params.number)
		}
	}
	render(){
		if(!cookies.get('userid')) return <h2>请先登录</h2>
		
		return(
			<div style={{ background: '#ECECEC', margin: '30px' }}>
			<Card
    			//style={{ width: 300 }}
    			cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
    			actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
    			<Meta
      				title="好友主页"
    			/>
    			<div><label>id：</label>{this.props.match.params.number}</div>
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
const actionCreators={getFriendInfo}
FriendInfo = withRouter(connect(mapStatetoProps,actionCreators)(FriendInfo))
export default FriendInfo;
