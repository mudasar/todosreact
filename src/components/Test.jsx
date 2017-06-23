import React, { Component } from 'react'
import { connect } from 'react-redux';

class Test extends Component {
    constructor(props){
        super(props);

    }
    render () {
        var {todos} = this.props;
        console.log(todos);

         function mapTodos() {
            if (todos && todos.length > 0) {
                var todoList = todos.map((todo) => { 
                    return <div key={todo.id} style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>{todo.todo} {todo.isCompleted}</div> 
                });
                return todoList
            } else {
                return <p>Nothing To Do.</p>
            }
        }

        return (
            <div>
                some thing  {todos.length}
                 <div className="row">
                <div className="large-11 medium-11 small-12 large-left medium-left column">
                    {mapTodos()}
                </div>
            </div>
            </div>
        )
    }
}

export default connect((state, ownProps) => {
    return {
        todos: state.todos
    };
})(Test) ;