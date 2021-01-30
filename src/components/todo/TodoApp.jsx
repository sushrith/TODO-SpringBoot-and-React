import React,{Component} from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import './../../App.css';
import './../../bootstrap.css';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';

import LoginComponent from './LoginComponent';
import FooterComponent from './FooterComponent';
import ErrorComponent from './ErrorComponent';
import WelcomeComponent from './WelcomeComponent';
import LogoutComponent from './LogoutComponent';
import ListTodosComponent from './ListTodosComponent';
import TodoComponent from './TodoComponent';

class TodoApp extends Component{
    render=()=>{
        return(
            <div className="TodoApp">

              <Router>
                <>
              <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <AuthenticatedRoute  path="/welcome/:name" component={WelcomeComponent}/>
              <AuthenticatedRoute  exact path="/todos" component={ListTodosComponent}/>
              <AuthenticatedRoute  path="/logout" component={LogoutComponent}/>
              <AuthenticatedRoute  path="/todos/:id" component={TodoComponent}/>
              
                <Route component={ErrorComponent}/>
                </Switch>
                <FooterComponent/>
            </>
            </Router>  
               {/* <LoginComponent/>
               <WelcomeComponent/> */}
            </div>
        );
    }


}
export default TodoApp;