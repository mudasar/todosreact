import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import {NotFound} from './NotFound';


export const Main = (props) => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            {/*<Route />*/}
            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default Main;