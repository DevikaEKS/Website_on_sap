import React from "react";
import about from '../Assest/About.jpg'
import './how_we_are.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import icon from '../Assest/icon.png'
import money from '../Assest/Why/1-No-hidden-cost.png'
import Focus from '../Assest/Why/6-Focusing.png'
import Tailored from '../Assest/Why/2-tailored-Placement.png'
import Comprehensive from '../Assest/Why/3-Comprehensive-Support.png'
import Mentor from '../Assest/Why/4-Mentoring.png'
import Career from '../Assest/Why/5-career-Advancement.png'

export function Howweare(){
    return(
        < >
            <div className="container-fluid pt-5 mb-5 pb-5 backgroundapa" id="wcu">
                <h3 class="text-center"><b>Our unique edge</b></h3>
            <section class="serviceSec ">
                <div class="container">
                <div class="row">
                    <div class="col col-sm-4  col-12  pb-4 tex">
                    <span  class="serviceBx">
                        <img src={money} alt="cardiology-card"/>
                        <p className="text-center mt-2 tex"><b>No hidden cost</b> </p>
                        <p className="text-center ">No commission is taken</p>
                    </span>
                    </div>
                    <div class="col col-sm-4  col-12 serviceBxmr pb-4 tex">
                    <span  class="serviceBx">
                        <img src={Tailored} alt="cardiology-card"/>
                        <p className="text-center mt-2"><b>Tailored placements </b> </p>
                        <p className="text-center ">Will be advised to be placed according to their eligibility and suitable placements.</p>
                    </span>
                    </div>
                    <div class="col col-sm-4  col-12 serviceBxmr pb-4 tex">
                    <span  class="serviceBx">
                        <img src={Comprehensive} alt="cardiology-card"/>
                        <p className="text-center mt-2"><b>Comprehensive support</b></p>
                        <p className="text-center">Support throughout the entire process.</p>
                    </span>
                    </div>
                    
                    <div class="col col-sm-4  col-12 serviceBxmr pb-4 tex">
                    <span  class="serviceBx">
                        <img src={Mentor} alt="cardiology-card"/>
                        <p className="text-center mt-2"> <b>Mentor support </b></p>
                        <p className="text-center">Mentors provide guidance for your comfort.</p>
                    </span>
                    </div>
                    <div class="col col-sm-4  col-12 serviceBxmr pb-4 tex">
                    <span  class="serviceBx">
                        <img src={Career} alt="cardiology-card"/>
                        <p className="text-center mt-2"><b>Career advancement opportunities </b></p>
                        <p className="text-center ">Professional development, Language proficiency support, further opportunities are also provided</p>
                    </span>
                    </div>
                    <div class="col col-sm-4  col-12 serviceBxmr pb-4 tex">
                    <span  class="serviceBx">
                        <img src={Focus} alt="cardiology-card"/>
                        <p className="text-center mt-2"><b>Focus on well-being</b></p>
                        <p className="text-center"> Counselling sessions will be given.
</p>
                    </span>
                    </div>
                    
                    
                </div>
                </div>
            </section>
               
            </div>
        </>
    );
}