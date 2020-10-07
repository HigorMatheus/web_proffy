import React, { useEffect, useState } from 'react';
import{Link} from 'react-router-dom'
import logoimg from '../../assets/images/logo.svg'
import landingimg from '../../assets/images/landing.svg'
import study from '../../assets/images/icons/study.svg'
import givClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import './styles.css'
import api from '../../services/api';


const Landing: React.FC =()=> {
    const [totalConections, setTotalConections]= useState(0)

    useEffect(()=>{
        api.get('/connections').then( response=>{
            const total = response.data.total


            setTotalConections(total)
            
        })
    },[])

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
                    total de {totalConections} conexões já realizadas <img src={purpleHeartIcon} alt="coracção roxo"/>
                </span>
            </div>
        </div>
    );
}

export default Landing;