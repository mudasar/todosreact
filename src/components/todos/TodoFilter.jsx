import React from 'react'

export class TodoFilter extends React.Component {

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e){
        //e.preventDefault();
        var showCompleted = this.refs.completed.checked;
        var searchText =this.refs.search.value;
       this.props.onSearch(showCompleted, searchText);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="shrink large-11 medium-11 small-12 large-centered column">
                        <form>
                            <div className="row">
                                <input type="text" ref="search" placeholder="Search todos" onChange={this.handleSearch} />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="shrink large-11 medium-11 small-12  column text-left">
                        <input
                            className="input"
                            ref="completed"
                            id="completed" onChange={this.handleSearch}
                            type="checkbox"
                            name="completed"/>
                        <label htmlFor="completed">Show completed todos</label>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default TodoFilter;