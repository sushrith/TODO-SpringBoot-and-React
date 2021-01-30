import React,{Component} from 'react';
import moment from 'moment'
import { Formik,Form,Field, ErrorMessage } from 'formik';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';

class TodoComponent extends Component
{
constructor(props){
    super(props);
    this.state={
        id:this.props.match.params.id,
        description:'',
        targetDate:moment(new Date()).format('YYYY-MM-DD')
    }
}

componentDidMount=()=>{
   
    if(this.state.id==='0')
    {
        return
    }
    else{
    TodoDataService.retrieveTodo(AuthenticationService.getLoggedInUserName(),this.props.match.params.id)
    .then(
        response=>{
            this.setState({
                description:response.data.description,
                targetDate:moment(response.data.targetDate).format('YYYY-MM-DD') 
            });
        }
    )
    }
}

onSubmit=(values)=>{
    //console.log(values);
    if(this.state.id===0)
    {
        let username=AuthenticationService.getLoggedInUserName();
        TodoDataService.createTodo(username,{
            description:values.description,
            targetDate:values.targetDate
        }).then(
            response=>{
                this.props.history.push('/todos')
            }
        )
     }



    let username=AuthenticationService.getLoggedInUserName();
    TodoDataService.updateTodo(username,this.state.id,{
        id:this.state.id,
        description:values.description,
        targetDate:values.targetDate
    }).then(
        response=>{
            this.props.history.push('/todos')
        }
    )
    


}
validate=(values)=>{

    let errors={}

    if(!values.description)
    {
        errors.description='Enter a Description'
    }
    else if(values.description.length<5)
    {
        errors.description='Enter atleast 5 characters'
    }
    if(!moment(values.targetDate).isValid())
    {
        errors.targetDate='Enter a valid Target Date'
    }

    return errors;
}

    render(){
        let description=this.state.description
        let targetDate=this.state.targetDate
       return (
       <div>
           <h1>Todo</h1>
           <div className="container">
                <Formik 
                initialValues={{
                    description:description,
                    targetDate:targetDate
                }}
                validateOnBlur={false}
                validate={this.validate}
                onSubmit={this.onSubmit}
                enableReinitialize={true}
                >
                    {   (props)=>(
                        <Form>
                            <ErrorMessage name="description" className="alert alert-warning" component="div"/>
                            <ErrorMessage name="targetDate " className="alert alert-warning" component="div"/>
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field className="form-control" type="text" name="description" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field className="form-control" type="date" name="targetDate"/>
                            </fieldset>
                            <button type="submit" className="btn btn-success">Save</button>

                        </Form>
                    )

                    }
                </Formik>
           </div>
        </div>
           );
    }
}
export default TodoComponent