import React from 'react'
import logo from '../logo.svg';
import { Link, Button, Colors } from 'react-foundation';

export class Home extends React.Component { 
    constructor(props) { 
        super(props); 
    }

    render(){
        return(
            <div>
                <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div className="button-basics-example">
                <Link>Learn More</Link>
                <Link>View All Features</Link>
                <Button color={Colors.SUCCESS}>Save</Button>
                <Button color={Colors.ALERT}>Delete</Button>
                </div>
                {this.props.children}
            </div>
        )
    }
}
export default Home;