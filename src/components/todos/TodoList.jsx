import React, { Component } from 'react'
import { connect } from 'react-redux';


import Todo from './Todo';
import TodoApi from '../../api/TodoAPi';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {todos, showCompleted, searchText} = this.props;
        console.log(this.props);
        
        function mapTodos() {
            if (todos && todos.length > 0) {
                var todoList = TodoApi.filterTodos(todos, showCompleted, searchText).map((todo) => <Todo key={todo.id} {...todo} />);
                return todoList
            } else {
                return <p>Nothing To Do.</p>
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

const mapStateToProps = (state, ownProps) => {
//   console.log(state); // state
//   console.log(ownProps); // ownProps
    return state;
};


export default connect(mapStateToProps)(TodoList);