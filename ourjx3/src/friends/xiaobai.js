import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
class Xiaobai extends Component{
	constructor(props){
		super(props)
		this.state={id:this.props.match.params.number, info:[]}
		
	}
	componentDidMount(){
		axios.get('/info/'+this.state.id).then(
			res=>{this.setState({info:res.data})})
		console.log('xxx',this.state.info)
	}
	render(){
	return(<h2>{this.props.match.params.number}</h2>)
}
}

export default withRouter(Xiaobai)