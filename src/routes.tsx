import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';
// import { Container } from './styles';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing}  />
            <Route exact path="/study" component={TeacherList}  />
            <Route exact path="/give-classes" component={TeacherForm}  />
        </BrowserRouter>
    );
}

export default Routes;