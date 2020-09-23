import React, {Component} from 'react';
import { Nav, Navbar, Form, Input,NavbarBrand, NavItem,NavLink,Collapse } from 'reactstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #fff;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
class NavigationBar extends Component{
    render(){
        return(
            <div>
                <Styles>
                    <Navbar expand="lg" fixed="top">
                    <NavbarBrand href="/"><strong>Cinemeye</strong></NavbarBrand>
                    <Form className="form-center">
                        <Input type="text" placeholder="&#xF002; Search" className="searchbar" />
                    </Form>
                        <Nav className="ml-auto">
                        {/* <NavItem><NavLink href="/">Home</NavLink></NavItem> 
                        <NavItem><NavLink href="/about">About</NavLink></NavItem> */}
                        <NavItem>
                            <a role="button" class="btn btn-dark btn-sm mr-3" style={{color:"dodgerblue"}}>Login</a>
                        </NavItem>
                        <NavItem>
                            <a role="button" class="btn btn-sm btn-primary mr-6" style={{color:"white"}} >Try Now</a>
                        </NavItem>
                        </Nav>
                    </Navbar>
                </Styles>
            </div>
        );
    }
}
export default NavigationBar; 
