import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';
import HomeCarousel from './carousel';
import { Card,CardBody,CardImg,CardText,CardTitle,CardSubtitle} from 'reactstrap';

function Home(){

    return(
        <div>
            <HomeCarousel/>
            <div className="Container">
                <div className="row row-content">
                    
                    <div className="col-12  d-flex">
                        <p style={{fontSize:"17px"}}>Movie Collections</p>
                        <a role="button" className="btn btn-dark bt3">All collections</a>
                    </div>
                    
                    <div className="col-12 col-md-3 movie">
                    <Card style={{backgroundColor:"black"}} className="movie-img" role="button">
                        <CardImg top width="100%" src="assets/movie1.jpg" alt="Card image cap" className="movie-img" />
                        <CardBody className="carbody">
                        <CardTitle>Drama</CardTitle>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-md-3 movie">
                    <Card style={{backgroundColor:"black"}}>
                        <CardImg top width="100%" src="assets/movie2.jpg" alt="Card image cap" className="movie-img"/>
                        <CardBody className="carbody">
                        <CardTitle>Futuristic</CardTitle>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-md-3 movie">
                    <Card style={{backgroundColor:"black"}}>
                        <CardImg top width="100%" src="assets/movie3.jpg" alt="Card image cap" className="movie-img"/>
                        <CardBody className="carbody">
                        <CardTitle>Comedy</CardTitle>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-md-3 movie">
                    <Card style={{backgroundColor:"black"}} className="movie-img">
                        <CardImg top width="100%" src="assets/movie4.jpg" alt="Card image cap" className="movie-img"/>
                        <CardBody className="carbody">
                        <CardTitle>Aventure</CardTitle>
                        </CardBody>
                    </Card>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <p style={{fontSize:"17px"}}>New</p>
                    </div>
                    <div className="col-12 col-md-3 movie">
                    <Card style={{backgroundColor:"black"}}>
                        <CardImg top width="100%" src="assets/new1.jpg" alt="Card image cap" className="movie-img"/>
                        <CardBody className="carbody">
                        <CardTitle>Dune</CardTitle>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-md-3 movie">
                    <Card style={{backgroundColor:"black"}}>
                        <CardImg top width="100%" src="assets/new2.jpg" alt="Card image cap" className="movie-img"/>
                        <CardBody className="carbody">
                        <CardTitle>Tenet</CardTitle>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-md-3 movie">
                    <Card style={{backgroundColor:"black"}}>
                        <CardImg top width="100%" src="assets/new3.jpg" alt="Card image cap" className="movie-img"/>
                        <CardBody className="carbody">
                        <CardTitle>Enola Holmes</CardTitle>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-md-3 movie">
                    <Card style={{backgroundColor:"black"}}>
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