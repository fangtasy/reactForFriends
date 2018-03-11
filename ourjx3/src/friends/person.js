import React, {Component} from 'react'
import axios from 'axios'
import {Route} from 'react-router-dom'
import {getInfo} from '../redux/infoReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class PersonInfo extends Component{
	constructor(props){
		super(props)
		this.state={id:this.props.match.params.id}
		this.props.getInfo(this.props.match.params.id);
	}
	componentDidMount(){
		//this.setState({id:this.props.match.params.id})
	}
	render(){
		//this.props.getInfo(this.props.match.params.id);
		
		return(<div>
			<h2>个人主页</h2>
			<Link to={"/info/updateInfo/"+this.state.id} ><button>修改信息</button></Link>
			<div>头像</div>
			<div>
			{console.log(this.props.info.qiyu)}
				基本信息
				<label>昵称</label><div>{this.props.info.nickname}</div>
				<label>角色名</label><div>{this.props.info.cname}</div>
				<label>门派</label><div>{this.props.info.menpai}</div>
				<label>个性签名</label><div>{this.props.info.geqian}</div>
				<label>成就点数</label><div>{this.props.info.achievement}</div>
				<label>装分</label><div>{this.props.info.zhuangfen}</div>
			
			</div>
			<div>
				奇遇信息：{this.props.info.qiyu.map((qiyu,i)=>{
					return(<div key={i}>{qiyu}</div>)
				})
				}
			</div>
			<div>
				标签
				{this.props.info.tag.map((tag,i)=>{
					return (<div key={i}>{tag}</div>)})
				}
				<button>+</button>
			</div>

			</div>)
	}
}
const mapStatetoProps=state=>{
	return {info:state.showReducer}
}
const actionCreators={getInfo}
PersonInfo = connect(mapStatetoProps,actionCreators)(PersonInfo)
export default PersonInfo;
