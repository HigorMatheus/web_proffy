import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
// import { Container } from './styles';

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item" >
    <header>
        <img src="https://avatars0.githubusercontent.com/u/53712358?s=460&u=f8ea95268d66fe0a2e378b968218f32259dd0b1a&v=4" alt="Higor Matheus"/>
        <div>
            <strong>Higor Matheus</strong>
            <span>fisica</span>
        </div>
    </header>
    <p>
    Entusiasta das melhores tecnologias de química avançada.
    <br/> <br/>
    Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
    </p>
    <footer>
        <p>
            preço/hora 
            <strong>R$ 80,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="whatsapp"/>
            Entrar em contato
        </button>
    </footer>
</article>
    );
}

export default TeacherItem;