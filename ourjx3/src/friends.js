import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./friends.css";
class Friends extends Component{
	constructor(props){
		super(props);
		this.state={
			friends:[
				{name:'洛洛', id:'583326401'},
				{name:'墨水', id:'102093384'},
				{name:'万万', id:'295755529'},
				{name:'骨头', id:'656927519'},
				{name:'秋秋', id:'8063568336'},
				{name:'二叔', id:'307253625'},
				{name:'陌陌', id:'1242071123'},
				{name:'二丁', id:'448105612'},
				{name:'小白', id:'597000606'},
				{name:'泡泡', id:'1650934202'}
			],

		}
	}
	render(){
		return(
			<ul className="dropdown-menu">
              {
              	this.state.friends.map(
              		(friends,id)=>{
              			
              			return(
              				<li key={friends.id}><Link className="friend-list" to={`/friends/${friends.id}`}>{friends.name}</Link></li>
              			);
              		}
              	)
          	  }
			</ul>
		);
	}
}
export default Friends
