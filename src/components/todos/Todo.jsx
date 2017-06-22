import React from 'react';
import './Todo.css';
import moment from 'moment';

export class Todo extends React.Component{
    constructor(props){
        super(props);

        this.onTodoCompleted = this.onTodoCompleted.bind(this);
    }

    onTodoCompleted(e){
        this.props.onTodoCompleted(this.props.todo.id);
    }

    render() {
    const todo = this.props.todo;
    let striked = "";
    if (todo.isCompleted) {
        striked = "todo-striked";
    }
//defaultChecked={todo.isCompleted}
    var renderDate = () => {
        var mesasge = 'Created ';
        var timestamp = todo.createdAt;

        return mesasge + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    }
    return (
        <div className="row" onClick={this.onTodoCompleted}>
            <div className="columns text-left">
                <input type="checkbox" onChange={()=>{}} checked={todo.isCompleted} ref="isCompleted" /> 
                
                <p><span className={striked}>{todo.todo}</span> <br/>
                <span>{renderDate()}</span></p>
            </div>
        </div>
    )
}
}

export default Todo;