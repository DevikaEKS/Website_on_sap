import React from "react";
import './Credentials.css'
import CountUp, { useCountUp } from 'react-countup';
export function Credentials(){
    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
      });
    return(
        <>
        <div className="bg-white zindex pb-5">
             <h1 className="text-center p-5 heading is-regular-title ">Credentials</h1>
             <div className="container-fluid  ">
                <div className="row flexing1 text-center me-5"   >
                    <div className="col-lg-3 col-12 sideborder">
                        <h1 className="text-primarycolor fontsize">
                            <CountUp start={0} end={7} enableScrollSpy  className="fontsize"></CountUp>+
                        </h1>
                        <h2>countries</h2>
                    </div>
                    <div className="col-lg-3 col-12 sideborder">
                    <h1 className="text-primarycolor">
                            <CountUp start={0} end={25} enableScrollSpy ></CountUp>+
                        </h1>
                        <h2>years legacy</h2>
                    </div>
                    <div className="col-lg-3 col-12 sideborder">
                    <h1 className="text-primarycolor">
                            <CountUp start={0} end={270} enableScrollSpy ></CountUp>+
                        </h1>
                        <h2>satisfied clients</h2>

                    </div>
                    <div className="col-lg-3 col-12 mt-5">
                    <h1 className="text-primarycolor">
                            <CountUp start={0} end={1700} enableScrollSpy ></CountUp>+
                        </h1>
                        <h2 className="">experienced talents</h2>
                    </div>
                </div>      
             </div>
        </div>
        </>
    );
}