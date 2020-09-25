import React from 'react';
import {Card,CardBody,CardImg,CardImgOverlay,CardText,CardTitle,Button,Table} from 'reactstrap';
function Tvseries(){
    return(
        <div className="container tvseries">
            <div className="row offset-sm-2 d-sm-block">
                <div className="col-12 col-sm">
                <Card className="tcard">
                    <CardImg className="tcardimg" src="/assets/west1.jpg" alt="Card image cap" />
                    <CardImgOverlay id="play1">
                    <CardText>
                        Action | Drama | Series | 2018
                    </CardText>
                    <CardTitle style={{fontSize:"35px"}}><strong>WestWorld</strong></CardTitle>
                    <CardText>
                        Seasons:
                    </CardText>
                    <Button className="btn-light mr-3 btn mx-auto">Season 1</Button>
                    <Button className="btn-dark mr-3 btn mx-auto">Season 2</Button>
                    <Button className="btn-dark mr-3 btn mx-auto">Season 3</Button>
                    <Button className="btn-dark mr-3 btn mx-auto">Season 4</Button>
                    <Button className="btn-dark mr-3 btn mx-auto">Season 5</Button>
                    </CardImgOverlay>
                </Card>
                </div>
            </div>
            <div className="row row-content offset-sm-2">
                <div className="col-12 col-sm-3 ">
                    <Card>
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
                <div className="col-12 col-sm-3 offset-3 d-flex flex-column">
                    <a role="button" className="btn btn-dark mx-auto" ><i className="fa fa-star"></i> In favourites</a>
                    <a role="button" className="btn btn-dark mx-auto"><i className="fa fa-play-circle"></i> Watch Later</a>
                </div> 
            </div>
            <div className="row row-content align-items-center offset-sm-2">
                <div className="col-12 col-sm-6 d-flex flex-column">
                    <p style={{fontSize:"17px"}}>Description</p>
                    <p>Westworld is an American science fiction Western and dystopian television series created by Jonathan Nolan and Lisa Joy. Produced by HBO, it is based on the 1973 film of the same name (written and directed by Michael Crichton) and, to a lesser extent, the film's 1976 sequel Futureworld. The story begins in Westworld, a fictional, technologically advanced Wild-West-themed amusement park populated by android "hosts". The park caters to high-paying "guests" who may indulge their wildest fantasies within the park without fear of retaliation from the hosts, who are prevented by their programming from harming humans. Later on, in the third season, the series' plot expands to the real world, in the mid-21st century, where people's lives are driven and controlled by a powerful artificial intelligence named Rehoboam.</p>
                </div>
                <div className="col-12 col-sm" style={{marginTop:"25px"}}>
                    <Table borderless dark> 
                        <tr>
                            <td style={{color:"gray"}}>Director:</td>
                            <td> Jonathan Nolan, Johnny Campbell, Richard J.Lewis</td>
                        </tr>
                        <tr>
                            <td style={{color:"gray"}}>Cast:</td>
                            <td> Anthony Hopkins, Ed Harris, Evan Rachel Wood, James Marsden, Thandie Newton</td>
                        </tr>
                        <tr>
                            <td style={{color:"gray"}}>Country:</td>
                            <td>USA</td>
                        </tr>
                        <tr>
                            <td style={{color:"gray"}}>Production:</td>
                            <td>HBO</td>
                        </tr>

                    </Table>
                    {/* <p className="">Director: Jonathan Nolan, Johnny Campbell, Richard J.Lewis</p>
                    <p className="">Cast: Anthony Hopkins, Ed Harris, Evan Rachel Wood, James Marsden, Thandie Newton</p>
                    <p className="">Country: USA</p>
                    <p className="">Production: HBO</p> */}
                </div>
            </div>
            <div className="row row-content offset-sm-2">
                    <div className="col-12">
                        <p style={{fontSize:"17px"}}>Season 1 Series</p>
                    </div>
                    <div className="col-12 col-sm-3 movie">
                    <Card style={{backgroundColor:"#040714"}}>
                        <CardImg top width="100%" src="assets/ep1.jpg" alt="Card image cap" className="movie-img" />
                        <CardBody className="carbody">
                        <CardTitle>The Original</CardTitle>
                        <CardText>Episode 1</CardText>
                        </CardBody>
                    </Card>                    
                    </div>
                    <div className="col-12 col-sm-3 movie">
                    <Card style={{backgroundColor:"#040714"}}>
                        <CardImg top width="100%" src="assets/ep2.jpg" alt="Card image cap" className="movie-img" />
                        <CardBody className="carbody">
                        <CardTitle>Chestnut</CardTitle>
                        <CardText>Episode 2</CardText>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-sm-3 movie">
                    <Card style={{backgroundColor:"#040714"}}>
                        <CardImg top width="100%" src="assets/ep3.jpg" alt="Card image cap" className="movie-img"/>
                        <CardBody className="carbody">
                        <CardTitle>The Stray</CardTitle>
                        <CardText>Episode 3</CardText>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-sm-3 movie">
                    <Card style={{backgroundColor:"#040714"}}>
                        <CardImg top width="100%" src="assets/ep4.jpg" alt="Card image cap" className="movie-img" />
                        <CardBody className="carbody">
                        <CardTitle>Dissonance Theory</CardTitle>
                        <CardText>Episode 4</CardText>
                        </CardBody>
                    </Card>
                    </div> 
                </div>                   
                   
        </div>
    );
}
export default Tvseries;