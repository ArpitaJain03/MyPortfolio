import { useState } from "react"
import "./service.css"
const Services = () => {

    const [toggleState,setToggleState] = useState(0);
    const toggleTab = (index) =>{
        setToggleState(index);
    }
    

   return (

    <section className="services section" id = "services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Web <br/> Developer</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className= {toggleState === 1 ? "services__modal active-modal"  : "services__modal" }>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => setToggleState(0)}></i>
                        <h3 className="services__modal-title">Web Developer</h3>
                        <p className="services__modal-description">Service with 0.4 years of working . Will provide quality work to clients and companies</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Develop the user interface.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web Page Development</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I created ux element interactions</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
           
            <div className="services__content">
                <div>
                    <i className="uil  uil-edit  services__icon"></i>
                    <h3 className="services__title">Ui Ux <br/> Desginer</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 3 ? "services__modal active-modal"  : "services__modal" }>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => setToggleState(0)}></i>
                        <h3 className="services__modal-title">Ui Ux Designer</h3>
                        <p className="services__modal-description">Service with 0.4 years of working . Will provide quality work to clients and companies</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Develop the user interface.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web Page Development</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I created ux element interactions</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Services