import React from 'react';
import './Todo.css';
import moment from 'moment';
import {connect} from 'react-redux';
var actions = require('../../actions/actions');

class Todo extends React.Component {
    constructor(props) {
        super(props);

        // this.onTodoCompleted = this
        //     .onTodoCompleted
        //     .bind(this);
    }

    // onTodoCompleted(e) {
    //     //this.props.onTodoCompleted(this.props.todo.id);
    //     this
    //         .props
    //         .dispatch(actions.toggleTodo(this.props.todo.id));
    // }

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

            return mesasge + moment
                .unix(timestamp)
                .format('MMM Do YYYY @ h:mm a');
        }
        return (
            <div className="row" onClick={ (e) => {this.props.dispatch(actions.toggleTodo(this.props.todo.id))}}>
                <div className="columns text-left">
                    <p><input
                        type="checkbox"
                        onChange={() => {}}
                        checked={todo.isCompleted}
                        ref="isCompleted"/>
                        <span className={striked}>{todo.todo}</span>
                        <br/>
                        <span className="chkpanel">{renderDate()}</span>
                    </p>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleTodo: (id) => {
            dispatch(actions.toggleTodo(id))
        }
    }
}

export default connect()(Todo);