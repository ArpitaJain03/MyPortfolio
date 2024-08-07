/*eslint-disable */

import { useState } from "react";
import "./qualification.css";

const Qualification = () =>{
    const [toggleState,setToggleState] = useState(1);
    const toggleTab = (index) => {
        if (toggleState === index) {
            setToggleState(0);
        } else {
            setToggleState(index);
        }
    };
 return(
   <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey
     
      </span>

 
        <div className="qualification__container container">
        
            <div className="qualification__tabs">
            
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex " : " qualification__button button--flex "} onClick={() => {toggleTab(1)}} >
                    <i className="uil uil-graduation-cap   qualification__icon"></i>Education
                </div>
                <div className={toggleState === 2 ? "qualification__button qualification__active  button--flex" : "qualification__button button--flex"} onClick={() => {toggleTab(2)}}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" :"qualification__content"}  >
                        <div className="qualification__data">
                            <div>
                            <h3 className="qualification__title">BTech/BE</h3>
                            <span className="qualification__subtitle">Medicaps University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Sep 2021-Present
                            </div>   
                            </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                              <div>                            
                            <h3 className="qualification__title">12th </h3>
                            <span className="qualification__subtitle">Pioneer Convent School</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> May 2020 -  May 2021
                            </div>   
                            </div>
                        </div>
                        
                                               
                </div>
                <div className={toggleState === 2 ? "qualification__content qualification__content-active" :"qualification__content"} >
                        <div className="qualification__data">
                            <div>
                            <h3 className="qualification__title">Full Stack Engineer</h3>
                            <span className="qualification__subtitle">Mech-Buddy</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Jan 2024 - May 2024
                            </div>   
                            </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                              <div>                            
                            <h3 className="qualification__title"> UiPath </h3>
                            <span className="qualification__subtitle">MediCaps University</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> June 2024 - July 2024
                            </div>   
                            </div>
                        </div>                       
                </div>
            </div>
        </div>

        
   </section>
 )
}
export default Qualification