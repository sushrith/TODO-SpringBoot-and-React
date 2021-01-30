import axios from "axios";

class HelloWorldService
{
    executeHelloWorldService(){
       return axios.get('http://localhost:8080/helloworld');
    }
    executeHelloWorldPathService(name){
     
     //** Now these request will be handled by interceptor no adding of headers required here
      // console.log('executed');
     // let username='sushrith'
      //let password='dummy'  
      //let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password) 
     // console.log(basicAuthHeader)
      return axios.get(`http://localhost:8080/helloworld/path-variable/${name}`
      // ,{
      //      headers:{
      //       authorization:basicAuthHeader
      //      }
      //   }
        );
     }
}
export default new HelloWorldService()