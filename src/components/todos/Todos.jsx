import React from 'react'
import uuid from 'node-uuid';
import moment from 'moment';

import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';
import { TodoFilter } from './TodoFilter';


var todosApi = require('../../api/TodoAPi');

export class Todos extends React.Component {
    constructor(props) {
        super(props)

        this.state = {todos:[], showCompleted: false, searchText: ''};
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleTodoSearch = this.handleTodoSearch.bind(this);
           this.handleTodoCompleted = this.handleTodoCompleted.bind(this);
    }

    
    componentWillMount () {
        this.setState((prevState, props) => ({
            todos : todosApi.getTodos()
        }));

        // [... this.state.todos,{todo:"make kachori", id:uuid(), isCompleted: false},{todo:"make pizza", id:uuid(), isCompleted: true}]
    }

    componentDidUpdate(){
        todosApi.setTodos(this.state.todos);
    }

    handleTodoCompleted(id){
         var todos = this.state.todos.map( (todo) => {
             if (todo.id === id) {
                 todo.isCompleted = !todo.isCompleted;
             }
             return todo;
         });
         
         this.setState({
             todos: todos
         });
    } 
    
    handleTodoSearch(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    }

    handleAddTodo(todo){
        let newTodo = {
            todo:todo,
            isCompleted: false,
            id: uuid(),
            createdAt: moment().unix()
        };
        var todos = this.state.todos;
        this.setState((prevState, props) => ({
            todos : [... this.state.todos,newTodo]
        }));
    }

    render() {
        var { todos, showCompleted, searchText } = this.state;
        var filteredTodos = todosApi.filterTodos(todos, showCompleted, searchText);

        return (
            <div className="row align-center align-middle">
                <div className="small-12 large-centered large-6 medium-6 columns">
                    <div className="callout">
                        <TodoFilter onSearch={this.handleTodoSearch} />
                        <TodoList todos={filteredTodos} onToggle={this.handleTodoCompleted} />
                        <AddTodo onAddTodo={this.handleAddTodo} />
                    </div>

                </div>
                {this.props.children}
            </div>
        )
    }
}
export default Todos;