import React, {Component} from 'react';
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

class Carousel extends Component{
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
                console.log(res.data.resources);
                this.setState({gallery: res.data.resources});
            });
    }
	render(){
		return (
			<div className="container">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
           <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>
              
                    <CloudinaryContext cloudName="duvxnwzrw">
                        {
                            this.state.gallery.map(data => {
                                return (
                                    <div className="carousel-inner" key={data.public_id} role="listbox">
                                      <div className="item">
                                      <Image publicId={data.public_id}>
                                      <Transformation
                                                        crop="scale"
                                                        width="300"
                                                        height="200"
                                                        dpr="auto"
                                                        responsive_placeholder="blank"
                                      />
                                      </Image>
                                       <img src={`https://res.cloudinary.com/duvxnwzrw/image/upload/v${data.version}/${data.public_id}.jpg`} width="460" height="345"/> 
                                      </div>
                                    </div>
                                )
                            })
                        }
                    </CloudinaryContext>

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

export default Carousel;