import React, {Component} from 'react';
import axios from 'axios'
class Posts extends Component{
	constructor(props){
		super(props);
		this.state={
			posts:[],
		}
	}
	componentDidMount() {
    	axios.get('/posts')
          .then(res => {
      	    this.setState({posts: res.data})
      	//console.log(this.state.friends);
        });
  	}
  	render(){
  		return(
  			<div>
  			<h3>先别（biè）说话</h3>
  			<ul>{
  			this.state.posts.map(
  				(posts)=>{
  					return(
  						<li key="posts._id">posts.content</li>
  					)
  				}
  			)
  			}
  			</ul>
  			</div>
  		);
  	}
}
export default Posts;