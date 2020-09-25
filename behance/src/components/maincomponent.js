import React, {Component} from 'react';
import NavigationBar from './navbar';
import Sidebar from './sidenavbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Tvseries from '../pages/Tvseries';



class Main extends Component{
    render(){
        return(
            <React.Fragment>
                <Router>
                <NavigationBar/>     
                    <Sidebar/>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/tvseries' component={Tvseries} />
                    </Switch>
                </Router>     
            </React.Fragment>
        );
    }
}
export default Main;