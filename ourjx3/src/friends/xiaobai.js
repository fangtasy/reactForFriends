import React, { Component } from 'react';
import { createStore } from 'redux';
import getInfo from '../data/getInfo.js';
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
class Layout extends Component{
	render(){
		return(
		  <div className="container">
			<div className="square-left">1</div>
			<div className="square-right">2</div>
			<div className="round">icon</div>
			<div className="square-left-bottom">3</div>
			<div className="square-right-bottom">4</div>
		  </div>
		);
	}
	
}
export default Xiaobai