import React,{useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom';
import './Sidenavbar.css';
import {Sidebardata} from './Sidebardata';
import {IconContext} from 'react-icons';



function Sidebar() {
    const [side,setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!side);
    return (
        <>
        <IconContext.Provider value={{color:"#fff"}}>

        <div className="container">

            <div className="sidebar">
            <div>
            <Link className="menu-bars" style={{textDecoration:"none"}}>
                <FaIcons.FaBars onClick={showSidebar}/>
                <span style={{color:"white",textDecoration:"none"}} onClick={showSidebar}>Categories</span>    
                </Link>
            </div>
                
            </div>
            <nav className={side ? 'nav-menu active':'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars" style={{textDecoration:"none"}}  onClick={showSidebar} >
                            <AiIcons.AiOutlineClose/> 
                            <i>Close</i>
                        </Link>
                    </li>
                    {Sidebardata.map((item,index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path} style={{textDecoration:"none"}}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

            </nav>
        </div>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar;
