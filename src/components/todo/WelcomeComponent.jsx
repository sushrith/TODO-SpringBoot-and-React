import React,{Component} from 'react';
import './../../App.css';
import './../../bootstrap.css';
import {Link} from 'react-router-dom';
import HelloWorldService from './../../api/todo/HelloWorldService';
import HeaderComponent from './HeaderComponent';
class WelcomeComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            welcomeMessage:''
        }
    }



    render(){
        return(
            <>
            <HeaderComponent/>
            <h1>Welcome!</h1>
            <div className="container">
                Welcome {this.props.match.params.name}. 
                 you can manage your todos <Link to="/todos">here</Link>
            </div>
            <hr/>
            <div className="container">
                Click here to get a customized welcome message.
                <button onClick={this.reteriveWelcomeMessage} className="btn btn-success">Get Welcome message</button>
            </div>
            <div className="container">
            {this.state.welcomeMessage}
            </div>
            </>
        );
    }

    reteriveWelcomeMessage=()=>{
        // HelloWorldService.executeHelloWorldService()
        // .then(
        //     response=>this.handleSuccessfullResponse(response)
        // )
        
        HelloWorldService.executeHelloWorldPathService(this.props.match.params.name)
        .then(
            response=>this.handleSuccessfullResponse(response)
        ).catch(
            error=>this.handleErrorResponse(error)
        )
    }
    handleSuccessfullResponse=(response)=>{

        this.setState({
            welcomeMessage:response.data.message
        })
    }
    handleErrorResponse=(error)=>{

        console.log(error.response);
        let errorMessage='';
        if(error.message)
        {
            errorMessage+=error.message
        }
        if(error.response && error.response.data)
        {
            errorMessage+=error.response.data
        }
        this.setState({
            welcomeMessage:errorMessage
        })
    }
}
export default WelcomeComponent
