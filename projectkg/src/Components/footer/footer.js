import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter,faFacebook,faInstagram,faYoutube,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import kgisllogo from '../Assest/kgisl-logo.png'
import { Link as Sclink } from "react-scroll";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import './footer.css'
export function Footer(){
    return(
        <>
            {/* <div className="container-fluid bgcolor text-white pt-5" id="footer">
                <div className="row">

                    <div className="col-lg-3">
                        <h2 className="ms-5">Quick View</h2>
                        <ul className="mt-4" >
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Credentials</li>
                                <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h2 className="ms-5">Services</h2>
                        <ul className="mt-4">
                            <li><Sclink to="E-Commerce" spy={true} smooth={true} duration={500} className="dropdown-item" href="#">Manpower Consultancy for Healthcare</Sclink></li>
                            <li><Sclink to="DM" spy={true} smooth={true} duration={500} className="dropdown-item" href="#">Digital Marketing</Sclink></li>
                            <li><Sclink to="Corporate" spy={true} smooth={true} duration={500} className="dropdown-item" href="#">Startup Incubator/Accelerator Solutions</Sclink></li>
                            <li><Sclink to="itites" spy={true} smooth={true} duration={500} className="dropdown-item" href="#">IT Product for Talent Acquisition</Sclink></li>
                            <li><Sclink to="Intelligent" spy={true} smooth={true} duration={500} className="dropdown-item" href="#">IT Services and Support</Sclink></li>
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <h2 className="ms-2">Contact</h2>
                        <div className=" container-fluid row">
                            <div className="col-lg-6 ms-3 ms-lg-0">

                                <p>
                                        <span class="city">
                                           <b> COIMBATORE</b>
                                                                       
                                        </span>
                                    <br/>
                                        KGISL Campus, <br/>
                                        365 Thudiyalur Road,<br/> Saravanampatti,<br/>
                                        Coimbatore – 641035, <br/>Tamil Nadu, India.
                
                                </p>
                            </div>
                            <div className="col-lg-6 ms-3 ms-lg-0">

                                <p>
                                        <span class="city">
                                        <b> DUBAI</b> 
                                            
                                        </span>
                                    <br/>
                                        Ideaspace Business Center, <br/>
                                        Millennium Executive Tower,<br/>
                                        Sheikh Zayed Road,<br/>
                                        Dubai-United Arab Emirates
                
                                </p>
                            </div>
                        </div>
                    </div>
                        <div className="col-lg-4 pt-5 ms-auto">

                            <p>A division of</p>
                            <a href="https://www.kgisl.com/"><img src={kgisllogo} className="col-lg-4" /></a>
                        </div>
                </div>
                <hr/>
                <p className="text-center">Copyright © 2024  KGGL. All Right Reserved.</p>
            </div> */}
            <div className="container-fluid bgcolor text-white " id="footer">
                <div className="row">
                    <div className="col-lg-3 pt-5">
                        <h3>Quick View</h3>
                        <ul>
                            <li>
                                <Sclink activeClass="active" to="home" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">Home</Sclink>
                            </li>
                            <li>
                                <Sclink to="about" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">About Us</Sclink>
                            </li>
                            <li>
                            <Sclink to="services" spy={true} smooth={true} duration={500} className="nav-link active text-white" aria-current="page">Services</Sclink>
                            </li>
                            <li>
                            <Sclink to="footer" spy={true} smooth={true} duration={500} className="nav-link text-white " href="#">Contact Us</Sclink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-5 pt-5 mt-4">
                        <h3>Contact Us</h3>
                        <div className="container-fluid">
                            <div className="row">
                                <div>

                                </div>
                                <div>
                                    
                                </div>
                                <p className="col-lg-6">
                                    <p>
                                        <span class="city">
                                            <b>Coimbatore</b>                          
                                        </span>
                                        <br/>
                                            KGISL Campus, <br/>
                                            365 Thudiyalur Road,<br/>
                                            Saravanampatti,<br/>
                                            Coimbatore – 641035, <br/>
                                            Tamil Nadu, India.
                    
                                    </p>
                                </p>
                                <p className="col-lg-6">
                                    <p>
                                            <span class="city">
                                            <b>Dubai</b> 
                                                
                                            </span>
                                        <br/>
                                            Ideaspace Business Center, <br/>
                                            Millennium Executive Tower,<br/>
                                            Sheikh Zayed Road,<br/>
                                            Dubai-United Arab Emirates
                    
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pt-3 d-flex justify-content-between col-lg-6 mb-4">
                        <a href="tel:9363466093"><FontAwesomeIcon icon={faPhone} className="hoverani text-white"></FontAwesomeIcon></a>
                        <a href="mailto:info@kggeniuslabs.com"><FontAwesomeIcon icon={faEnvelope} className="hoverani text-white"></FontAwesomeIcon></a>
                        <a href="https://www.instagram.com/kggeniuslabs/"><FontAwesomeIcon icon={faInstagram} className="hoverani text-white"></FontAwesomeIcon></a>
                        <a href="https://www.linkedin.com/in/kg-genius-labs-3a73152a8/"><FontAwesomeIcon icon={faLinkedin} className="hoverani text-white"></FontAwesomeIcon></a>
                        <a href="https://www.facebook.com/people/KG-Geniuslabs/pfbid02QCbE8JcAes9juSSiChZ9NevWgGuUAhWjch68nJ8XSUCsSEfJBcadSXZ44EirVJY4l/"><FontAwesomeIcon icon={faFacebook} className="hoverani text-white"></FontAwesomeIcon></a>
                        </div>
                        <p>A division of</p>
                        <a href="https://www.kgisl.com/"><img src={kgisllogo}  className="col-lg-6 col-6 "/></a>
                        
                    </div>
                </div>
                <hr/>
                <p className="text-center">Copyright © 2024  KGGL. All Right Reserved.</p>
            </div>
        </>
    );
}