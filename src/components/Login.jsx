import React, { Component } from 'react'

class Login extends Component {
    render () {
        return (
            <div>
                <h1 className="pae-title">Todo App</h1>
                <div className="row">
                    <div className="columns small-centered small-10 medium-6 large-4">
                        <div className="callout">
                            <h3>Login</h3>
                            <p>Some information about login </p>
                            <p>Login with github account</p>
                            <button className="button">Login with GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;