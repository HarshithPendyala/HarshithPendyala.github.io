import React from 'react';
import {Card,CardBody,CardImg,CardImgOverlay,CardText,CardTitle,CardGroup,Button,CardDeck} from 'reactstrap';
function Tvseries(){
    return(
        <div className=" Container tvseries">
            {/* <p style={{color:"white"}}>UNDER CONSTRUCTION</p> */}
            <div className="row">
                <div className="col-12">
                <Card inverse className="tcard">
                    <CardImg className="tcardimg" src="/assets/west1.jpg" alt="Card image cap" />
                    <CardImgOverlay id="play1">
                    <CardText>
                        Action | Drama | Series | 2018
                    </CardText>
                    <CardTitle style={{fontSize:"35px"}}><strong>WestWorld</strong></CardTitle>
                    <CardText>
                        Seasons:
                    </CardText>
                    <Button className="btn-light mr-3 bt">Season 1</Button>
                    <Button className="btn-dark mr-3 bt">Season 2</Button>
                    <Button className="btn-dark mr-3 bt">Season 3</Button>
                    <Button className="btn-dark mr-3 bt">Season 4</Button>
                    <Button className="btn-dark mr-3 bt">Season 5</Button>
                    </CardImgOverlay>
                </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-sm-3">
                    <Card inverse>
                        <CardImg className="continueimg" src="assets/west2.jpg"/>
                        <CardImgOverlay id="play"><CardText>
                        <i className="fa fa-play-circle fa-5x"></i>
                        </CardText>
                    </CardImgOverlay>
                    </Card>
                </div>  
                <div className="col-12 col-sm-3 d-flex flex-column" id="continue">
                    <p>Continue watching</p>
                    <small className="text-muted">Season 1 Series 3</small>
                    <p>"The Stray"</p>
                </div> 
                <div className="col-12 col-sm offset-3 d-flex flex-column">
                    <a role="button" className="btn btn-dark" style={{margin:"10px",width:"200px"}}><span className="fa fa-star"> In favourites</span></a>
                    <a role="button" className="btn btn-dark"style={{margin:"10px",width:"200px"}}><span className="fa fa-play-circle"> Watch Later</span></a>
                </div> 
            </div>
            <div className="row row-content align-items-center">
                <div className="col-12 col-md-6 d-flex flex-column">
                    <p>Description</p>
                    <p>Westworld is an American science fiction Western and dystopian television series created by Jonathan Nolan and Lisa Joy. Produced by HBO, it is based on the 1973 film of the same name (written and directed by Michael Crichton) and, to a lesser extent, the film's 1976 sequel Futureworld. The story begins in Westworld, a fictional, technologically advanced Wild-West-themed amusement park populated by android "hosts". The park caters to high-paying "guests" who may indulge their wildest fantasies within the park without fear of retaliation from the hosts, who are prevented by their programming from harming humans. Later on, in the third season, the series' plot expands to the real world, in the mid-21st century, where people's lives are driven and controlled by a powerful artificial intelligence named Rehoboam.</p>
                </div>
                <div className="col-12 col-md-1 d-flex flex-column" style={{marginTop:"25px"}}>
                    <p className="text-muted">Director:</p>
                    <p className="text-muted">Cast:</p>
                    <p className="text-muted">Country:</p>
                    <p className="text-muted">Production:</p>
                </div>
                <div className="col-12 col-md d-flex flex-column" style={{marginTop:"25px"}}>
                    <p >Jonathan Nolan, Johnny Campbell, Richard J.Lewis</p>
                    <p >Anthony Hopkins, Ed Harris, Evan Rachel Wood, James Marsden, Thandie Newton</p>
                    <p >USA</p>
                    <p >HBO</p>
                </div>
            </div>
            <div className="row row-content">
                    <div className="col-12">
                        <p>Season 1 Series</p>
                    </div>
                    <div className="col-12 col-md-3 movie">
                    <Card style={{backgroundColor:"#222"}}>
                        <CardImg top width="100%" src="assets/new1.jpg" alt="Card image cap" className="movie-img" />
                        <CardBody className="carbody">
                        <CardTitle>Dune</CardTitle>
                        </CardBody>
                    </Card>                    
                    </div>
                    <div className="col-12 col-md-3 movie">
                    <Card style={{backgroundColor:"#222"}}>
                        <CardImg top width="100%" src="assets/new4.jpg" alt="Card image cap" className="movie-img" />
                        <CardBody className="carbody">
                        <CardTitle>The mule</CardTitle>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-md-3 movie">
                    <Card style={{backgroundColor:"#222"}}>
                        <CardImg top width="100%" src="assets/new2.jpg" alt="Card image cap" className="movie-img"/>
                        <CardBody className="carbody">
                        <CardTitle>Tenet</CardTitle>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-md-3 movie">
                    <Card style={{backgroundColor:"#222"}}>
                        <CardImg top width="100%" src="assets/new3.jpg" alt="Card image cap" className="movie-img" />
                        <CardBody className="carbody">
                        <CardTitle>Enola Holmes</CardTitle>
                        </CardBody>
                    </Card>
                    </div> 
                </div>                   
                   
        </div>
    );
}
export default Tvseries;