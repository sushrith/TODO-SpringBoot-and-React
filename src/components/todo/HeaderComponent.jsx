import React,{Component} from 'react';
import AuthenticationService from './AuthenticationService.js';
import {Link} from 'react-router-dom';
class HeaderComponent extends Component{
    render(){
        const isUserLoogedIn=AuthenticationService.isUserLoggedIn();
        return(
            
         <header>
             <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                 <div><a className="navbar-brand" href="https://react-bootstrap.github.io/"> React</a>
                 </div>
                 <ul className="navbar-nav">
                        {isUserLoogedIn && <li ><Link className="nav-link" to="/welcome/sushrith">Home</Link></li>}
                        {isUserLoogedIn &&<li ><Link className="nav-link" to="/todos">Todos</Link></li>}
                 </ul>
                 <ul className="navbar-nav navbar-collapse justify-content-end">
                   {!isUserLoogedIn && <li ><Link className="nav-link" to="/login">Login</Link></li>}
                   {isUserLoogedIn && <li ><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout} >Logout</Link></li>}
                 </ul>
             </nav>
         </header>  
        );
    }
}
export default HeaderComponent 