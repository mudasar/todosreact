import React from 'react';
import './Todo.css';

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
    return (
        <div className="row" onClick={this.onTodoCompleted}>
            <div className="columns text-left">
                <input type="checkbox" onChange={()=>{}} checked={todo.isCompleted} ref="isCompleted" /> <label className={striked}>{todo.todo}</label>
            </div>
        </div>
    )
}
}

export default Todo;