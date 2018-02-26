import React, {Component} from 'react';
import axios from 'axios';

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

  	onChange = (e) => {
    	const state = this.state
    	state[e.target.name] = e.target.value;
    	this.setState(state);
    	//console.log(this.state);
  	}
  	onSubmit(e){
  		//e.preventDefault();
  		axios.post('/ouhuang', {qiyu:this.state.qiyu, name:this.state.name,date:this.state.date})
      .then((result) => {
      	//console.log(result);
        this.props.history.push("/red");

      }).catch(function (error) {
        console.log(error);
      });
  	}
	render(){
		return(
			<form onSubmit={this.onSubmit}>奇遇：<input type="text" name="qiyu" onChange={this.onChange}></input>
      欧皇：<input type="text" name="name" onChange={this.onChange}></input>
      日期：<input id="myDate" type="Date" name="date" onChange={this.onChange}></input>
      <input type="submit" value="提交" onClick={this.props.onAddClick}></input>
      </form>
		);
	}

}

export default AddQiyu;