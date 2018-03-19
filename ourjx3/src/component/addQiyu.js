import React, {Component} from 'react';
import axios from 'axios';
import {Button,AutoComplete,DatePicker} from 'antd'
import moment from 'moment';
const dateFormat = 'YYYY/MM/DD';
const dataQiyu=['一杠','跑跑','红绸','黑狗','白猫','黑猫','枫林','童心','圆圆','将军','酒海','星辰','扶摇',
'少年行','黑白路','生死判','繁花','苗疆','酒客','纯阳汪','苍云汪','金水汪','长安汪','七秀汪','唐门汪','丐帮汪','明教汪']
const dataName=['小白','墨水','骨头','阿秋','陌陌','桃子','洛洛']
class AddQiyu extends Component {
	constructor(props){
		super(props);
		this.state={
			qiyu:'',
			name:'',
			date:{}
		}
    this.onSubmit=this.onSubmit.bind(this);
	}

  	onChange (key,value) {
    	this.setState({[key]:value});
  	}
  	onSubmit(e){
  		e.preventDefault();

  		axios.post('/ouhuang', {qiyu:this.state.qiyu, name:this.state.name,date:this.state.date})
      .then((result) => {
      }).catch(function (error) {
        console.log(error);
      });
       this.props.addClicked()
  	}
	render(){
		return(
			<form >
      <div>奇遇：<AutoComplete
        style={{ width: 200 }}
        dataSource={dataQiyu} onChange={(v)=>this.onChange('qiyu',v)}></AutoComplete></div>
      <div>欧皇：<AutoComplete
        style={{ width: 200 }}
        dataSource={dataName} onChange={(v)=>this.onChange('name',v)}></AutoComplete></div>
      <div>
      日期：<DatePicker style={{ width: 200 }} defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} onChange={(v)=>this.onChange('date',v)} />
      </div>
      <Button  onClick={this.onSubmit}>提交</Button>
      </form>
		);
	}

}

export default AddQiyu;