import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api';
// import { Container } from './styles';

import './styles.css'

export interface ITeacher{
    id: number,
    subject: String,
    cost: Number,
    name: String,
    avatar: string,
    whatsapp: String,
    bio: String
}
 interface TeacherItemPropos{
    teacher: ITeacher
}



const TeacherItem: React.FC<TeacherItemPropos> = ({teacher}) => {
    function createNewConnection(){
        api.post('connections',{
            user_id: teacher.id
        })
    }
  return (
    <article className="teacher-item" >
    <header>
        <img src={teacher.avatar} alt="Higor Matheus"/>
        <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
        </div>
    </header>
    <p>{teacher.bio} </p>
    <footer>
        <p>
            preço/hora 
            <strong>R$ {teacher.cost}</strong>
        </p>
        <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`} >
            <img src={whatsappIcon} alt="whatsapp"/>
            Entrar em contato
        </a>
    </footer>
</article>
    );
}

export default TeacherItem;