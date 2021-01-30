import React,{Component} from 'react';
import './../../App.css';
import './../../bootstrap.css';
import AuthenticationService from './AuthenticationService.js';
import HeaderComponent from './HeaderComponent';
class LoginComponent extends Component{
    
    constructor(props){
        super(props);
        this.state={
            username:'sushrith',
            password:'',
            hasLoginFailed:false,
            showSuccessMessage:false
        }
    }



    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    loginClicked=(props)=>{
        //location.reload();
        //sushrith,dummy
    //     if(this.state.username==='sushrith' && this.state.password==='dummy')
    //     {   
            
    //         AuthenticationService.registerSucessfulLogin(this.state.username,this.state.password);
    //         this.setState({
    //             showSuccessMessage:true,
    //             hasLoginFailed:false
    //         });
    //         this.props.history.push(`/welcome/${this.state.username}`)
            
    //     }
    //     else{
    //         this.setState({
    //             showSuccessMessage:false,
    //             hasLoginFailed:true
    //         });
    //     }
    // }
        AuthenticationService.executeBasicAuthenticationService(this.state.username,this.state.password)
        .then(
            (response)=>{
                AuthenticationService.registerSucessfulLogin(this.state.username,this.state.password);
                this.props.history.push(`/welcome/${this.state.username}`)       
               
            }
        ).catch(
            (error)=> {
                console.log(this.state.username,this.state.password)
                this.setState({
                showSuccessMessage:false,
                hasLoginFailed:true
            });
        }
      )
    }
    
    
    render(){
        return(
            <div>
                <HeaderComponent/>
            
             <h1>Login</h1>
                <div className="container">
            {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
            {this.state.showSuccessMessage && <div>Login Sucessfull</div>}
           Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button className="btn btn-success" onClick={this.loginClicked}> Login </button>
            </div>
            </div>

            );
    }



}
export default LoginComponent;