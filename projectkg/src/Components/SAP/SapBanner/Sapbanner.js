// 
import React from 'react';
import "./Sapbanner.css";
import Bannerimg from "../Asset/Girl Banner Image.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"/>

function SapBanner() {
  return (
    <div className='container-fluid bannerpage m-0 p-0' id='sapbanner'>
      <div className='row d-flex justify-content-evenly align-items-center'>
        <div className='col-md-6 mx-1'>
          <h1 className='main-text'>Rise and Grow with SAP</h1>
          <h3 className='subtext'>THE ROADMAP OF YOUR DIGITAL TRANSFORMATION</h3>
          <p className='parasap'>Embrace digital transformation and business growth with SAP's Rise and Grow. Streamline tactics, enhance customer experiences, unlock new opportunities, and drive sustainable growth.</p>
          <button className='px-4 explorebutton'>EXPLORE <FontAwesomeIcon icon={faCircleArrowRight}></FontAwesomeIcon></button>
        </div>
        <div className='col-md-5'>
          <img src={Bannerimg} alt='loading' className='banner-image'/>
        </div>
      </div>
    </div>
  )
}

export default SapBanner
