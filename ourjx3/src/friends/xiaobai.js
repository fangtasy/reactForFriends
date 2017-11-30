import React, { Component } from 'react';
class Xiaobai extends Component{
	constructor(props){
		super(props);
		this.state={
			friends:[]
		}
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
			<div>{this.props.match.params.number}
				<h2>这人大概是个黑鬼</h2>
			</div>
		);
	}
}
export default Xiaobai