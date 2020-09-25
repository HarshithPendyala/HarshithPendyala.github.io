import React, {Component} from 'react';
import { Nav, Navbar, Form, Input,NavbarBrand, NavItem,NavbarToggler,Collapse } from 'reactstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #040714; }
//   a, .navbar-nav, .navbar-light .nav-link {
//     color: #9FFFCB;
//     &:hover { color: white; }
//   }
//   .navbar-brand {
//     font-size: 1.4em;
//     color: #fff;
//     &:hover { color: white; }
//   }
//   .form-center {
//     position: absolute !important;
//     left: 25%;
//     right: 25%;
//   }
`;
class NavigationBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }
    render(){
        return(
            <React.Fragment>
                <Styles>
                    <Navbar dark expand="xl" fixed="top">
                        <div className="container">
                            <NavbarToggler onClick={this.toggleNav}/>
                            <NavbarBrand href="/" className="mr-auto"> Cinemeye</NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>                              
                                    <NavItem className="searchbar">
                                        <Form>
                                            <Input type="text" placeholder="&#xF002; Search" />
                                        </Form>
                                    </NavItem>
                                    <Nav className="ml-5" navbar>
                                        <NavItem>
                                                <a role="button" class="btn btn-dark btn-sm mr-5" style={{color:"darkgray"}}><i className="fa fa-globe"></i> En</a>
                                        </NavItem>
                                        <NavItem>
                                            <a role="button" class="btn btn-dark btn-sm mr-2" style={{color:"dodgerblue"}}>Login</a>
                                        </NavItem>
                                        <NavItem>
                                            <a role="button" class="btn btn-sm btn-primary " style={{color:"white"}} >Try Now</a>
                                        </NavItem>
                                    </Nav>
                                </Nav>
                            </Collapse>                           
                        </div>
                    </Navbar>
                </Styles>
            </React.Fragment>
        );
    }
}
export default NavigationBar; 
