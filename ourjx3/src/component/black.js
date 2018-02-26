import React, {Component} from 'react';
import "./black.css";

class Black extends Component {
	constructor(props){
		super(props);
		this.state={
			member:Array(25).fill(0),
			
		}
		this.onBtnClicked=this.onBtnClicked.bind(this);
		this.generateRandom=this.generateRandom.bind(this);
	}
	onBtnClicked(value){
		var single=this.state.member[value]==0?1:0;
		var members=this.state.member.slice();
		members[value]=single;
		this.setState({member:members});
	}
	renderSquare(i){
		return <Square key={i} value={this.state.member[i]} handleClick={()=>this.onBtnClicked(i)}/>
	}
	generateRandom(){
		var black=[];
		for(let i=0;i<this.state.member.length;i++){
			if(this.state.member[i]==1){
				black.push(i);
			}
		}
		var chosen=Math.floor(Math.random() *black.length);
		var members=this.state.member.slice();
		members[black[chosen]]=2;
		this.setState({member:members});

	}
	render(){
		var rows=Array(5).fill(null);
		var colums=Array(5).fill(null);
		return(
		  <div>
			<h2 >都那么黑，结果都一样</h2>
			<div>{
				rows.map((rows,id)=>{
					return(
						<div key={id}>
						{
							colums.map((colums,num)=>this.renderSquare(5*id+num))
						}
						</div>
					);
				})
			}
			</div>
			<br/>
			<button id="roll" onClick={this.generateRandom}>roll</button>
		  </div>
		);
	}

}
class Square extends Component {
  
  render() {
  	if(this.props.value==0){
    	return (
      		<button className="square-green" onClick={this.props.handleClick}>
        	离线
      	</button>
    	);
    }else if(this.props.value==1){
    	return (
      		<button className="square-black" onClick={this.props.handleClick}>
        	黑鬼
      		</button>
    	);
    }else{
    	return (
      		<button className="square-red" onClick={this.props.handleClick}>
        	欧皇
      		</button>
    	);
    }
  }
}


export default Black;