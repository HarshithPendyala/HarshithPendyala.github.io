import React, {Component} from 'react';
import styled from 'styled-components';
import { ProSidebar, Menu,MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


export default class SideBar extends Component{
    render(){
        return(
            <ProSidebar width="310px">
                <Menu iconShape="round" >
                    <MenuItem icon={<span className="fa fa-home" />}  >Main Page</MenuItem>
                    <MenuItem icon={<span className="fa fa-tv" />}>TV-channels</MenuItem>
                    <MenuItem icon={<span className="fa fa-film" />}>Movies</MenuItem>
                    <MenuItem icon={<span className="fa fa-video-camera" />}>TV series</MenuItem>
                    <MenuItem icon={<span className="fa fa-music" />}>Concerts</MenuItem>
                    <MenuItem icon={<span className="fa fa-futbol-o" />}>Sport</MenuItem>
                    <MenuItem icon={<span className="fa fa-child" />}>For Kids</MenuItem>
                    <MenuItem icon={<span className="fa fa-star" />}>Favourites</MenuItem>
                    <MenuItem icon={<span className="fa fa-user" />}>Personal data</MenuItem>
                </Menu>
            </ProSidebar>
        );
    }
}