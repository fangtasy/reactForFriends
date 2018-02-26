import React, {Component} from 'react';
import axios from 'axios';
import AddQiyu from './addQiyu.js'
import './red.css'
import { createBrowserHistory as createHistory } from 'history'
class Red extends Component {
	constructor(props){
		super(props);
		this.state={
			qiyus:[],
      //length: 1,
		}
    
	}
	history = createHistory(this.props);
	componentDidMount() {
    	axios.get('/ouhuang')
          .then(res => {
      	  this.setState({qiyus: res.data})
        })
          .catch(function (error) {
            console.log(error);
        });

  	}
  	delete(id){
  		console.log(id);
  		axios.delete('/ouhuang/'+id)
      	.then((result) => {
        	this.props.history.push("/red")
      	}).catch(function (error) {
            console.log(error);
        });
      axios.get('/ouhuang')
          .then(res => {
          this.setState({qiyus: res.data})
        })
          .catch(function (error) {
            console.log(error);
        });
    }
   //  handleClick(){
   //    this.setState({length:this.state.qiyus.length+1});  
   //  }
  	// componentDidUpdate(prevProps, prevState){
      
   //    if (this.state.length !== this.state.qiyus.length){
  	// 	  axios.get('/ouhuang')
   //        .then(res => {
   //    	  this.setState({qiyus: res.data})
   //      }).catch(function (error) {
   //          console.log(error); 
   //      });
   //    }
   //  }
	render(){
		return(
			<div className="col-sm-10">
			<h2 >黑鬼们， 已经<span>{}</span>天没人出奇遇了</h2>
			<AddQiyu history={this.history} />
			<table className="table table-striped" >
  				<thead>
    			  <tr>
      				
      				<th scope="col">      奇  遇      </th>
      				<th scope="col">      欧  皇      </th>
      				<th scope="col">      时  间      </th>
      				<th scope="col"> </th>
    			  </tr>
  				</thead>
  				<tbody >{
  					this.state.qiyus.reverse().map(
  						(qiyu)=>{ 
  							return(
  							
  							<tr key={qiyu._id}>
      						<td>{qiyu.qiyu}</td>
      						<td>{qiyu.name}</td>
      						<td>{new Date(qiyu.date).toLocaleDateString()}</td>
      						<td><button className="delete" onClick={this.delete.bind(this,qiyu._id)}>X</button></td>
    						</tr>
    						
    						
  						);}
  					)
    			}	
    			</tbody>
    		</table>
    		</div>
		);
	}

}

export default Red;