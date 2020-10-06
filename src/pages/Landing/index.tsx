import React from 'react';
import{Link} from 'react-router-dom'
import logoimg from '../../assets/images/logo.svg'
import landingimg from '../../assets/images/landing.svg'
import study from '../../assets/images/icons/study.svg'
import givClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import './styles.css'


function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoimg} alt="Proffy"/>
                    <h2>sua pataforma de estudos online</h2>
                </div>
                <img src={landingimg} alt="" className="hero-image"/>
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={study} alt="estudar"/>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={givClassesIcon} alt="estudar"/>
                        Dar aulas
                    </Link>
                </div>
                <span className="total-connections">
                    total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="coracção roxo"/>
                </span>
            </div>
        </div>
    );
}

export default Landing;