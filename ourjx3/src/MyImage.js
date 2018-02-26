import React, {Component} from 'react';
import axios from 'axios';

class MyImage extends Component{
	constructor(props){
		super(props);
		this.state={
			gallery:[],
		};
	}
	componentDidMount() {
        // Request for images tagged xmas       
        axios.get('https://res.cloudinary.com/duvxnwzrw/image/list/family.json')
            .then(res => {
                this.setState({gallery: res.data.resources});
            });
    }
	render(){
		return (
			<div className="container">
            <br />
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>
			     <div className="carousel-inner" role="listbox">
                 <div className="item active" >
                    <img src="../image/jx31.jpg" alt="loading"/>
                </div>
                {this.state.gallery.map((data,id)=>
                    {
                        return(
                            <div className="item" key={id}>
                                <img src={`https://res.cloudinary.com/duvxnwzrw/image/upload/v${data.version}/${data.public_id}.jpg`} alt="loading" />
                                
                            </div>
                        );
                    }
                 )
                }
                </div>
                <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            </div>
		);
	}
}

export default MyImage;
