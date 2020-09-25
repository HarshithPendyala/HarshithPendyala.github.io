import React from 'react';
import HomeCarousel from '../components/carousel';
import { Card,CardBody,CardImg,CardText,CardTitle,CardSubtitle} from 'reactstrap';

function Home(){

    return(
        <div>
            
            <div className="container">
                <div className="row">
                    <div className="col-sm offset-md-2">
                    <HomeCarousel/>
                    </div>
                </div>  
                <div className="row row-content offset-sm-2">
                    <div className="col-3 col-sm-3">
                        <p style={{fontSize:"17px"}}>Movie Collections</p>
                    </div>
                    <div className="col-3 col-sm-2 offset-sm-7 offset-4">
                        <a role="button" className="btn btn-dark mx-auto">All collections</a>
                    </div> 
                </div>              
                <div className="row row-content offset-sm-2">    
                    <div className="col-12 col-sm-3 movie">
                        <Card style={{backgroundColor:"#040714"}}>
                            <CardImg top width="100%" src="assets/movie1.jpg" alt="Card image cap" className="movie-img"/>
                            <CardBody className="carbody">
                            <CardTitle>Drama</CardTitle>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-sm-3 movie">
                        <Card style={{backgroundColor:"#040714"}}>
                            <CardImg top width="100%" src="assets/movie2.jpg" alt="Card image cap" className="movie-img"/>
                            <CardBody className="carbody">
                            <CardTitle>Futuristic</CardTitle>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-3  movie">
                        <Card style={{backgroundColor:"#040714"}}>
                            <CardImg top width="100%" src="assets/movie3.jpg" alt="Card image cap" className="movie-img"/>
                            <CardBody className="carbody">
                            <CardTitle>Comedy</CardTitle>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-3 movie">
                    <Card style={{backgroundColor:"#040714"}}>
                        <CardImg top width="100%" src="assets/movie4.jpg" alt="Card image cap" className="movie-img"/>
                        <CardBody className="carbody">
                        <CardTitle>Adventure</CardTitle>
                        </CardBody>
                    </Card>
                    </div>
                </div>
                <div className="row row-content offset-sm-2 d-flex">
                        <div className="col-12 col-sm-3">
                            <p style={{fontSize:"17px"}}>New</p>
                        </div>
                </div>   
                <div className="row row-content offset-sm-2">                
                    <div className="col-12 col-sm-3 movie">
                    <Card style={{backgroundColor:"#040714"}}>
                        <CardImg top width="100%" src="assets/new1.jpg" alt="Card image cap" className="movie-img"/>
                        <CardBody className="carbody">
                        <CardTitle>Dune</CardTitle>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-sm-3 movie">
                    <Card style={{backgroundColor:"#040714"}}>
                        <CardImg top width="100%" src="assets/new2.jpg" alt="Card image cap" className="movie-img"/>
                        <CardBody className="carbody">
                        <CardTitle>Tenet</CardTitle>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-sm-3 movie">
                    <Card style={{backgroundColor:"#040714"}}>
                        <CardImg top width="100%" src="assets/new3.jpg" alt="Card image cap" className="movie-img"/>
                        <CardBody className="carbody">
                        <CardTitle>Enola Holmes</CardTitle>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-sm-3 movie">
                    <Card style={{backgroundColor:"#040714"}}>
                        <CardImg top width="100%" src="assets/new4.jpg" alt="Card image cap" className="movie-img"/>
                        <CardBody className="carbody">
                        <CardTitle>The mule</CardTitle>
                        </CardBody>
                    </Card>
                    </div> 
                </div>
            </div>
        </div>
        
        
    );

}
export default Home;