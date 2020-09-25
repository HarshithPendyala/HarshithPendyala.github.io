import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io";

export const Sidebardata = [
       {
        title: 'Main Page',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Tv-channels',
        path: '/',
        icon: <IoIcons.IoIosTv/>,
        cName: 'nav-text'
    },
    {
        title: 'Movies',
        path: '/',
        icon: <BiIcons.BiCameraMovie/>,
        cName: 'nav-text'
    },
    {
        title: 'Tv series',
        path: '/tvseries',
        icon: <BiIcons.BiMovie/>,
        cName: 'nav-text'
    },
    {
        title: 'Concerts',
        path: '/',
        icon: <BiIcons.BiMusic/>,
        cName: 'nav-text'
    },
    {
        title: 'Sport',
        path: '/',
        icon: <BiIcons.BiFootball/>,
        cName: 'nav-text'
    },{
        title: 'For Kids',
        path: '/',
        icon: <FaIcons.FaChild/>,
        cName: 'nav-text'
    },{
        title: 'Favourites',
        path: '/',
        icon: <AiIcons.AiFillStar/>,
        cName: 'nav-text'
    },{
        title: 'Personal data',
        path: '/',
        icon: <FaIcons.FaUserAlt/>,
        cName: 'nav-text'
    },
]