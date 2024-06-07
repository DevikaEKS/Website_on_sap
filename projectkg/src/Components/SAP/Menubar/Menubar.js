// import React from "react";
// import './Menubar.css'
// import logo from '../../Assest/GL.png'
// import { Link as Sclink } from "react-scroll";
// import { Link } from "react-router-dom";
// export function Menusap(){
//     return(
//         <>
//             <nav class="navbar navbar-expand-lg bgcolor navmain">
//                 <div class="container-fluid">
//                     <a class="navbar-brand col-lg-5 col-8" href="#">
//                         <Link to='/'><img src={logo} className="siz"/></Link>
//                     </a>
//                     <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon "></span>
//                     </button>
//                     <div class="collapse navbar-collapse col-lg-6" id="navbarSupportedContent">
//                     <ul class="navbar-nav ms-auto">
//                         <li class="nav-item me-5 ">
//                         <Sclink activeClass="active" to="sapbanner" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">Home</Sclink>
//                         </li>
//                         <li class="nav-item me-5">
//                         <Sclink to="aboutsap" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">About Us</Sclink>
//                         {/* <a class="nav-link text-white " href="#">About US</a> */}
//                         </li>
//                         <li class="nav-item me-5 ">
//                         <Sclink activeClass="active" to="expertisesap" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">Services</Sclink>
//                         </li>
//                         <li class="nav-item me-5">
//                         <Sclink to="footer" spy={true} smooth={true} duration={500} className="nav-link text-white " href="#">Contact Us</Sclink>
//                         </li>
//                     </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }

import React, { useState } from "react";
import './Menubar.css'
import logo from '../../Assest/GL.png'
import { Link as Sclink } from "react-scroll";
import { Link } from "react-router-dom";

export function Menusap() {
    const [collapsed, setCollapsed] = useState(true);

    const handleLinkClick = () => {
        setCollapsed(true);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bgcolor navmain">
                <div className="container-fluid">
                    <a className="navbar-brand col-lg-5 col-8" href="#">
                        <Link to='/'><img src={logo} className="siz" alt="Logo" /></Link>
                    </a>
                    <button 
                        className="navbar-toggler bg-white" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                        onClick={() => setCollapsed(!collapsed)} // Toggle collapse state
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse col-lg-6 ${collapsed ? 'collapse' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-5">
                                <Sclink 
                                    activeClass="active" 
                                    to="sapbanner" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500} 
                                    className="nav-link active text-white" 
                                    aria-current="page"
                                    onClick={handleLinkClick} // Collapse navbar on link click
                                >
                                    Home
                                </Sclink>
                            </li>
                            <li className="nav-item me-5">
                                <Sclink 
                                    to="aboutsap" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500} 
                                    className="nav-link active text-white" 
                                    aria-current="page"
                                    onClick={handleLinkClick} // Collapse navbar on link click
                                >
                                    About Us
                                </Sclink>
                            </li>
                            <li className="nav-item me-5">
                                <Sclink 
                                    activeClass="active" 
                                    to="expertisesap" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500} 
                                    className="nav-link active text-white" 
                                    aria-current="page"
                                    onClick={handleLinkClick} // Collapse navbar on link click
                                >
                                    Services
                                </Sclink>
                            </li>
                            <li className="nav-item me-5">
                                <Sclink 
                                    to="footer" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500} 
                                    className="nav-link text-white" 
                                    href="#"
                                    onClick={handleLinkClick} // Collapse navbar on link click
                                >
                                    Contact Us
                                </Sclink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
