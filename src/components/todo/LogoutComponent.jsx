import React,{Component} from 'react';
import HeaderComponent from './HeaderComponent';
class LogoutComponent extends Component{
    
    render(){
        
        return(
            <><HeaderComponent/>
            
                <h1>You are logged out</h1>
                <div className="container">
                    Thank You for Using our App
                    </div> 
            </>
        );
    }
}
export default LogoutComponent