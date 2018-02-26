import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import "./friends.css";
class Friends extends Component{
	constructor(props){
		super(props);
		this.state={
			friends:[]
		}
	}
	componentDidMount() {
    axios.get('/users')
      .then(res => {
      	this.setState({friends: res.data})
      	//console.log(this.state.friends);
      });
  	}

	render(){
		
		return(
			<ul className="dropdown-menu">
              {

              	this.state.friends.map(
              		(friends,id)=>{
              			
              			return(
              				<li key={id}><Link className="friend-list" to={`/friends/${friends.id}`}>{friends.name}</Link></li>
              			);
              		}
              	)
          	  }
			</ul>
		);
	}
}
export default Friends
