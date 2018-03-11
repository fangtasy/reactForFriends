import React, { Component } from 'react';
import { createStore } from 'redux';
import axios from 'axios';
import './personInfo.css';
//let store=createStore(getInfo);
//console.log(store.getState());
class Xiaobai extends Component{
	constructor(props){
		super(props);
		this.state={
			personInfo:{}
		}
	}
	componentDidMount() {
    axios.get('/info/'+this.props.match.params.number)
      .then(res => {
        this.setState({ personInfo: res.data });
        //console.log(this.state.personInfo);
      });
  }
	render(){

		if(this.props.match.params.number==597000606){
			return (
				<div>
				<h2>这人大概是个欧皇</h2>
				</div>
			);
		}
		return(
			<div className="container" >{this.props.match.params.number}
				<h2>这人大概是个黑鬼</h2>
				{/*<Layout />*/}
			</div>
		);
	}
}

export default Xiaobai