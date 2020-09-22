import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './navbar';
import SideBar from './sidenavbar';
import Mycarousel from './carousel';
import Home from './Home';
import Tvseries from './Tvseries';
import {Link} from 'react-router-dom';


class Main extends Component{
    render(){
        return(
            <React.Fragment>
                <NavigationBar/>
                <div class="wrapper">
                    <div class="side"> 
                    <h6>categories</h6>
                    <ul>
                        <li><Link to="/Home"><span className="fa fa-home" /> Main Page</Link></li>
                        <li><a><span className="fa fa-tv" /> Tv-channels</a></li>
                        <li><a><span className="fa fa-film" /> Movies</a></li>
                        <li><Link to="/Tvseries"><span className="fa fa-video-camera" /> Tv series</Link></li>
                        <li><a><span className="fa fa-music" /> Concerts</a></li>
                        <li><a><span className="fa fa-futbol-o" /> Sport</a></li>
                        <li><a><span className="fa fa-child" /> For Kids</a></li>
                        <li><a><span className="fa fa-star" /> Favourites</a></li>
                        <li><a><span className="fa fa-user" /> Personal data</a></li>
                    </ul>
                    <div class="social_media">
                        <a href="https://www.apple.com/in/ios/app-store/" role="button" className="btn"><span class="fa fa-apple"></span> AppStore</a>
                        <a href="https://play.google.com/store?hl=en_US" role="button" className="btn"><span class="fa fa-play"></span> Google PlayStore</a>
                    </div>
                    </div>
                    
                    <div class="maincontent">
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/Home" component={Home}></Route>
                        <Route path="/Tvseries" component={Tvseries}></Route>
                    </Switch>
                    </div>                
                </div>
                
            </React.Fragment>
        );
    }
}
export default Main;