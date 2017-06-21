import React from 'react'

export class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todo: ''};
        this.onAddTodo = this.onAddTodo.bind(this);
    }

    onAddTodo(e){
        e.preventDefault();
        
        const todo = this.refs.todo.value;
        if (todo.length > 0) {
            this.props.onAddTodo(todo);
            this.refs.todo.value = '';
        }else{
            this.refs.todo.focus();
        }
    }

    render() {
        return (

            <div className="row align-center">
                <div className="large-11 medium-11 small-12 large-centered column">
                    <form onSubmit={this.onAddTodo}>
                        <div className="row">
                            <input type="text" ref="todo" placeholder="What do you need to do?"/>
                        </div>
                        <div className="row">
                            <button className="button expanded">Add Todo</button>
                        </div>
                    </form>
                </div>
                {this.props.children}
            </div>

        )
    }
}

export default AddTodo;