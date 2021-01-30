import React,{Component} from 'react';
import './../../App.css';
import moment from 'moment'
import './../../bootstrap.css';
import TodoDataService from './../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';
import HeaderComponent from './HeaderComponent';

class ListTodosComponent extends Component{
    
    constructor(props){
        super(props);
        this.state={
            todos:
            [],
            message:null
        }
    }
    
    componentDidMount=()=>{
        
        TodoDataService.retrieveAllTodos(AuthenticationService.getLoggedInUserName())
        .then(
            response=>{
                this.setState({
                    todos:response.data
                });
            }
        )

    }

    refreshTodos=()=>{
        TodoDataService.retrieveAllTodos(AuthenticationService.getLoggedInUserName())
        .then(
            response=>{
                this.setState({
                    todos:response.data
                });
            }
        )
    }
    
    render(){
        return(
            <div>
                <HeaderComponent/>
            
                <h1>List todos</h1>
                <div className="container">
                { this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <table className="table">
                    <thead>
                        <tr>
                            <th>description</th>
                            <th>IsCompeted?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.todos.map(
                            todo=>
                                <tr key={todo.id}>
                             <td>{todo.description}</td>
                            <td>{todo.done.toString()}</td>
                            <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                            <td><button className="btn btn-warning" onClick={()=>this.deleteTodo(todo.id)}>Delete</button></td>
                            <td><button className="btn btn-success" onClick={()=>this.updateTodo(todo.id)}>Update</button></td>
                      
                        </tr>
                            
                            )
                        }
                        
                    </tbody>
                </table>
                <div className="row">
                <button className="btn btn-success" onClick={this.addTodo}>add</button>
                </div>
                </div>
            </div>
        );
    }

    addTodo=()=>{

    this.props.history.push(`/todos/${0}`)
    }
    deleteTodo=(id)=>{
        TodoDataService.deleteTodo(AuthenticationService.getLoggedInUserName(),id)
        .then(
            response=>{this.refreshTodos();
                this.setState({message:`Todo of id ${id} deleted successfully`})}
        ).catch(
            error=>this.handleErrorResponse(error)
        )
    }
    updateTodo=(id)=>{
            this.props.history.push(`/todos/${id}`)
    }


    handleErrorResponse=(error)=>{this.setState({message:`Todo NOT deleted`})}
 
}
export default ListTodosComponent