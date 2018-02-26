import React, {Component} from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import './recipes.css';
ReactModal.setAppElement('#root');

class Recipes extends Component{
	constructor(props){
		super(props);
		this.state={
			meals:[],
			name:"",
			selected:[],
			chosenMeal:"",
			showModal: false
		}
		this.onSubmit=this.onSubmit.bind(this);
		this.handleClick=this.handleClick.bind(this);
		this.serveMeal=this.serveMeal.bind(this);
		this.handleOpenModal = this.handleOpenModal.bind(this);
    	this.handleCloseModal = this.handleCloseModal.bind(this);
	}
	componentDidMount() {
    	axios.get('/recipes')
          .then(res => {
      	  this.setState({meals: res.data})
        })
          .catch(function (error) {
            console.log(error);
        });

  	}
  	handleOpenModal () {
    	this.setState({ showModal: true });
    }
  
    handleCloseModal () {
    	this.setState({ showModal: false });
    }
  	handleClick(value){
  		
  		if(this.state.selected.indexOf(value)>-1){
  			var index = this.state.selected.indexOf(value);
      		this.setState({
        		selected: this.state.selected.filter((_, i) => i !== index)
      		});
      			
  		}else{
  			var newarray=this.state.selected.slice();
  			newarray.push(value);
  			this.setState({selected:newarray});
  		}
  			
  		
  	}
  	onChange = (e) => {
    	this.setState({name:e.target.value});
  	}
  	serveMeal(){
  		var lengthR=this.state.selected.length;
  		var chosen=Math.floor(Math.random()*lengthR);
  		console.log(this.state.selected[chosen]);
  		this.setState({chosenMeal:this.state.selected[chosen]})
  		this.handleOpenModal();
  	}
  	onSubmit(e){
  		//e.preventDefault();
  		axios.post('/recipes', {name:this.state.name})
      .then((result) => {
      	//console.log(result);
        this.props.history.push("/recipes");

      }).catch(function (error) {
        console.log(error);
      });
  	}

  	render(){
  		return(
  			<div >
  			<br/>
  			  <h4>今天陌陌还是四块么？    是</h4>
  			  <ReactModal isOpen={this.state.showModal} className="Modal"  contentLabel="xx">
  			  	<div className="flipper">
  			  		<div className="front">
  			  			
  			  			<p className="meal-text">今天吃。。。。。</p>
  			  		</div>
  			  		<div className="back">
  			  			<button className="closeModal" onClick={this.handleCloseModal}>X</button>
  			  			<p className="meal-text2">{this.state.chosenMeal}</p>
          			</div>
          		</div>
        	  </ReactModal>
  			  <div className="container_meal">
  				{this.state.meals.map(
  					(meals,id)=>{
  						return(<MealSquare key={id} onMealClick={()=>this.handleClick(meals.name)}>{meals.name}</MealSquare>)
  					}
  				)}
  				<br/>
			  </div>
			  <div className="col-sm-12">
			  <button className="btn-info btn-md" onClick={this.serveMeal}>我选好了，上菜</button>
			  </div>
			  <form className="addmenu" onSubmit={this.onSubmit}>
			  <input type="text" className="form-group" name="meal" onChange={this.onChange}></input>
      		  <input type="submit" className="btn-primary btn-md" value="选择太少，我要加菜！"></input>
      		  </form>
  			</div>);
  	}
}
class MealSquare extends Component{
	constructor(props){
		super(props);
		this.state={
			color:true,
		}
		this.changeColor=this.changeColor.bind(this);
		this.handleClick=this.handleClick.bind(this);
	}
	changeColor(){
		this.setState({color:!this.state.color});
		
	}
	handleClick(){
		this.props.onMealClick();
		this.changeColor();
	}
	render(){
		let bgColor = this.state.color ?  "greenSquare": "redSquare"
		return(<div id={bgColor} className="col-xs-2" onClick={this.handleClick}>{this.props.children}</div>);
		
		
	}
}
export default Recipes