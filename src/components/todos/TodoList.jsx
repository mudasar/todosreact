import React from 'react'
import {Todo} from './Todo';

export class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        const todos = this.props.todos;
        const that = this;
        function mapTodos() {
            if (todos.length > 0) {
                var todoList = todos.map((todo) => <Todo key={todo.id} todo={todo} onTodoCompleted={that.props.onToggle}/>);
                return todoList
            } else {
                return <p>No todos found.</p>
            }
        }

        return (
            <div className="row">
                <div className="large-11 medium-11 small-12 large-left medium-left column">
                    {mapTodos()}
                </div>
            </div>
        )
    }

}

export default TodoList;