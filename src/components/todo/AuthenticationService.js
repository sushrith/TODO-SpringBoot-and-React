import axios from 'axios';
class AuthenticationService{

    executeBasicAuthenticationService=(username,password)=>{
        return axios.get('http://localhost:8080/basicAuth',
        {
            headers:{
                authorization:this.createBasicAuthToken(username,password)
            }
        }
        )
    }
    createBasicAuthToken=(username,password)=>{
      return 'Basic ' +  window.btoa(username + ":" + password) 
    }
    registerSucessfulLogin=(username,password)=>
    {
      
        sessionStorage.setItem('authenticatedUser',username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username,password))
    }
 
    logout=()=>{
        
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn=()=>{
        let user=sessionStorage.getItem('authenticatedUser');
        if(user===null)
        {
            return false;
        }
        else
        return true;
    }

    getLoggedInUserName=()=>{
        let user=sessionStorage.getItem('authenticatedUser');
        if(user===null)
        {
            return '';
        }
        else
        return user;
    }

    setupAxiosInterceptors=(basicAuthHeader)=>{
       // let username='user'
        //let password='password'  
       
        axios.interceptors.request.use(

            (config)=>{
                if(this.isUserLoggedIn()){
                config.headers.authorization=basicAuthHeader
            }
            return config
        }

        )
    }

}
export default new AuthenticationService()